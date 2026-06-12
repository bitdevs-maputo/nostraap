import { getUserLanguage } from "@/lib/user-language";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const lang = await getUserLanguage();

  return {
    locale: lang,
    messages: (await import(`../messages/${lang}.json`)).default
  };
});