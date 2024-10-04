import { useTranslations } from "next-intl";
import Link from "next/link";

export default function StduentPage() {
  const t = useTranslations("Student");
  const t_home = useTranslations("HomePage");
  return (
    <div>
      <h1>Page: {t("title")}</h1>
      <hr />
      <p>
        <Link href="/">{t_home("goTo")}</Link>
      </p>
    </div>
  );
}
