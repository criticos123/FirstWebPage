import { useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const localesMapping = {
  fr: { title: "English", newLocale: "en" },
  en: { title: "Français", newLocale: "fr" },
};

export default function SwitchLocale() {
  const { locale, pathname, query } = useRouter();
  const { title, newLocale } = useMemo(() => localesMapping[locale], [locale]);

  return (
    <Link href={{ pathname, query }} locale={newLocale}>
      {title}
    </Link>
  );
}
