import {
	BRAND_NAME,
	EMAIL,
	PHONE,
	SITE_URL,
	absolute_url,
} from "@/content/site.js";
import type { FaqItem, PageMeta } from "@/content/types.js";

export function organization_json_ld() {
	return {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: BRAND_NAME,
		url: SITE_URL,
		email: EMAIL,
		telephone: PHONE,
		areaServed: {
			"@type": "State",
			name: "Massachusetts",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Needham",
			addressRegion: "MA",
			addressCountry: "US",
		},
	};
}

export function website_json_ld() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Couples Therapy MA",
		url: SITE_URL,
		publisher: {
			"@type": "Person",
			name: BRAND_NAME,
		},
	};
}

export function faq_json_ld(items: readonly FaqItem[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.afterword
					? `${item.answer} ${item.afterword.body} ${item.afterword.bullets.join(" ")}`
					: item.answer,
			},
		})),
	};
}

export function breadcrumb_json_ld(
	meta: PageMeta,
	crumbs: readonly { name: string; path: string }[],
) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: absolute_url("/"),
			},
			...crumbs.map((crumb, index) => ({
				"@type": "ListItem",
				position: index + 2,
				name: crumb.name,
				item: absolute_url(crumb.path),
			})),
			{
				"@type": "ListItem",
				position: crumbs.length + 2,
				name: meta.title.split("—")[0]?.trim() ?? meta.title,
				item: absolute_url(meta.path),
			},
		],
	};
}
