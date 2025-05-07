import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate required environment variables
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Debug logging (will only show on server)
console.log('Environment check:', {
  hasEmailUser: !!emailUser,
  hasEmailPass: !!emailPass,
  emailUserLength: emailUser?.length,
});

if (!emailUser || !emailPass) {
  console.error('Missing required environment variables for email configuration');
}

export async function POST(req: Request) {
  try {
    // Check if environment variables are available
    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration is not properly set up' },
        { status: 500 }
      );
    }

    const { name, email, website, message } = await req.json();

    // Create a transporter using the environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send to yourself
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 