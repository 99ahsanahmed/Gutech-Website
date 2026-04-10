import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

import { extractLead } from '@/lib/chatbot';
import { saveChatLead } from '@/lib/inquiry-store';
import { departments, programs, siteConfig } from '@/lib/site-data';

const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

function buildContext() {
  return [
    `University: ${siteConfig.legalName}`,
    `Admissions email: ${siteConfig.email}`,
    `Info email: ${siteConfig.infoEmail || siteConfig.email}`,
    `Phone: ${siteConfig.phone}`,
    `Address: ${siteConfig.address}`,
    `Programs: ${programs.map((program) => `${program.title} (${program.category})`).join(', ')}`,
    `Departments: ${departments.map((department) => department.title).join(', ')}`,
    `Goal: Represent GU Tech professionally. Focus heavily on pushing the asker toward admission securely, warmly encouraging them to apply. If they ask about admission, direct them to ${siteConfig.email} or point them toward submitting an application from the portal.`
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();
    const history = body.history || [];

    if (!message) {
      return NextResponse.json({ message: 'Please enter a question.' }, { status: 400 });
    }

    try {
      const lead = extractLead(message);
      if (lead) saveChatLead(lead);
    } catch {
      // Non-critical background lead-parser errors ignored safely
    }

    if (!genAI) {
      return NextResponse.json({
        message:
          'The AI assistant is currently unavailable. Please connect the Gemini API key, or contact admissions via WhatsApp or email.',
      });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: buildContext(),
    });

    const chat = model.startChat({
      history: history.map((msg: { role: string; text: string }) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.text }],
      })),
      generationConfig: {
        maxOutputTokens: 600,
      },
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({
      message: text ?? 'I could not generate a complete response. Please ask again.',
    });
  } catch (error: any) {
    if (error.status === 429 || error.message?.includes('429')) {
      return NextResponse.json({
        message: 'System is busy, please wait a moment',
      }, { status: 429 });
    }

    return NextResponse.json({
      message:
        'I could not connect to the assistant service right now. Please use the contact page or WhatsApp admissions support.',
    }, { status: 500 });
  }
}
