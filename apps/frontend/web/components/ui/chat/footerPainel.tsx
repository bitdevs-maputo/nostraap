"use client";

import { useEffect, useRef, useState } from "react";
import {
  Plus,
  Mic,
  Send,
  Image,
  Video,
  FileText,
  Music,
  MapPin,
} from "lucide-react";

export default function ChatFooter({
  input = "",
  setInput,
  send,
}: {
  input?: string;
  setInput: (v: string) => void;
  send: () => void;
}) {
  const [openAttach, setOpenAttach] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isEmpty = !(input ?? "").trim();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenAttach(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer
      className="absolute bottom-2 rounded-full flex items-center gap-px px-3 w-[98%] sm:w-[90%] md:w-[80%] h-12  bg-zinc-800  "
      style={{ borderColor: "var(--border)" }}
    >
      
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setOpenAttach((v) => !v)}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-zinc-800 transition"
        >
          <Plus className="w-5 h-5 text-zinc-400" />
        </button>

        {openAttach && (
          <div className="absolute bottom-12 left-0 w-52 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl p-2 flex flex-col gap-1 animate-fadeIn">
            <AttachItem icon={<Image />} label="Photo" />
            <AttachItem icon={<Video />} label="Video" />
            <AttachItem icon={<FileText />} label="Document" />
            <AttachItem icon={<Music />} label="Audio" />
            <AttachItem icon={<MapPin />} label="Location" />
          </div>
        )}
      </div>


      <div className="flex items-center w-full  rounded-full px-3 py-2">
        <input
        value={input ?? ""}
        onChange={(e) => setInput?.(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send?.()}
        placeholder="Message"
        className="flex-1 bg-transparent outline-none text-sm text-white"
        />
      </div>

  
      {isEmpty ? (
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-zinc-800 transition">
          <Mic className="w-5 h-5 text-zinc-400" />
        </button>
      ) : (
        <button
          onClick={send}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white"
        >
          <Send className="w-4 h-4" />
        </button>
      )}


      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
      `}</style>
    </footer>
  );
}

/* ITEM DO MENU */
function AttachItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-800 transition text-sm text-zinc-300">
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
}