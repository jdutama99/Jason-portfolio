import { NextResponse } from 'next/server';

export function GET() {
  const resumeUrl = process.env.RESUME_URL;

  if (!resumeUrl) {
    return NextResponse.json(
      { error: 'Resume URL not configured' },
      { status: 500 },
    );
  }

  return NextResponse.redirect(resumeUrl);
}
