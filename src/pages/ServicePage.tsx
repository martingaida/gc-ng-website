import { PRIMARY_CTA } from "@/content/site.js";
import type { ServicePageContent } from "@/content/types.js";
import {
	BeforeAfter,
	HowHelp,
	RecognitionList,
	TherapistMeetSection,
} from "@/ui/components/ContentBlocks.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { FaqList } from "@/ui/components/FaqList.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { ProcessSteps } from "@/ui/components/ProcessSteps.js";
import { ServiceTeasers } from "@/ui/components/ServiceCards.js";
import { PageMeta } from "@/seo/PageMeta.js";
import { breadcrumb_json_ld, faq_json_ld } from "@/seo/jsonLd.js";

type ServicePageProps = {
	content: ServicePageContent;
	crumbName: string;
};

export function ServicePage({ content, crumbName }: ServicePageProps) {
	return (
		<>
			<PageMeta
				meta={content.meta}
				ogImage={content.featureImage.src}
				jsonLd={[
					breadcrumb_json_ld(content.meta, [{ name: "Home", path: "/" }]),
					faq_json_ld(content.faq),
				]}
			/>

			<HeroFold
				image={content.featureImage}
				h1={content.h1}
				kicker={content.kicker}
				support={content.lead}
				virtualNote={content.virtualNote}
				cta={PRIMARY_CTA}
			/>

			<div className="bg-surface-pale">
				<div className="site-container py-8">
					<img
						src={content.accentImage.src}
						alt={content.accentImage.alt}
						className="h-24 w-full rounded-media object-cover md:h-32"
						loading="lazy"
					/>
				</div>
			</div>

			<RecognitionList title={content.arrivalTitle} items={content.arrivalItems} />

			<BeforeAfter
				title={content.beforeAfter.title}
				subtitle={content.beforeAfter.subtitle}
				pairs={content.beforeAfter.pairs}
				cta={PRIMARY_CTA}
			/>

			<ProcessSteps title="How we begin" steps={content.steps} cta={PRIMARY_CTA} />

			{content.modalities ? (
				<section className="section-pad bg-surface">
					<div className="site-container grid items-center gap-10 lg:grid-cols-2">
						<img
							src={content.modalities.image.src}
							alt={content.modalities.image.alt}
							className="w-full rounded-media object-cover"
							loading="lazy"
						/>
						<div>
							<h2 className="font-display text-4xl font-medium">
								{content.modalities.title}
							</h2>
							<p className="mt-4 text-muted-foreground">
								{content.modalities.intro}
							</p>
							<div className="mt-8 flex flex-col gap-6">
								{content.modalities.items.map((item) => (
									<div key={item.title}>
										<h3 className="font-display text-2xl">{item.title}</h3>
										<p className="mt-2 text-muted-foreground">{item.body}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			) : null}

			<HowHelp title={content.howHelp.title} sections={content.howHelp.sections} />

			{content.callout ? (
				<section className="section-pad bg-surface-pale">
					<div className="site-container grid items-center gap-10 lg:grid-cols-2">
						<img
							src={content.callout.image.src}
							alt={content.callout.image.alt}
							className="w-full rounded-media object-cover"
							loading="lazy"
						/>
						<div>
							<h2 className="font-display text-4xl font-medium">
								{content.callout.title}
							</h2>
							<p className="mt-4 text-muted-foreground">{content.callout.body}</p>
						</div>
					</div>
				</section>
			) : null}

			<TherapistMeetSection therapist={content.therapist} />

			<FaqList
				kicker={content.faqKicker}
				title={content.faqTitle}
				items={content.faq}
			/>

			<ServiceTeasers
				kicker={content.otherServicesKicker}
				title={content.otherServicesTitle}
				image={content.otherServicesImage}
				items={content.otherServices}
			/>

			<ClosingCtaSection
				content={content.closing}
				accentImage={content.closingAccentImage}
			/>
			<span className="sr-only">{crumbName}</span>
		</>
	);
}
