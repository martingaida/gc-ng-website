/**
 * Build-time prerender: writes route HTML shells with meta + crawlable body
 * from content modules so search/answer engines see real document content.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { about } from "../src/content/about.ts";
import { affair } from "../src/content/affair.ts";
import { blog } from "../src/content/blog.ts";
import { communication } from "../src/content/communication.ts";
import { contact } from "../src/content/contact.ts";
import { desire } from "../src/content/desire.ts";
import { discernment } from "../src/content/discernment.ts";
import { home } from "../src/content/home.ts";
import { parenting } from "../src/content/parenting.ts";
import { polyamory } from "../src/content/polyamory.ts";
import { absolute_url } from "../src/content/site.ts";
import type { PageMeta, ServicePageContent } from "../src/content/types.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

function escape_html(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function service_body(content: ServicePageContent): string {
	const pairs = content.beforeAfter.pairs
		.map(
			(pair) =>
				`<li><p>${escape_html(pair.before)}</p><p>${escape_html(pair.after)}</p></li>`,
		)
		.join("");
	const faq = content.faq
		.map(
			(item) =>
				`<details><summary>${escape_html(item.question)}</summary><p>${escape_html(item.answer)}</p></details>`,
		)
		.join("");
	return `
		<article>
			<p>${escape_html(content.kicker)}</p>
			<h1>${escape_html(content.h1)}</h1>
			<p>${escape_html(content.lead)}</p>
			<p>${escape_html(content.virtualNote)}</p>
			<h2>${escape_html(content.arrivalTitle)}</h2>
			<ul>${content.arrivalItems.map((item) => `<li>${escape_html(item)}</li>`).join("")}</ul>
			<h2>${escape_html(content.beforeAfter.title)}</h2>
			<ul>${pairs}</ul>
			<h2>${escape_html(content.howHelp.title)}</h2>
			${content.howHelp.sections
				.map(
					(section) =>
						`<h3>${escape_html(section.title)}</h3><p>${escape_html(section.body)}</p>`,
				)
				.join("")}
			<h2>Frequently asked questions</h2>
			${faq}
			<h2>${escape_html(content.closing.title)}</h2>
			${content.closing.paragraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
		</article>
	`;
}

type RoutePage = {
	meta: PageMeta;
	body: string;
	ogImage?: string;
};

const routes: RoutePage[] = [
	{
		meta: home.meta,
		ogImage: home.hero.secondaryImage.src,
		body: `
			<article>
				<h1>${escape_html(home.hero.h1)}</h1>
				<p>${escape_html(home.hero.promise)}</p>
				<p>${escape_html(home.hero.support)}</p>
				<p>${escape_html(home.hero.virtualNote)}</p>
				<h2>${escape_html(home.unstuck.title)}</h2>
				${home.unstuck.paragraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
				<h2>${escape_html(home.peaceCost.title)}</h2>
				<ul>${home.peaceCost.items.map((item) => `<li>${escape_html(item)}</li>`).join("")}</ul>
				<h2>${escape_html(home.meet.title)}</h2>
				${home.meet.paragraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
				<h2>How I can help</h2>
				<ul>${home.services.map((s) => `<li><h3>${escape_html(s.title)}</h3><p>${escape_html(s.description)}</p></li>`).join("")}</ul>
				<h2>${escape_html(home.closing.title)}</h2>
				${home.closing.paragraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
			</article>
		`,
	},
	{
		meta: about.meta,
		ogImage: about.portrait.src,
		body: `
			<article>
				<h1>${escape_html(about.h1)}</h1>
				${about.leadParagraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
				<h2>${escape_html(about.whyTitle)}</h2>
				${about.whyParagraphs.map((p) => `<p>${escape_html(p)}</p>`).join("")}
			</article>
		`,
	},
	{
		meta: contact.meta,
		ogImage: contact.heroImage.src,
		body: `
			<article>
				<h1>${escape_html(contact.h1)}</h1>
				<p>${escape_html(contact.lead)}</p>
				<p><a href="${escape_html(contact.emailHref)}">${escape_html(contact.email)}</a></p>
				<p><a href="${escape_html(contact.phoneHref)}">${escape_html(contact.phone)}</a></p>
			</article>
		`,
	},
	{ meta: affair.meta, ogImage: affair.featureImage.src, body: service_body(affair) },
	{ meta: parenting.meta, ogImage: parenting.featureImage.src, body: service_body(parenting) },
	{
		meta: discernment.meta,
		ogImage: discernment.featureImage.src,
		body: service_body(discernment),
	},
	{ meta: desire.meta, ogImage: desire.featureImage.src, body: service_body(desire) },
	{
		meta: communication.meta,
		ogImage: communication.featureImage.src,
		body: service_body(communication),
	},
	{
		meta: polyamory.meta,
		ogImage: polyamory.heroImage.src,
		body: `
			<article>
				<h1>${escape_html(polyamory.h1)}</h1>
				<p>${escape_html(polyamory.lead)}</p>
				${polyamory.themes
					.map(
						(theme) =>
							`<h2>${escape_html(theme.title)}</h2><p>${escape_html(theme.body)}</p>`,
					)
					.join("")}
			</article>
		`,
	},
	{
		meta: blog.meta,
		body: `
			<article>
				<h1>Blog</h1>
				<p>${escape_html(blog.meta.description)}</p>
				<ul>${blog.posts
					.map(
						(post) =>
							`<li><h2>${escape_html(post.title)}</h2><p>${escape_html(post.excerpt)}</p></li>`,
					)
					.join("")}</ul>
			</article>
		`,
	},
	{
		meta: blog.sexWithEmily.meta,
		ogImage: blog.sexWithEmily.image?.src,
		body: `
			<article>
				<h1>${escape_html(blog.sexWithEmily.h1)}</h1>
				${(blog.sexWithEmily.episodes ?? [])
					.map(
						(episode) =>
							`<h2>${escape_html(episode.title)}</h2><p>${escape_html(episode.summary)}</p>`,
					)
					.join("")}
			</article>
		`,
	},
	{
		meta: blog.holidays.meta,
		ogImage: blog.holidays.image?.src,
		body: `
			<article>
				<h1>${escape_html(blog.holidays.h1)}</h1>
				${(blog.holidays.body ?? [])
					.map((p) => `<p>${escape_html(p)}</p>`)
					.join("")}
				${(blog.holidays.sections ?? [])
					.map(
						(section) =>
							`<h2>${escape_html(section.title)}</h2><p>${escape_html(section.body)}</p>`,
					)
					.join("")}
			</article>
		`,
	},
];

function write_route(page: RoutePage) {
	const canonical = absolute_url(page.meta.path);
	const og_image = page.ogImage
		? page.ogImage.startsWith("http")
			? page.ogImage
			: absolute_url(page.ogImage)
		: undefined;

	let html = template;
	html = html.replace(
		/<title>[\s\S]*?<\/title>/,
		`<title>${escape_html(page.meta.title)}</title>`,
	);
	html = html.replace(
		/<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
		`<meta name="description" content="${escape_html(page.meta.description)}" />`,
	);
	html = html.replace(
		/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
		`<link rel="canonical" href="${escape_html(canonical)}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
		`<meta property="og:title" content="${escape_html(page.meta.title)}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
		`<meta property="og:description" content="${escape_html(page.meta.description)}" />`,
	);
	html = html.replace(
		/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
		`<meta property="og:url" content="${escape_html(canonical)}" />`,
	);
	if (og_image) {
		if (html.includes('property="og:image"')) {
			html = html.replace(
				/<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
				`<meta property="og:image" content="${escape_html(og_image)}" />`,
			);
		} else {
			html = html.replace(
				"</head>",
				`    <meta property="og:image" content="${escape_html(og_image)}" />\n  </head>`,
			);
		}
	}

	html = html.replace(
		/<div id="root"><\/div>/,
		`<div id="root">${page.body}</div>`,
	);

	const out_path =
		page.meta.path === "/"
			? join(dist, "index.html")
			: join(dist, page.meta.path.replace(/^\//, ""), "index.html");

	mkdirSync(dirname(out_path), { recursive: true });
	writeFileSync(out_path, html);
	console.log(`prerendered ${page.meta.path} → ${out_path}`);
}

for (const route of routes) {
	write_route(route);
}

console.log(`Prerendered ${routes.length} routes.`);
