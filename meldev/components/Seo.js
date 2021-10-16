import { NextSeo } from "next-seo";

export default function Seo({ children, title, description }) {
  return (
    <>
      <NextSeo title={`Meldev | ${title}`} description={description} />
      {children}
    </>
  );
}
