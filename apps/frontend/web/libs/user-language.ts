import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export async function getUserLanguage() {
  const cookieStore = await cookies();
  return cookieStore.get("lang")?.value || "pt";
}

export default getRequestConfig(async () => {
  const lang = await getUserLanguage();

  return {
    locale: lang,
    messages: (await import(`../messages/${lang}.json`)).default
  };
});