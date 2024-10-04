"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define available locales
const locales = ["en", "fr"];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState("en"); // Default locale
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
  }

  // Function to remove the current locale from the pathname
  const stripLocaleFromPathname = (path: string) => {
    const segments = path.split("/").filter(Boolean); // Split and remove empty segments
    if (locales.includes(segments[0])) {
      segments.shift(); // Remove the locale if it's in the first segment
    }
    return `/${segments.join("/")}`; // Rebuild the path without the locale
  };

  const switchLanguage = (lang: string) => {
    const currentParams = new URLSearchParams(searchParams?.toString());
    const cleanPathname = stripLocaleFromPathname(pathname); // Remove current locale

    // Build the new URL including the selected locale
    const newUrl = `/${lang}${cleanPathname}?${currentParams.toString()}`;

    // Navigate to the new locale-specific path
    router.push(newUrl);
  };

  return (
    <div>
      <select
        value={locale}
        onChange={(e) => {
          setLocale(e.target.value);
          switchLanguage(e.target.value);
        }}
        className="bg-gray-200 p-2 rounded"
      >
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {lang === "en" ? "English" : "Français"}
          </option>
        ))}
      </select>
    </div>
  );
};
