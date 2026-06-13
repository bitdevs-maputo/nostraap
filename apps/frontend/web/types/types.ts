export type LoginMethod = "extension" | "nsec" | "qr";

export interface NostrUser {
  pubkey: string;
  npub?: string;
}

export interface NostrSession {
  user: NostrUser;
  method: LoginMethod;
  createdAt: number;
}

export interface NostrConnectPayload {
  type: "nostr_connect";
  pubkey?: string;
  sessionId?: string;
  timestamp: number;
}