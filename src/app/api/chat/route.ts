import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

import { buildChatbotContext, buildFallbackAnswer, extractLead } from '@/lib/chatbot';
import { saveChatLead } from '@/lib/inquiry-store';

const modelCandidates = ['gemini-2.0-flash-lite', 'gemini-2.0-flash', 'gemini-2.5-flash'];

function getGenAIClient() {
  const apiKey =
    process.env.GOOGLE_GENAI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;

  return apiKey ? new GoogleGenerativeAI(apiKey) : null;
}

async function generateAssistantReply(
  history: Array<{ role: string; text: string }>,
  message: string,
) {
  const client = getGenAIClient();

  if (!client) {
    return null;
  }

  const systemInstruction = buildChatbotContext(message);
  let lastError: unknown;

  for (const modelName of modelCandidates) {
    try {
      const model = client.getGenerativeModel({
        model: modelName,
        systemInstruction,
      });

      const chat = model.startChat({
        history: history.map((msg) => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.text }],
        })),
        generationConfig: {
          maxOutputTokens: 400,
        },
      });

      const result = await chat.sendMessage(message);
      const text = result.response.text()?.trim();

      if (text) {
        return text;
      }
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  return null;
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

    try {
      const response = await generateAssistantReply(history, message);

      if (response) {
        return NextResponse.json({ message: response });
      }
    } catch (assistantError) {
      console.error('Chat assistant upstream error:', assistantError);
    }

    return NextResponse.json({
      message: buildFallbackAnswer(message),
    });
  } catch (error: unknown) {
    console.error('Chat route failed:', error);

    return NextResponse.json({
      message: buildFallbackAnswer('general information'),
    });
  }
}
