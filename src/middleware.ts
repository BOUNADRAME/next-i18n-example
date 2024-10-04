// middleware.ts

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr"], // Add all the locales your project supports

  // The default locale if no locale is detected
  defaultLocale: "en",
});

// The matcher should cover all routes where you want the locale detection to work
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
