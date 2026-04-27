import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name: string
  email: string
  department: string
  subject: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>
    const name = body.name?.trim() ?? ''
    const email = body.email?.trim() ?? ''
    const department = body.department?.trim() ?? ''
    const subject = body.subject?.trim() ?? ''
    const message = body.message?.trim() ?? ''

    if (!name || !email || !department || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT ?? 465)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser
    const smtpTo = process.env.CONTACT_RECEIVER_EMAIL ?? smtpUser

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
      return NextResponse.json(
        { error: 'Mail server is not configured. Set SMTP environment variables.' },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: `[Trusted Guards] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Department: ${department}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p style="white-space: pre-line;">${message}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
