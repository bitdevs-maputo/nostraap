'use client';

import Notification from "./NotificationCenter";
import { Bell } from "lucide-react";
import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

const NavbarItems = [
    { name: "Messages", icon: "/icons/mensages.png" },
    { name: "Call", icon: "/icons/call.png" },
    { name: "Settings", icon: "/icons/usersettings.png" },
    { name: "Status", icon: "/icons/status.png" },
];

interface NavbarProps {
  children: ReactNode;
}

export default function Navbar({children}: NavbarProps) {

    const [show, setShow] = useState(true);

    const year = new Date().getFullYear();

    return(

        <nav className="w-full relative h-full flex flex-col items-center justify-center bg-sidebar text-primary">
            <header className="w-full min-h-16 py-3 bg-panel border-b border-border flex items-center justify-center flex-col gap-2">

                <div className="w-[98%] header-content flex items-center justify-between">

                    <div className="flex w-1/2 items-center justify-center gap-3">
                        <div className="logo">
                            <Image 
                               src={"/icons/nostrapp.svg"} 
                               alt="logo"
                               height={55}
                               width={55}
                            />
                        </div>
                        <div className=" relative">
            
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-4 h-4" />

                            <input
                            type="text"
                            placeholder="Search..."
                            className="w-full h-10 pl-10 pr-3 rounded-full bg-input text-primary outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            />
                        </div>
                    </div>

                    <button className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer text-primary transition hover:bg-soft">
                        <Plus size={18} />
                    </button>
                </div>

                {show && (
                    <Notification
                        icon={<Bell />}
                        onClose={() => setShow(false)}
                        title="Notificações ativadas"
                        message="Agora você vai receber alertas em tempo real."
                        color="green"
                    />
                )}   
            </header>

            {children}

            <footer className="w-full border-t border-border bg-panel absolute bottom-0 z-2 h-16 flex items-center justify-center">
               <nav className="w-full p-4 flex items-center justify-around">
                    {NavbarItems.map((item, index) => (
                        <button
                            key={index}
                            className="group flex items-center justify-center gap-1 p-2 rounded-full text-primary transition-colors hover:bg-soft focus:bg-soft focus:outline-none"
                        >
                            <img src={item.icon} alt={item.name} className="w-8 h-8" />
                            <span className="hidden text-md font-bold group-hover:block group-focus:block">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </footer>
        </nav>
        
    );
}