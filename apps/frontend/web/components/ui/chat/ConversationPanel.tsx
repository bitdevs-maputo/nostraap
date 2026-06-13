'use client';

"use client";

import { useState, useRef, useEffect } from "react";
import HeaderUserConversation from "./headerProfile";
import TypingIndicator from "../typingIndicator";
import ChatFooter from "./footerPainel";

interface Message {
  id: number;
  text: string;
  sender: "them" | "me";
  time?: string;
}

const initialMessages: Message[] = [
  { id: 1,  text: "Hey! How are you!",          sender: "them" },
  { id: 2,  text: "Do you want to have a job?", sender: "them", time: "10:25" },
  { id: 3,  text: "I want to know...",           sender: "me",  time: "19:45" },
  { id: 4,  text: "Do you have the portfolio?", sender: "me" },
];

export default function ConversationPanel() {
 
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput]       = useState("");
  const bottomRef               = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: trimmed, sender: "me" }]);
    setInput("");
  }

  return (
    <div
      className="flex flex-col items-center justify-center bg-chat h-full relative overflow-hidden"
    
    >
  
      <HeaderUserConversation
        name="Maria"
        nickname="maria_code"
        isTyping={true}
        isOnline={false}
        lastSeen={new Date("2026-06-13T10:30:00")}
    />

  
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col  w-full gap-1.5 scrollbar-hide">
  
        <div className="flex flex-col items-center gap-1.5 py-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
            style={{ background: "var(--bg-item-hover)" }}
          >
            👥
          </div>
          <p className="text-[15px] font-semibold" style={{ color: "var(--text-primary)" }}>
            Jerima Cheal
          </p>
          <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
            jerima1997@163.com
          </p>
          <p className="text-[11px] text-center max-w-[200px]" style={{ color: "var(--text-muted)" }}>
            You have added Jerima Cheal as your friend. Start chatting now!
          </p>
        </div>

        <div className="text-center text-[10.5px] py-1.5" style={{ color: "var(--text-muted)" }}>
          Sat 10:25
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            {msg.time && msg.id > 2 && (
              <div className="text-center text-[10.5px] py-1.5" style={{ color: "var(--text-muted)" }}>
                {msg.time}
              </div>
            )}
            <div
              className={`max-w-[72%] px-3 py-2 text-[12.5px] leading-snug break-words
                ${msg.sender === "them"
                  ? "self-start rounded-2xl rounded-bl-[4px] border"
                  : "self-end rounded-2xl rounded-br-[4px] text-white"
                }`}
              style={{
                background: msg.sender === "them" ? "var(--bg-bubble-out)" : "var(--bg-bubble-in)",
                borderColor: msg.sender === "them" ? "var(--border)" : "transparent",
                color: msg.sender === "them" ? "var(--text-primary)" : "#fff",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}



        <TypingIndicator/>


        <div ref={bottomRef} />
      </div>


    <ChatFooter
      input={input}
      setInput={setInput}
      send={send}
    />

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </div>
  );
}



