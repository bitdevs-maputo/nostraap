"use client";

import { useState } from "react";

import Navbar from "../../components/ui/navbar";
import ConversationPanel from "../ui/chat/ConversationPanel";
import UlChat from "../ui/chat/ulchat";
import CallsPanel from "../ui/call/callPanel";
import UlCall from "../ui/call/ulcall";
import UlStatus from "../ui/status/ulStatus";
import StatusPanel from "../ui/status/statusPanel";
import SettingsPanel from "../ui/settings/settingsPanel";
import UlSettings from "../ui/settings/ulSettings";

const navbarItems = [
  { key: "messages", label: "Messages", panel: <ConversationPanel/>, children: <UlChat/> },
  { key: "call", label: "Call", panel: <CallsPanel />, children: <UlCall/> },
  { key: "status", label: "Status", panel: <StatusPanel />, children: <UlStatus/> },
  { key: "settings", label: "Settings", panel: <SettingsPanel />, children: <UlSettings/> },
] as const;

export default function MainShell() {
  const [active, setActive] = useState<(typeof navbarItems)[number]["key"]>("messages");

  const activePanel = navbarItems.find((item) => item.key === active)?.panel ?? <ConversationPanel />;

  return (
    <main className="flex h-screen w-screen bg-base text-primary">
      <aside className="w-lg shrink-0 border-r border-panel">
        <Navbar
          activeKey={active}
          onChange={setActive}
          items={navbarItems}
          children={navbarItems.find((item) => item.key === active)?.children}

        />
      </aside>

      <section className="flex-1">
        {activePanel}
      </section>
    </main>
  );
}
