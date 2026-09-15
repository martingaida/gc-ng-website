import { useEffect } from "react";

import { absolute_url } from "@/content/site.js";
import type { PageMeta } from "@/content/types.js";

type PageMetaProps = {
	meta: PageMeta;
	ogImage?: string;
	jsonLd?: Record<string, unknown> | readonly Record<string, unknown>[];
};

function set_meta(attr: "name" | "property", key: string, content: string) {
	let el = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", content);
}

export function PageMeta({ meta, ogImage, jsonLd }: PageMetaProps) {
	useEffect(() => {
		const canonical = absolute_url(meta.path);
		document.title = meta.title;

		set_meta("name", "description", meta.description);
		set_meta("property", "og:title", meta.title);
		set_meta("property", "og:description", meta.description);
		set_meta("property", "og:type", "website");
		set_meta("property", "og:url", canonical);
		set_meta("name", "twitter:card", "summary_large_image");
		set_meta("name", "twitter:title", meta.title);
		set_meta("name", "twitter:description", meta.description);

		if (ogImage) {
			const image_url = ogImage.startsWith("http")
				? ogImage
				: absolute_url(ogImage);
			set_meta("property", "og:image", image_url);
			set_meta("name", "twitter:image", image_url);
		}

		let link = document.head.querySelector(
			'link[rel="canonical"]',
		) as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement("link");
			link.rel = "canonical";
			document.head.appendChild(link);
		}
		link.href = canonical;

		const script_id = "page-jsonld";
		let script = document.getElementById(script_id) as HTMLScriptElement | null;
		if (jsonLd) {
			if (!script) {
				script = document.createElement("script");
				script.id = script_id;
				script.type = "application/ld+json";
				document.head.appendChild(script);
			}
			script.textContent = JSON.stringify(jsonLd);
		} else if (script) {
			script.remove();
		}
	}, [meta, ogImage, jsonLd]);

	return null;
}
