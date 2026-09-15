import { Link } from "react-router-dom";

import { polyamory } from "@/content/polyamory.js";
import { CTA_EXPECTATION, PRIMARY_CTA } from "@/content/site.js";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs.js";
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
				jsonLd={breadcrumb_json_ld(polyamory.meta, [])}
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
			<Breadcrumbs
				items={[
					{ name: "Home", path: "/" },
					{ name: "Services" },
					{ name: "Polyamory Therapy" },
				]}
			/>
			<section className="section-pad bg-surface">
				<div className="site-container max-w-measure">
					<h2 className="font-display text-3xl font-medium md:text-4xl">
						How this work starts
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						This page is a clear starting point for polyamory-affirming therapy.
						If you are looking for specialized work on desire or conflict patterns,
						those dedicated pages are linked below.
					</p>
					<ul className="mt-10 flex flex-col gap-8">
						{polyamory.themes.map((theme) => (
							<li key={theme.title}>
								<h3 className="font-display text-3xl font-medium">{theme.title}</h3>
								<p className="mt-3 text-muted-foreground">{theme.body}</p>
							</li>
						))}
					</ul>
					<div className="mt-10">
						<ButtonLink to={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				</div>
			</section>
			<section className="section-pad bg-background">
				<div className="site-container">
					<h2 className="font-display text-4xl font-medium">Related services</h2>
					<ul className="mt-8 grid gap-6 md:grid-cols-2">
						{polyamory.relatedServices.map((item) => (
							<li key={item.href}>
								<Link
									to={item.href}
									className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-[color,border-color,transform] duration-hover ease-brand hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99]"
								>
									<h3 className="font-display text-2xl">{item.title}</h3>
									<p className="mt-3 text-muted-foreground">{item.description}</p>
									<span className="mt-4 inline-block underline decoration-accent underline-offset-4 transition-colors duration-hover group-hover:text-primary group-hover:decoration-primary">
										Learn more →
									</span>
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
