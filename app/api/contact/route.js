import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_ADDRESS_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const emailValue = await transporter.sendMail({
      to: process.env.EMAIL_ADDRESS,
      cc: "info@stridesdesign.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "server error",
    });
  }
}
