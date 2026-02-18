import * as React from "react";

interface EmailTemplateProps {
    name: string;
    phone: string;
    eventType: string;
    date: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    phone,
    eventType,
    date,
}) => (
    <div style={{
        fontFamily: '"Inter", "Helvetica", sans-serif',
        backgroundColor: "#050505",
        color: "#ffffff",
        padding: "40px",
        borderRadius: "16px",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid rgba(168, 85, 247, 0.2)"
    }}>
        <h1 style={{
            color: "#A855F7",
            fontSize: "24px",
            fontWeight: "800",
            letterSpacing: "-0.04em",
            marginBottom: "20px",
            textTransform: "uppercase"
        }}>
            New Event Inquiry from VYBEX
        </h1>

        <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "24px",
            borderRadius: "12px",
            marginBottom: "24px"
        }}>
            <p style={{ margin: "12px 0", fontSize: "16px" }}>
                <strong style={{ color: "#A855F7", marginRight: "8px" }}>Name:</strong> {name}
            </p>
            <p style={{ margin: "12px 0", fontSize: "16px" }}>
                <strong style={{ color: "#A855F7", marginRight: "8px" }}>Phone:</strong> {phone}
            </p>
            <p style={{ margin: "12px 0", fontSize: "16px" }}>
                <strong style={{ color: "#A855F7", marginRight: "8px" }}>Event Type:</strong> {eventType}
            </p>
            <p style={{ margin: "12px 0", fontSize: "16px" }}>
                <strong style={{ color: "#A855F7", marginRight: "8px" }}>Preferred Date:</strong> {date}
            </p>
        </div>

        <p style={{
            color: "#9ca3af",
            fontSize: "14px",
            textAlign: "center",
            marginTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px"
        }}>
            VYBEX – Where Kolhapur Celebrates.
        </p>
    </div>
);
