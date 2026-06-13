import { nip19 } from "nostr-tools";

export function isValidNsec(nsec: string): boolean {
  try {
    const decoded = nip19.decode(nsec);
    return decoded.type === "nsec";
  } catch {
    return false;
  }
}