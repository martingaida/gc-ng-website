import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { FaqList } from "@/ui/components/FaqList.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { ProcessSteps } from "@/ui/components/ProcessSteps.js";
import { RecognitionList } from "@/ui/components/ContentBlocks.js";
import { ServiceCards } from "@/ui/components/ServiceCards.js";
import { TestimonialQuotes } from "@/ui/components/TestimonialQuotes.js";
import { home } from "@/content/home.js";
import { PageMeta } from "@/seo/PageMeta.js";
import {
	faq_json_ld,
	organization_json_ld,
	website_json_ld,
} from "@/seo/jsonLd.js";

export function HomePage() {
	return (
		<>
			<PageMeta
				meta={home.meta}
				ogImage={home.hero.secondaryImage.src}
				jsonLd={[organization_json_ld(), website_json_ld(), faq_json_ld(home.faq.items)]}
			/>

			<HeroFold
				image={home.hero.secondaryImage}
				h1={home.hero.h1}
				promise={home.hero.promise}
				support={home.hero.support}
				virtualNote={home.hero.virtualNote}
				cta={home.hero.cta}
			/>

			<section className="section-pad bg-surface">
				<div className="site-container max-w-measure">
					<p className="text-sm tracking-wide text-muted-foreground">
						{home.unstuck.kicker}
					</p>
					<h2 className="mt-2 font-display text-4xl font-medium md:text-5xl">
						{home.unstuck.title}
					</h2>
					<div className="mt-6 flex flex-col gap-4 text-muted-foreground">
						{home.unstuck.paragraphs.map((p) => (
							<p key={p.slice(0, 40)}>{p}</p>
						))}
					</div>
				</div>
			</section>

			<RecognitionList
				title={home.peaceCost.title}
				items={home.peaceCost.items}
				showCta
			/>

			<section className="section-pad bg-background">
				<div className="site-container grid items-center gap-10 lg:grid-cols-2">
					<img
						src={home.meet.image.src}
						alt={home.meet.image.alt}
						className="w-full rounded-media object-cover"
					/>
					<div>
						<p className="text-sm tracking-wide text-muted-foreground">
							{home.meet.kicker}
						</p>
						<h2 className="mt-2 font-display text-4xl font-medium">
							{home.meet.title}
						</h2>
						<p className="mt-2 text-muted-foreground">{home.meet.virtualNote}</p>
						<div className="mt-6 flex flex-col gap-4 text-muted-foreground">
							{home.meet.paragraphs.map((p) => (
								<p key={p.slice(0, 40)}>{p}</p>
							))}
						</div>
						<div className="mt-8">
							<ButtonLink to={home.meet.aboutHref} variant="secondary">
								{home.meet.aboutLabel}
							</ButtonLink>
						</div>
					</div>
				</div>
			</section>

			<ServiceCards title="How I can help" cards={home.services} />

			<TestimonialQuotes
				title={home.testimonialsKicker}
				logo={home.testimonialsIcon}
				items={home.testimonials}
			/>

			<section className="section-pad bg-surface">
				<div className="site-container grid items-center gap-10 lg:grid-cols-2">
					<img
						src={home.whyWait.image.src}
						alt={home.whyWait.image.alt}
						className="w-full rounded-media object-cover"
						loading="lazy"
					/>
					<div>
						<h2 className="font-display text-4xl font-medium md:text-5xl">
							{home.whyWait.kicker}
						</h2>
						<p className="mt-6 text-muted-foreground">{home.whyWait.body}</p>
					</div>
				</div>
			</section>

			<ProcessSteps
				title={home.nowWhat.title}
				steps={home.nowWhat.steps}
				cta={home.nowWhat.cta}
			/>

			<FaqList
				kicker={home.faq.kicker}
				title={home.faq.title}
				items={home.faq.items}
			/>

			<ClosingCtaSection
				content={home.closing}
				accentImage={home.closing.image}
			/>
		</>
	);
}
