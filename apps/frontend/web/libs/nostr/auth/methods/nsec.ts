import { nip19, getPublicKey } from "nostr-tools";
import { toNpub } from "@/utils/pubkeyConvert";
import { isValidNsec } from "@/utils/nsecValidate";

function hexToBytes(hex: string): Uint8Array {
  return Uint8Array.from(
    hex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
  );
}

export function loginWithNsec(nsec: string) {
  if (!isValidNsec(nsec)) {
    throw new Error("nsec inválido");
  }

  const decoded = nip19.decode(nsec);

  const privateKeyHex = decoded.data as string;

  const privateKeyBytes = hexToBytes(privateKeyHex);

  const pubkey = getPublicKey(privateKeyBytes);

  return {
    privateKey: privateKeyHex,
    pubkey,
    npub: toNpub(pubkey),
  };
}