import type { MetadataRoute } from 'next';
import { getAllPages } from "../lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://REPLACE_AFTER_VERCEL.vercel.app";
    const pages = getAllPages();

    return [
        { url: baseUrl, lastModified: new Date() },
        ...pages.map((p) => ({
            url: `${baseUrl}/${p.slug}`,
            lastModified: new Date(p.updatedAt),
        })),
    ];
}
