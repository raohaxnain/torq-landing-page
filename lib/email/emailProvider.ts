// Email provider interface for extensibility
// This allows you to swap out email providers easily

import { ResendProvider } from "./providers/resend";

export interface EmailMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface EmailProvider {
  sendEmail(message: EmailMessage): Promise<void>;
}

// Factory function to get the configured email provider
export function getEmailProvider(): EmailProvider {
  const provider = process.env.EMAIL_PROVIDER || "resend";

  switch (provider.toLowerCase()) {
    case "resend":
      return new ResendProvider();
    // Add more providers here as needed:
    // case 'sendgrid':
    //   const { SendGridProvider } = require('./providers/sendgrid');
    //   return new SendGridProvider();
    // case 'ses':
    //   const { SESProvider } = require('./providers/ses');
    //   return new SESProvider();
    default:
      throw new Error(`Unknown email provider: ${provider}`);
  }
}

// Template function for contact form emails
export function createContactEmailTemplate(
  data: ContactFormData
): EmailMessage {
  const { name, email, company, message } = data;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: white;
            padding: 30px;
            border-radius: 12px 12px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f8fafc;
            padding: 30px;
            border-radius: 0 0 12px 12px;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 5px;
          }
          .field-value {
            color: #0f172a;
            font-size: 16px;
          }
          .message {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #D5FC9A;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>
          ${
            company
              ? `
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${company}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message">${message}</div>
          </div>
          <div class="footer">
            Received from Torq Landing Page Contact Form
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}

Message:
${message}

---
Received from Torq Landing Page Contact Form
  `.trim();

  return {
    to: process.env.RESEND_TO_EMAIL || "",
    from: process.env.RESEND_FROM_EMAIL || "",
    subject: `Contact Form: Message from ${name}`,
    html,
    text,
  };
}
