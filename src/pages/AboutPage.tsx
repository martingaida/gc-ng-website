import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { ServiceCards } from "@/ui/components/ServiceCards.js";
import { about } from "@/content/about.js";
import { PageMeta } from "@/seo/PageMeta.js";
import { breadcrumb_json_ld } from "@/seo/jsonLd.js";

export function AboutPage() {
	return (
		<>
			<PageMeta
				meta={about.meta}
				ogImage={about.portrait.src}
				jsonLd={breadcrumb_json_ld(about.meta, [])}
			/>
			<HeroFold
				image={about.heroImage}
				h1={about.h1}
				kicker={about.kicker}
				cta={about.cta}
				compact
			/>

			<div className="bg-surface-pale">
				<div className="site-container py-8">
					<img
						src={about.accentImage.src}
						alt={about.accentImage.alt}
						className="h-24 w-full rounded-media object-cover md:h-32"
						loading="lazy"
					/>
				</div>
			</div>

			<section className="section-pad bg-surface">
				<div className="site-container grid items-center gap-10 lg:grid-cols-2">
					<img
						src={about.portrait.src}
						alt={about.portrait.alt}
						className="w-full rounded-media object-cover"
					/>
					<div className="flex flex-col gap-4 text-muted-foreground">
						{about.leadParagraphs.map((p) => (
							<p key={p.slice(0, 40)}>{p}</p>
						))}
						<div className="mt-4">
							<ButtonLink to={about.cta.href}>{about.cta.label}</ButtonLink>
						</div>
					</div>
				</div>
			</section>

			<section className="section-pad bg-background">
				<div className="site-container max-w-measure">
					<h2 className="font-display text-4xl font-medium md:text-5xl">
						{about.whyTitle}
					</h2>
					<div className="mt-6 flex flex-col gap-4 text-muted-foreground">
						{about.whyParagraphs.map((p) => (
							<p key={p.slice(0, 40)}>{p}</p>
						))}
					</div>
				</div>
			</section>

			<section className="section-pad bg-surface-pale">
				<div className="site-container">
					<img
						src={about.valuesIcon.src}
						alt={about.valuesIcon.alt}
						className="mb-6 h-14 w-auto"
						loading="lazy"
					/>
					<h2 className="font-display text-4xl font-medium md:text-5xl">
						{about.valuesTitle}
					</h2>
					<ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{about.values.map((value) => (
							<li key={value.title}>
								<h3 className="font-display text-2xl font-medium">{value.title}</h3>
								<p className="mt-3 text-muted-foreground">{value.body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="section-pad bg-surface">
				<div className="site-container grid items-center gap-10 lg:grid-cols-2">
					<img
						src={about.resonanceImage.src}
						alt={about.resonanceImage.alt}
						className="w-full rounded-media object-cover"
						loading="lazy"
					/>
					<div>
						<ul className="flex flex-col gap-4 text-muted-foreground">
							{about.resonanceItems.map((item) => (
								<li key={item.slice(0, 40)}>∞ {item}</li>
							))}
						</ul>
						<p className="mt-6 text-foreground">{about.resonanceClose}</p>
					</div>
				</div>
			</section>

			<section className="section-pad bg-background">
				<div className="site-container grid gap-10 md:grid-cols-2">
					<div>
						<h2 className="font-display text-3xl font-medium">{about.isTitle}</h2>
						<ul className="mt-6 flex flex-col gap-3 text-muted-foreground">
							{about.isItems.map((item) => (
								<li key={item}>∞ {item}</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="font-display text-3xl font-medium">{about.isNotTitle}</h2>
						<ul className="mt-6 flex flex-col gap-3 text-muted-foreground">
							{about.isNotItems.map((item) => (
								<li key={item}>∞ {item}</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<ServiceCards title={about.servicesKicker} cards={about.services} />

			<ClosingCtaSection
				content={about.closing}
				accentImage={about.closingAccent}
			/>
		</>
	);
}
