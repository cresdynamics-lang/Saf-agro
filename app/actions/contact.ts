"use server";

import { Resend } from "resend";
import { ENQUIRY_EMAIL } from "@/lib/grade-specs";
import OrderEnquiryEmail from "@/components/emails/OrderEnquiryEmail";
import ContactEnquiryEmail from "@/components/emails/ContactEnquiryEmail";
import NewsletterBatchEmail from "@/components/emails/NewsletterBatchEmail";
import { PrismaClient } from "@prisma/client";

// MOCK FLAG: Since we don't have a Resend API key or verified domain yet,
// we will just console.log the submission instead of actually sending via Resend.
const MOCK_MODE = true;

const resend = new Resend(process.env.RESEND_API_KEY || "re_mock_key");
const prisma = new PrismaClient();

export async function submitOrderEnquiry(formData: any) {
  try {
    if (MOCK_MODE) {
      console.log("Mocking Order Enquiry Email Submission:", formData);
      return { success: true, message: "Email mocked successfully" };
    }

    const { data, error } = await resend.emails.send({
      from: "SAF Agro Notifications <onboarding@resend.dev>", // Should be replaced with verified domain later
      to: ENQUIRY_EMAIL,
      subject: `Order Enquiry: ${formData.product} ${formData.grade}`,
      react: OrderEnquiryEmail(formData),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function submitContactEnquiry(formData: any) {
  try {
    if (MOCK_MODE) {
      console.log("Mocking Contact Enquiry Email Submission:", formData);
      return { success: true, message: "Email mocked successfully" };
    }

    const { data, error } = await resend.emails.send({
      from: "SAF Agro Notifications <onboarding@resend.dev>",
      to: ENQUIRY_EMAIL,
      subject: `General Enquiry from ${formData.fullName}`,
      react: ContactEnquiryEmail(formData),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function subscribeNewsletter(email: string) {
  try {
    // 1. Save subscriber to SQLite
    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email },
    });

    console.log("New subscriber added to DB:", subscriber);

    // 2. Check how many unbatched subscribers we have
    const unbatched = await prisma.newsletterSubscriber.findMany({
      where: { batched: false },
    });

    // 3. If we hit 10, batch them and send email
    if (unbatched.length >= 10) {
      const emails = unbatched.map((s) => s.email);

      if (MOCK_MODE) {
        console.log(`Mocking Batch Newsletter Email for ${emails.length} subscribers:`, emails);
      } else {
        const { error } = await resend.emails.send({
          from: "SAF Agro Notifications <onboarding@resend.dev>",
          to: ENQUIRY_EMAIL,
          subject: `New Newsletter Batch (${emails.length} Subscribers)`,
          react: NewsletterBatchEmail({ subscribers: emails }),
        });

        if (error) {
          console.error("Failed to send batch email:", error);
          return { success: false, error: error.message };
        }
      }

      // 4. Mark them as batched
      await prisma.newsletterSubscriber.updateMany({
        where: { id: { in: unbatched.map((s) => s.id) } },
        data: { batched: true },
      });

      return { success: true, message: "Subscribed and batch email sent." };
    }

    return { success: true, message: "Subscribed successfully." };
  } catch (err: any) {
    console.error("Newsletter subscription error:", err);
    // Unique constraint error if email already exists
    if (err.code === "P2002") {
      return { success: false, error: "This email is already subscribed." };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
