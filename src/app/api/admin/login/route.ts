import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
  createAdminSessionToken,
  verifyAdminCredentials,
} from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      username?: string;
      password?: string;
    };

    const username = body.username?.trim() ?? '';
    const password = body.password ?? '';

    if (!username || !password) {
      return NextResponse.json({ message: 'Username and password are required.' }, { status: 400 });
    }

    if (!verifyAdminCredentials(username, password)) {
      return NextResponse.json({ message: 'Invalid admin credentials.' }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(
      ADMIN_SESSION_COOKIE,
      createAdminSessionToken(username),
      adminSessionCookieOptions(),
    );

    return NextResponse.json({ message: 'Authenticated.' });
  } catch {
    return NextResponse.json({ message: 'Login request failed.' }, { status: 500 });
  }
}
