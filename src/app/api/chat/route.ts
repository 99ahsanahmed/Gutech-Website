import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Note: Process.env.GEMINI_API_KEY is automatically loaded by the SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy_key' });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Provide system instructions context if you want it to act like a university guide
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
    });
    
    return NextResponse.json({ message: response.text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate AI response' }, { status: 500 });
  }
}
