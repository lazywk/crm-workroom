import LocaleSwitcher from "@/components/elements/lang-switcher";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t, i18n } = useTranslation()

  return (
    <main>
      {t("text")}
      <LocaleSwitcher />
    </main>
  );
}
