import { isLegalConfigComplete, legalConfig } from "../config/legal";

export default function robots() {
  if (!isLegalConfigComplete) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${legalConfig.siteUrl}/sitemap.xml`,
    host: legalConfig.siteUrl,
  };
}
