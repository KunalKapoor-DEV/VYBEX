import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, eventType, date } = body;

        // Validate required fields
        if (!name || !phone || !eventType || !date) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate phone format (basic)
        if (phone.replace(/\D/g, "").length < 10) {
            return NextResponse.json(
                { error: "Please provide a valid phone number" },
                { status: 400 }
            );
        }

        // Create lead in database
        const lead = await prisma.lead.create({
            data: {
                name: name.trim(),
                phone: phone.trim(),
                eventType,
                date,
            },
        });

        return NextResponse.json(
            { success: true, id: lead.id, message: "Lead captured successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating lead:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(leads);
    } catch (error) {
        console.error("Error fetching leads:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
