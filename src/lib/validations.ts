import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().regex(/^[0-9+\-\s()]{10,}$/, "Please enter a valid phone number"),
    eventType: z.string().min(1, "Please select an event type"),
    date: z.string().min(1, "Please select a preferred date"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
