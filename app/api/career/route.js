import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const resume = formData.get("resume");
    const location = formData.get("location");
    const position = formData.get("position");
    const lastSalary = formData.get("lastSalary");

    if (
      !name ||
      !email ||
      !phone ||
      !resume ||
      !location ||
      !position ||
      !lastSalary
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_ADDRESS_PASSWORD,
      },
    });

    // Convert the file to a Buffer for the attachment
    const buffer = Buffer.from(await resume.arrayBuffer());

    // Send the email
    await transporter.sendMail({
      to: process.env.EMAIL_ADDRESS, // Receiver address from .env
      cc: "info@stridesdezine.com", // Add your CC email address here
      subject: `New Career Application: ${name}`,
      text: `You have received a new application.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nPosition: ${position}\nLast Salary: ${lastSalary}`,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "server error",
    });
  }
}
