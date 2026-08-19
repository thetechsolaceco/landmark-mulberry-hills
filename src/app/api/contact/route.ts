import { nucleus } from "@/lib/nucleus";
import { isNucleusError } from "@techsolace-studios/nucleus-sdk";

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  try {
    await nucleus.create<"contact", ContactSubmission>(
      "contact",
      { name, email, phone, message },
      "published"
    );
    return Response.json({ ok: true });
  } catch (e) {
    if (isNucleusError(e)) {
      console.error(`Nucleus contact submission failed: ${e.code} ${e.message}`);
      return Response.json({ error: "Failed to submit. Please try again." }, { status: 502 });
    }
    throw e;
  }
}
