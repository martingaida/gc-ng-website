import { Link } from "react-router-dom";

import { blog } from "@/content/blog.js";
import type { BlogPost } from "@/content/types.js";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";
import { PageMeta } from "@/seo/PageMeta.js";
import { breadcrumb_json_ld } from "@/seo/jsonLd.js";

export function BlogIndexPage() {
	return (
		<>
			<PageMeta
				meta={blog.meta}
				jsonLd={breadcrumb_json_ld(blog.meta, [])}
			/>
			<section className="section-pad bg-background">
				<div className="site-container">
					<Breadcrumbs
						variant="inline"
						items={[
							{ name: "Home", path: "/" },
							{ name: "Blog" },
						]}
					/>
					<h1 className="font-display text-5xl font-medium text-foreground">
						Blog
					</h1>
					<p className="mt-4 max-w-measure text-lg leading-relaxed text-foreground/90">
						{blog.meta.description}
					</p>
					<ul className="mt-12 grid gap-10 md:grid-cols-2">
						{blog.posts.map((post) => (
							<li key={post.href}>
								<Link
									to={post.href}
									className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-[color,border-color,transform] duration-hover ease-brand hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99]"
								>
									<ResponsiveImage
										image={post.image}
										className="aspect-[16/10] w-full object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
									<div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
										<h2 className="font-display text-3xl font-medium text-foreground">
											{post.title}
										</h2>
										<p className="text-muted-foreground">{post.excerpt}</p>
										<span className="mt-auto underline decoration-accent underline-offset-4 transition-colors duration-hover group-hover:text-primary group-hover:decoration-primary">
											Read more
										</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}

function BlogArticle({ post }: { post: BlogPost }) {
	return (
		<>
			<PageMeta
				meta={post.meta}
				ogImage={post.image?.src}
				jsonLd={breadcrumb_json_ld(post.meta, [
					{ name: "Blog", path: "/blog" },
				])}
			/>
			<article className="section-pad bg-background">
				<div className="prose-editorial site-container max-w-measure">
					<Breadcrumbs
						variant="inline"
						items={[
							{ name: "Home", path: "/" },
							{ name: "Blog", path: "/blog" },
							{ name: post.h1 },
						]}
					/>
					<p className="prose-meta">
						<Link to={post.authorHref}>{post.authorLabel}</Link>
					</p>
					<h1>{post.h1}</h1>
					{post.image ? (
						<ResponsiveImage
							image={post.image}
							className="mt-8 w-full rounded-media object-cover"
							sizes="(max-width: 768px) 100vw, 42rem"
							loading="eager"
						/>
					) : null}
					{post.body?.map((paragraph, index) => (
						<p key={paragraph.slice(0, 40)} className={index === 0 ? "lede" : undefined}>
							{paragraph}
						</p>
					))}
					{post.episodes?.map((episode) => (
						<section key={episode.url}>
							<h2>
								<a href={episode.url} target="_blank" rel="noreferrer">
									{episode.title}
									<span className="sr-only"> (opens in a new tab)</span>
								</a>
							</h2>
							<p>{episode.summary}</p>
							{episode.learnings ? (
								<ul>
									{episode.learnings.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							) : null}
						</section>
					))}
					{post.sections?.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							<p>{section.body}</p>
						</section>
					))}
					{post.closing ? <p>{post.closing}</p> : null}
					{post.footerImage ? (
						<ResponsiveImage
							image={post.footerImage}
							className="mt-10 w-full rounded-media object-cover"
							sizes="(max-width: 768px) 100vw, 42rem"
						/>
					) : null}
					<nav className="prose-footer-nav" aria-label="Article navigation">
						{post.prev ? (
							<Link to={post.prev.href}>← {post.prev.label}</Link>
						) : null}
						{post.next ? (
							<Link to={post.next.href}>{post.next.label} →</Link>
						) : null}
						<Link to="/blog">Back to blog</Link>
					</nav>
				</div>
			</article>
		</>
	);
}

export function SexWithEmilyPage() {
	return <BlogArticle post={blog.sexWithEmily} />;
}

export function HolidaysBlogPage() {
	return <BlogArticle post={blog.holidays} />;
}
