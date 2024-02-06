import i18n from "@/utils/i18n";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
    const router = useRouter();
    const { locales, locale: activeLocale, pathname, query, asPath } = router;

    const otherLocales = (locales || []).filter(
        (locale) => locale !== activeLocale,
    );

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang)
        localStorage.setItem('currentLang', lang)
        router.push({ pathname, query }, asPath, { locale: lang })
    }

    return (
        <div>
            <p>Locale switcher:</p>
            <ul>
                {otherLocales.map((locale) => {
                    return (
                        <li key={locale} onClick={() => changeLang(locale)}>
                            {locale}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}