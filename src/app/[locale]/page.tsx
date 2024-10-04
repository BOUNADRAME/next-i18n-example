import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>Page: {t("title")}</h1>
      <hr />
      <Link href="/student">{t("goTo")}</Link>
    </div>
  );
}
