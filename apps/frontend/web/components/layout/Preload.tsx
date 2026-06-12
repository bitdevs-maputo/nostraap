import Image from "next/image";
import LangButton from "../ui/langBtn";
import Link from "next/link";

const logo = "/icons/nostrapp.svg";

export default function PreloadLayout({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <main className="h-screen w-screen flex flex-col gap-4 justify-center items-center bg-foreground px-4">

      <div className="relative h-40 w-40">
        <Image src={logo} alt="NostrApp" fill className="object-cover" />
      </div>

      <h2 className="tracking-tight font-bold text-2xl text-background md:text-5xl lg:text-6xl leading-none text-center">
        NostrApp
      </h2>

      <div className="flex items-center justify-center gap-2">
        <LangButton />

        <button
          onClick={onContinue}
          className="px-6 py-2 cursor-pointer rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          Continuar
        </button>
      </div>

      <div className="flex gap-4 text-sm text-gray-600 mt-4">
        <Link href="/terms-of-use" className="hover:underline">
          Termos
        </Link>
        <Link href="/privacy-policy" className="hover:underline">
          Privacidade
        </Link>
        <Link href="/cookies" className="hover:underline">
          Cookies
        </Link>
      </div>
    </main>
  );
}