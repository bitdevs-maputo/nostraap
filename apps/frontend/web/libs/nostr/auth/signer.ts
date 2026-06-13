import type { Event } from "nostr-tools";

declare global {
  interface Window {
    nostr?: {
      signEvent(event: Event): Promise<Event>;
      getPublicKey(): Promise<string>;
    };
  }
}

export async function signEvent(event: Event): Promise<Event> {
  if (!window.nostr) {
    throw new Error("Signer não disponível");
  }

  return await window.nostr.signEvent(event);
}