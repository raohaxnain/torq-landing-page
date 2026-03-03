import { Resend } from "resend";
import type { EmailProvider, EmailMessage } from "../emailProvider";

export class ResendProvider implements EmailProvider {
  private resend: Resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    this.resend = new Resend(apiKey);
  }

  async sendEmail(message: EmailMessage): Promise<void> {
    try {
      await this.resend.emails.send({
        from: message.from,
        to: message.to,
        subject: message.subject,
        html: message.html,
        text: message.text,
      });
    } catch (error) {
      console.error("Resend error:", error);

      throw new Error("Failed to send email via Resend");
    }
  }
}
