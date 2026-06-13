import Image from "next/image";
import { useMemo } from "react";

export type HeaderProfileProps = {
    name: string;
    nickname?: string;
    bio?: string;
    avatar?: string;

    isOnline?: boolean;
    isTyping?: boolean;

    lastSeen?: Date;
};

function formatLastSeen(date?: Date) {
    if (!date) return "recently";

    return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}

export default function HeaderUserConversation({
    name,
    nickname,
    avatar,
    isOnline,
    isTyping,
    lastSeen,
}: HeaderProfileProps) {
    const status = useMemo(() => {
        if (isTyping) {
            return {
                text: "typing",
                className: "text-green-500",
                animate: true,
            };
        }

        if (isOnline) {
            return {
                text: "online",
                className: "text-green-500",
                animate: false,
            };
        }

        return {
            text: `last seen ${formatLastSeen(lastSeen)}`,
            className: "text-gray-400",
            animate: false,
        };
    }, [isTyping, isOnline, lastSeen]);

    return (
        <header className="flex items-center gap-3 px-4 w-full h-17 border-b border-zinc-800 bg-zinc-900">
  
            <div className="relative w-10 h-10">
                <div
                    className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-800 ${
                        isOnline ? "ring-2 ring-green-500" : ""
                    }`}
                >
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-white font-bold uppercase">
                            {name.charAt(0)}
                        </span>
                    )}
                </div>

                {/* Online dot */}
                {isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full" />
                )}
            </div>


            <div className="flex flex-col">
                <p className="text-sm font-semibold text-white">
                    {nickname || name}
                </p>

                <p
                    className={`text-xs flex items-center gap-1 ${status.className}`}
                >
                    {status.animate && (
                        <span className="typing-dots">
                            typing
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>
                    )}

                    {!status.animate && status.text}
                </p>
            </div>
        </header>
    );
}