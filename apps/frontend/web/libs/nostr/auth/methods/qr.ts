import { NostrConnectPayload } from "@/types/types";

export function buildNostrConnectQR(opts: { pubkey?: string; sessionId?: string } = {}): string {
  const payload: NostrConnectPayload = {
    type: "nostr_connect",
    timestamp: Date.now(),
    ...(opts.pubkey ? { pubkey: opts.pubkey } : {}),
    ...(opts.sessionId ? { sessionId: opts.sessionId } : {}),
  };

  return JSON.stringify(payload);
}