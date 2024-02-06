import store from "@/store";
import "@/styles/globals.css";
import i18n from "@/utils/i18n";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, asPath } = router
  const { i18n: i18nOrigin } = useTranslation()

  const initialLng = () => {
    const lang = localStorage.getItem('currentLang')
    i18nOrigin.changeLanguage(lang || locale)
    router.push("/", asPath, { locale: lang || locale })
  }

  useEffect(() => {
    initialLng()
  }, [])

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Provider>
  )
}
