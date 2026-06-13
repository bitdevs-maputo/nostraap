"use client";
import { useState } from "react";

export default function TypingIndicator() {
    const [typing] = useState(true);

    if (!typing) return null;

    return (
        <div
            className="self-start flex gap-1 bg-bubble-out items-center w-11 px-2 py-2 rounded-full"

        >
            {[0, 200, 400].map((delay) => (
                <span
                    key={delay}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                        background: "var(--text-muted)",
                        animation: `pulse 1.2s ${delay}ms infinite`,
                    }}
                />
            ))}
        </div>
    );
}