declare global {
  interface Nostr {
    getPublicKey(): Promise<string>;
    signEvent(event: unknown): Promise<unknown>;
  }

  interface Window {
    nostr?: Nostr;
  }
}

export {};
