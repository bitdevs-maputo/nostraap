"use client";

import { useState } from "react";
import LoginUI from "../../ui/auth/login";
import RegisterUI from "../../ui/auth/register";

export default function Auth() {
    const [view, setView] = useState<"login" | "register">("login");

    return view === "login" ? (
        <LoginUI onSwitchToRegister={() => setView("register")} />
    ) : (
        <RegisterUI onSwitchToLogin={() => setView("login")} />
    );
}