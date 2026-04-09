import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

import { extractLead } from '@/lib/chatbot';
import { saveChatLead } from '@/lib/inquiry-store';
import { departments, programs, siteConfig } from '@/lib/site-data';

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

function buildContext() {
  return [
    `University: ${siteConfig.legalName}`,
    `Admissions email: ${siteConfig.email}`,
    `Info email: ${siteConfig.infoEmail}`,
    `Phone: ${siteConfig.phone}`,
    `Address: ${siteConfig.address}`,
    `Programs: ${programs.map((program) => `${program.title} (${program.category})`).join(', ')}`,
    `Departments: ${departments.map((department) => department.title).join(', ')}`,
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { message?: string };
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ message: 'Please enter a question.' }, { status: 400 });
    }

    const lead = extractLead(message);
    saveChatLead(lead);

    if (!ai) {
      return NextResponse.json({
        message:
          'The AI assistant is currently unavailable. Please connect the Gemini API key, or contact admissions via WhatsApp or email.',
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `${buildContext()}\n\nAnswer as the GU TECH website assistant. Stay concise, avoid making up facts, and direct admissions questions to ${siteConfig.email} or ${siteConfig.phone}.\n\nUser question: ${message}`,
            },
          ],
        },
      ],
    });

    return NextResponse.json({
      message: response.text ?? 'I could not generate a complete response. Please ask again.',
    });
  } catch {
    return NextResponse.json({
      message:
        'I could not connect to the assistant service right now. Please use the contact page or WhatsApp admissions support.',
    });
  }
}
