import { NextRequest, NextResponse } from 'next/server';
import {
  getEmailProvider,
  createContactEmailTemplate,
  type ContactFormData,
} from '@/lib/email/emailProvider';

// POST /api/contact
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.CONTACT_TO_EMAIL) {
      console.error('CONTACT_TO_EMAIL environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create the email message
    const emailMessage = createContactEmailTemplate(body);

    // Get the configured email provider and send the email
    const emailProvider = getEmailProvider();
    await emailProvider.sendEmail(emailMessage);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We\'ll get back to you soon!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Return error response
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}

// OPTIONS for CORS preflight (if needed)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
