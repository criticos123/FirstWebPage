import { useRouter } from "next/router";
import Link from "next/link";

const localesMapping = {
  fr: { title: "French", newLocale: "en" },
  en: { title: "Anglais", newLocale: "fr" },
};

export default function SwitchLocale() {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const { title, newLocale } = localesMapping[locale];

  return (
    <Link href={pathname} asPath={asPath} query={query} locale={newLocale}>
      {title}
    </Link>
  );
}
