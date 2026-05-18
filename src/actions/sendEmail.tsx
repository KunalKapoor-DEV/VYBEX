import * as React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder_key");

export async function sendEmail(data: ContactFormData) {
    try {
        // 1. Validate the data server-side
        const validatedData = contactFormSchema.parse(data);

        // 2. Save to Database (Keeping the Prisma capture)
        await prisma.lead.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
                eventType: validatedData.eventType,
                date: validatedData.date,
            },
        });

        // 3. Send Email via Resend
        const result = await resend.emails.send({
            from: "VYBEXX Leads <onboarding@resend.dev>", // Replace with your domain once verified
            to: ["shouryyp@gmail.com"],
            subject: `🚀 New Event Inquiry: ${validatedData.eventType} from ${validatedData.name}`,
            react: (
                <EmailTemplate
                    name={validatedData.name}
                    phone={validatedData.phone}
                    eventType={validatedData.eventType}
                    date={validatedData.date}
                />
            ),
        });

    if (result.error) {
        console.error("Resend Error:", result.error);
        return { success: false, error: "Failed to send email. Our team still has your details in the database!" };
    }

    return { success: true, message: "Request submitted successfully!" };
} catch (error) {
    console.error("Server Action Error:", error);
    if (error instanceof Error) {
        return { success: false, error: error.message };
    }
    return { success: false, error: "Something went wrong. Please try again later." };
}
}
