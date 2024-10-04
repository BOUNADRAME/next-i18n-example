import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LanguageSwitcher } from "../futures/LanguageSwitcher";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex items-center justify-center bg-gray-100">
        <NextIntlClientProvider messages={messages}>
          {/* Flex container to position switcher on the left and content on the right */}
          <div className="w-full max-w-4xl mx-auto flex justify-between items-center bg-white p-6 rounded-lg shadow-lg">
            {/* Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Children content */}
            <div className="flex-grow text-center">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
