import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/MailService";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  await sendEmail(name, email, message).catch((error) => {
    console.error("Error sending email", error);
    return new NextResponse(
      JSON.stringify({ message: "Error sending email." }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });
  return new NextResponse(JSON.stringify({ message: "Email sent." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
