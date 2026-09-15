import { PRIMARY_CTA } from "@/content/site.js";
import type { ServicePageContent } from "@/content/types.js";
import {
	BeforeAfter,
	HowHelp,
	RecognitionList,
	TherapistMeetSection,
} from "@/ui/components/ContentBlocks.js";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs.js";
import { ClosingCtaSection } from "@/ui/components/ClosingCtaSection.js";
import { FaqList } from "@/ui/components/FaqList.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { ProcessSteps } from "@/ui/components/ProcessSteps.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";
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
					breadcrumb_json_ld(content.meta, []),
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

			<Breadcrumbs
				items={[
					{ name: "Home", path: "/" },
					{ name: "Services" },
					{ name: crumbName },
				]}
			/>

			<section className="overflow-hidden bg-background" aria-hidden="true">
				<ResponsiveImage
					image={content.accentImage}
					className="h-40 w-full object-cover md:h-52"
					sizes="100vw"
				/>
			</section>

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
						<ResponsiveImage
							image={content.modalities.image}
							className="w-full rounded-media object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						<div>
							<h2 className="font-display text-4xl font-medium">
								{content.modalities.title}
							</h2>
							<p className="mt-4 text-foreground/90">
								{content.modalities.intro}
							</p>
							<div className="mt-8 flex flex-col gap-6">
								{content.modalities.items.map((item) => (
									<div key={item.title}>
										<h3 className="font-display text-2xl">{item.title}</h3>
										<p className="mt-2 text-foreground/90">{item.body}</p>
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
						<ResponsiveImage
							image={content.callout.image}
							className="w-full rounded-media object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
						<div>
							<h2 className="font-display text-4xl font-medium">
								{content.callout.title}
							</h2>
							<p className="mt-4 text-foreground/90">{content.callout.body}</p>
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
		</>
	);
}
