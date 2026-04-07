import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, projectType, budget, companyName, projectBrief, message } =
    await req.json();

  try {
    await resend.emails.send({
      from: "Atticflow <onboarding@resend.dev>",
      to: "atticflow.business@gmail.com",
      subject: `🚀 New Project Inquiry from ${name}`,

      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        
        <hr />
        
        <p><strong>Project Brief:</strong></p>
        <p>${projectBrief}</p>
        
      `,
    });

    await resend.emails.send({
      from: "Atticflow <onboarding@resend.dev>",
      to: email,
      subject: "We received your request 🚀",
      html: `<p>Hey ${name}, We have got your request. We'll get back to you soon.</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}
