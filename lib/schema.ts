/**
 * JSON-LD Schema.org helpers for SEO
 * Theme: Oraciones para dormir (Spanish prayers for sleep/rest)
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://REPLACE_AFTER_VERCEL.vercel.app';
const SITE_NAME = 'Oraciones para dormir en paz';

export interface SchemaPage {
    slug: string;
    title: string;
    metaDescription: string;
    publishedAt: string;
    updatedAt: string;
    category: string;
}

/**
 * WebSite schema for the homepage
 */
export function getWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE_NAME,
        description: 'Oraciones y reflexiones católicas originales para terminar el día con calma, soltar preocupaciones y descansar con fe.',
        inLanguage: 'es',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${BASE_URL}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/**
 * Organization/Publisher schema
 */
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/favicon.ico`,
        },
        sameAs: [],
    };
}

/**
 * BreadcrumbList schema for article pages
 */
export function getBreadcrumbSchema(page: SchemaPage) {
    const items = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: BASE_URL,
        },
    ];

    // Add category level for spiritual pages
    if (page.category !== 'legal') {
        items.push({
            '@type': 'ListItem',
            position: 2,
            name: page.category.charAt(0).toUpperCase() + page.category.slice(1),
            item: `${BASE_URL}/#${page.category}`,
        });
        items.push({
            '@type': 'ListItem',
            position: 3,
            name: page.title,
            item: `${BASE_URL}/${page.slug}`,
        });
    } else {
        items.push({
            '@type': 'ListItem',
            position: 2,
            name: page.title,
            item: `${BASE_URL}/${page.slug}`,
        });
    }

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
    };
}

/**
 * Article schema for prayer/spiritual pages
 */
export function getArticleSchema(page: SchemaPage) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${BASE_URL}/${page.slug}/#article`,
        headline: page.title,
        description: page.metaDescription,
        url: `${BASE_URL}/${page.slug}`,
        datePublished: page.publishedAt,
        dateModified: page.updatedAt,
        inLanguage: 'es',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/${page.slug}`,
        },
        publisher: {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            name: SITE_NAME,
        },
        isPartOf: {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
        },
    };
}

/**
 * WebPage schema for legal pages
 */
export function getWebPageSchema(page: SchemaPage) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${BASE_URL}/${page.slug}/#webpage`,
        url: `${BASE_URL}/${page.slug}`,
        name: page.title,
        description: page.metaDescription,
        datePublished: page.publishedAt,
        dateModified: page.updatedAt,
        inLanguage: 'es',
        isPartOf: {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
        },
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaObject = Record<string, any>;

/**
 * Generate all schemas for an article page
 */
export function getArticlePageSchemas(page: SchemaPage): SchemaObject[] {
    const schemas: SchemaObject[] = [getBreadcrumbSchema(page)];

    if (page.category === 'legal') {
        schemas.push(getWebPageSchema(page));
    } else {
        schemas.push(getArticleSchema(page));
    }

    return schemas;
}

/**
 * Generate all schemas for the homepage
 */
export function getHomePageSchemas(): SchemaObject[] {
    return [getWebSiteSchema(), getOrganizationSchema()];
}
