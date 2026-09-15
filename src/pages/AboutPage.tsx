import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";
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

			<Breadcrumbs
				items={[
					{ name: "Home", path: "/" },
					{ name: "About" },
				]}
			/>

			<div className="bg-surface-pale">
				<div className="site-container py-8">
					<ResponsiveImage
						image={about.accentImage}
						className="h-24 w-full rounded-media object-cover md:h-32"
						sizes="(max-width: 1320px) 100vw, 1320px"
					/>
				</div>
			</div>

			<section className="section-pad bg-surface">
				<div className="site-container grid items-center gap-10 lg:grid-cols-2">
					<ResponsiveImage
						image={about.portrait}
						className="aspect-[4/5] w-full rounded-media object-cover"
						sizes="(max-width: 1024px) 100vw, 50vw"
						loading="eager"
					/>
					<div className="flex flex-col gap-4 text-foreground/90">
						<h2 className="font-display text-3xl font-medium text-foreground md:text-4xl">
							Who I am in the room
						</h2>
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
					<div className="mt-6 flex flex-col gap-4 text-foreground/90">
						{about.whyParagraphs.map((p) => (
							<p key={p.slice(0, 40)}>{p}</p>
						))}
					</div>
				</div>
			</section>

			<section className="section-pad bg-surface-pale">
				<div className="site-container">
					<ResponsiveImage
						image={about.valuesIcon}
						className="mb-6 h-14 w-auto"
						sizes="56px"
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
					<ResponsiveImage
						image={about.resonanceImage}
						className="w-full rounded-media object-cover"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
					<div>
						<ul className="flex flex-col gap-4 text-muted-foreground">
							{about.resonanceItems.map((item) => (
								<li key={item.slice(0, 40)} className="flex gap-2">
									<span aria-hidden="true">∞</span>
									<span>{item}</span>
								</li>
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
								<li key={item} className="flex gap-2">
									<span aria-hidden="true">∞</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="font-display text-3xl font-medium">{about.isNotTitle}</h2>
						<ul className="mt-6 flex flex-col gap-3 text-muted-foreground">
							{about.isNotItems.map((item) => (
								<li key={item} className="flex gap-2">
									<span aria-hidden="true">∞</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="section-pad bg-surface-pale" aria-label="Practice atmosphere">
				<div className="site-container">
					<h2 className="font-display text-4xl font-medium md:text-5xl">
						The atmosphere of this work
					</h2>
					<ul className="mt-10 grid gap-6 md:grid-cols-2">
						{about.galleryImages.map((image) => (
							<li key={image.src}>
								<ResponsiveImage
									image={image}
									className="aspect-[4/3] w-full rounded-media object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</li>
						))}
					</ul>
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
