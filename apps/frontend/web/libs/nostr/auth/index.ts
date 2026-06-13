import { loginWithExtension } from "./methods/extension";
import { loginWithNsec } from "./methods/nsec";
import { buildNostrConnectQR } from "./methods/qr";
import { LoginMethod, NostrUser } from "@/types/types";


export class NostrAuth {
  static async login(
    method: LoginMethod,
    data?: string
  ): Promise<NostrUser> {
    switch (method) {
      case "extension":
        return loginWithExtension();

      case "nsec":
        if (!data) {
          throw new Error("nsec obrigatório");
        }
        return loginWithNsec(data);

      default:
        throw new Error("Método não suportado");
    }
  }

  static qr(opts: { pubkey?: string; sessionId?: string } = {}) {
    return buildNostrConnectQR(opts);
  }
}