import { Link } from "react-router-dom";

import { polyamory } from "@/content/polyamory.js";
import { PRIMARY_CTA } from "@/content/site.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { PageMeta } from "@/seo/PageMeta.js";
import { breadcrumb_json_ld } from "@/seo/jsonLd.js";

export function PolyamoryPage() {
	return (
		<>
			<PageMeta
				meta={polyamory.meta}
				ogImage={polyamory.heroImage.src}
				jsonLd={breadcrumb_json_ld(polyamory.meta, [
					{ name: "Home", path: "/" },
				])}
			/>
			<HeroFold
				image={polyamory.heroImage}
				h1={polyamory.h1}
				kicker={polyamory.kicker}
				support={polyamory.lead}
				virtualNote={polyamory.virtualNote}
				cta={PRIMARY_CTA}
				compact
			/>
			<section className="section-pad bg-surface">
				<div className="site-container max-w-measure">
					<p className="text-lg text-muted-foreground">
						This page is a clear starting point for polyamory-affirming therapy.
						If you are looking for specialized work on desire or conflict patterns,
						those dedicated pages are linked below.
					</p>
					<ul className="mt-10 flex flex-col gap-8">
						{polyamory.themes.map((theme) => (
							<li key={theme.title}>
								<h2 className="font-display text-3xl font-medium">{theme.title}</h2>
								<p className="mt-3 text-muted-foreground">{theme.body}</p>
							</li>
						))}
					</ul>
					<div className="mt-10">
						<ButtonLink to={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink>
					</div>
				</div>
			</section>
			<section className="section-pad bg-background">
				<div className="site-container">
					<h2 className="font-display text-4xl font-medium">Related services</h2>
					<ul className="mt-8 grid gap-6 md:grid-cols-2">
						{polyamory.relatedServices.map((item) => (
							<li
								key={item.href}
								className="rounded-card border border-border bg-surface p-6"
							>
								<h3 className="font-display text-2xl">{item.title}</h3>
								<p className="mt-3 text-muted-foreground">{item.description}</p>
								<Link
									to={item.href}
									className="mt-4 inline-block underline decoration-accent underline-offset-4 hover:text-primary"
								>
									Learn more →
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<ClosingCtaSection content={polyamory.closing} />
		</>
	);
}
