import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, projectType, budget, timeline, message } =
    await req.json();

  try {
    await resend.emails.send({
      from: "Atticflow <onboarding@resend.dev>",
      to: "your@email.com",
      subject: `🚀 New Project Inquiry from ${name}`,

      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Atticflow <onboarding@resend.dev>",
      to: email,
      subject: "We received your request 🚀",
      html: `<p>Hey ${name}, we'll get back to you soon.</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}
