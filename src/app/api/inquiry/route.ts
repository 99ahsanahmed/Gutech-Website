import { NextResponse } from 'next/server';

import { saveInquiry } from '@/lib/inquiry-store';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      interest?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const interest = body.interest?.trim();
    const message = body.message?.trim();

    if (!name || !email || !interest || !message) {
      return NextResponse.json(
        { message: 'Please complete all inquiry fields.' },
        { status: 400 },
      );
    }

    saveInquiry({
      name,
      email,
      interest,
      message,
    });

    return NextResponse.json({
      message:
        'Inquiry received. The contact form is now wired and ready for follow-up handling.',
    });
  } catch {
    return NextResponse.json(
      { message: 'Unable to submit your inquiry right now.' },
      { status: 500 },
    );
  }
}
