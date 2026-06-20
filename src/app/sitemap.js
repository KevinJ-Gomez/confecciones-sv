import { isLegalConfigComplete, legalConfig } from "../config/legal";
import { legalSlugs } from "../legal/content";

export default function sitemap() {
  if (!isLegalConfigComplete) return [];
  const paths = ["", ...legalSlugs.map((slug) => `/legal/${slug}`)];
  return paths.flatMap((path) => ["es", "en"].map((lang) => ({
    url: `${legalConfig.siteUrl}/${lang}${path}`,
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
    alternates: {
      languages: {
        es: `${legalConfig.siteUrl}/es${path}`,
        en: `${legalConfig.siteUrl}/en${path}`,
      },
    },
  })));
}
