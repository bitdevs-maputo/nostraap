"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export default function LangButton() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("pt");


  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith("lang="))
      ?.split("=")[1];

    if (cookie) setLang(cookie);
  }, []);

  const changeLang = (value: string) => {
    document.cookie = `lang=${value}; path=/; max-age=31536000`;

    setLang(value);    
    setOpen(false);    

    window.location.reload(); 
  };

  const label =
    lang === "en" ? "English" :
    lang === "pt" ? "Português" :
    lang;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-background border rounded-full"
      >
        <Globe className="w-5 h-5" />
        {label}
      </button>

      {open && (
        <div className="absolute mt-2 bg-background border rounded-md shadow-md overflow-hidden">
          <button
            onClick={() => changeLang("pt")}
            className="block w-full px-4 py-2 text-left "
          >
            Português
          </button>

          <button
            onClick={() => changeLang("en")}
            className="block w-full px-4 py-2 text-left "
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}