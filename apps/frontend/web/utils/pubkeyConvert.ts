import { nip19 } from "nostr-tools";

export function toNpub(pubkey: string): string {
  return nip19.npubEncode(pubkey);
}
