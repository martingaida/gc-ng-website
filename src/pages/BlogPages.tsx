import { Link } from "react-router-dom";

import { blog } from "@/content/blog.js";
import type { BlogPost } from "@/content/types.js";
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
					<h1 className="font-display text-5xl font-medium">Blog</h1>
					<p className="mt-4 max-w-measure text-muted-foreground">
						{blog.meta.description}
					</p>
					<ul className="mt-12 grid gap-10 md:grid-cols-2">
						{blog.posts.map((post) => (
							<li key={post.href} className="overflow-hidden rounded-card border border-border bg-surface">
								<img
									src={post.image.src}
									alt={post.image.alt}
									className="aspect-[16/10] w-full object-cover"
									loading="lazy"
								/>
								<div className="flex flex-col gap-3 p-6 md:p-8">
									<h2 className="font-display text-3xl font-medium">{post.title}</h2>
									<p className="text-muted-foreground">{post.excerpt}</p>
									<Link
										to={post.href}
										className="underline decoration-accent underline-offset-4 hover:text-primary"
									>
										Read more
									</Link>
								</div>
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
					{ name: "Blog", path: "/blog-3" },
				])}
			/>
			<article className="section-pad bg-background">
				<div className="site-container max-w-measure">
					<p className="text-sm text-muted-foreground">
						<Link to={post.authorHref} className="hover:text-primary">
							{post.authorLabel}
						</Link>
					</p>
					<h1 className="mt-3 font-display text-4xl font-medium md:text-5xl">
						{post.h1}
					</h1>
					{post.image ? (
						<img
							src={post.image.src}
							alt={post.image.alt}
							className="mt-8 w-full rounded-media object-cover"
						/>
					) : null}
					{post.body?.map((paragraph) => (
						<p key={paragraph.slice(0, 40)} className="mt-6 text-muted-foreground">
							{paragraph}
						</p>
					))}
					{post.episodes?.map((episode) => (
						<section key={episode.url} className="mt-10">
							<h2 className="font-display text-3xl font-medium">
								<a
									href={episode.url}
									className="underline decoration-accent underline-offset-4 hover:text-primary"
									target="_blank"
									rel="noreferrer"
								>
									{episode.title}
								</a>
							</h2>
							<p className="mt-3 text-muted-foreground">{episode.summary}</p>
							{episode.learnings ? (
								<ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
									{episode.learnings.map((item) => (
										<li key={item}>• {item}</li>
									))}
								</ul>
							) : null}
						</section>
					))}
					{post.sections?.map((section) => (
						<section key={section.title} className="mt-10">
							<h2 className="font-display text-3xl font-medium">{section.title}</h2>
							<p className="mt-3 text-muted-foreground">{section.body}</p>
						</section>
					))}
					{post.closing ? (
						<p className="mt-10 text-muted-foreground">{post.closing}</p>
					) : null}
					{post.footerImage ? (
						<img
							src={post.footerImage.src}
							alt={post.footerImage.alt}
							className="mt-10 w-full rounded-media object-cover"
							loading="lazy"
						/>
					) : null}
					<nav className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-muted-foreground">
						{post.prev ? (
							<Link to={post.prev.href} className="hover:text-primary">
								← {post.prev.label}
							</Link>
						) : null}
						{post.next ? (
							<Link to={post.next.href} className="hover:text-primary">
								{post.next.label} →
							</Link>
						) : null}
						<Link to="/blog-3" className="hover:text-primary">
							Back to blog
						</Link>
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
