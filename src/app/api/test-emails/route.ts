import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function GET() {
  try {
    await transporter.verify();

    return NextResponse.json({
      success: true,
      message: "SMTP Connection Successful",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error,
    });
  }
}