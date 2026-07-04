import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import ContactNotification from "@/emails/ContactNotification";
import AutoReply from "@/emails/AutoReply";

import { transporter } from "@/lib/mail";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, phone, message } = body;

    // -------------------------
    // Validation
    // -------------------------

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // -------------------------
    // Render Emails
    // -------------------------

    const notificationHtml = await render(
      ContactNotification({
        name,
        email,
        phone,
        message,
      })
    );

    const autoReplyHtml = await render(
      AutoReply({
        name,
      })
    );

    // -------------------------
    // Send email to Therapist
    // -------------------------

    console.log("to: process.env.NEXT_PUBLIC_EMAIL_ID,?? ", process.env.NEXT_PUBLIC_EMAIL_ID,)
    await transporter.sendMail({
      from: `"The Listening Room" <${process.env.SMTP_USER}>`,

      to: process.env.NEXT_PUBLIC_EMAIL_ID,

      replyTo: email,

      subject: `🌿 New Consultation Request - ${name}`,

      html: notificationHtml,
    });

    // -------------------------
    // Auto Reply
    // -------------------------

    await transporter.sendMail({
      from: `"The Listening Room" <${process.env.SMTP_USER}>`,

      to: email,

      subject:
        "Thank you for contacting The Listening Room 🌿",

      html: autoReplyHtml,
    });

    // -------------------------
    // Success
    // -------------------------

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR");

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while sending the email.",
      },
      {
        status: 500,
      }
    );
  }
}