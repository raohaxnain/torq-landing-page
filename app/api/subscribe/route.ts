import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_DC;

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      return NextResponse.json(
        { error: 'Missing Mailchimp configuration' },
        { status: 500 }
      );
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status >= 400) {
      const errorData = await response.json();
      
      // Handle "Member Exists" error specifically if needed, or just return the error
      if (errorData.title === 'Member Exists') {
         return NextResponse.json(
          { error: 'You are already subscribed!' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: errorData.detail || 'There was an error subscribing to the newsletter.' },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: 'Success!' }, { status: 201 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
