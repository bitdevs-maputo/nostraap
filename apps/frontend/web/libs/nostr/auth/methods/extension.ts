import { toNpub } from "@/utils/pubkeyConvert";

export async function loginWithExtension() {
  if (typeof window === "undefined") {
    throw new Error("Browser only");
  }

  if (!window.nostr) {
    throw new Error("Nostr extension não encontrada (NIP-07)");
  }

  const pubkey = await window.nostr.getPublicKey();

  return {
    pubkey,
    npub: toNpub(pubkey),
  };
}