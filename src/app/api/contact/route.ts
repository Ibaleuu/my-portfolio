import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // 1. Simpan pesan ke database PostgreSQL menggunakan Prisma
    const contact = await prisma.contact.create({
      data: { name, email, subject, message },
    });

    // 2. Kirim notifikasi email ke Gmail kamu menggunakan Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Pesan Baru dari Portofolio: ${subject}`,
        text: `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; background-color: #ffffff;">
            <h2 style="color: #6366f1; margin-top: 0;">Pesan Baru dari Website Portofolio</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email Pengirim:</strong> ${email}</p>
            <p><strong>Subjek:</strong> ${subject}</p>
            <p><strong>Pesan:</strong></p>
            <div style="background: #f8fafc; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px; color: #334155;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">Pesan ini tersimpan di database dan dikirim otomatis dari website portofolio.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Gagal mengirim email via Nodemailer:", emailError);
      // Data tetap berhasil masuk ke database meskipun pengiriman email mengalami kendala
    }

    return NextResponse.json(
      { message: "Message sent successfully!", data: contact },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}
