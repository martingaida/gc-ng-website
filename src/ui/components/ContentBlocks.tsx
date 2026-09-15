import type { BeforeAfterPair, HowHelpSection, TherapistMeet } from "@/content/types.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";
import { CTA_EXPECTATION, PRIMARY_CTA } from "@/content/site.js";

export function RecognitionList({
	title,
	items,
	showCta = false,
}: {
	title: string;
	items: readonly string[];
	showCta?: boolean;
}) {
	return (
		<section className="section-pad bg-surface">
			<div className="site-container max-w-3xl">
				<h2 className="font-display text-4xl font-medium md:text-5xl">{title}</h2>
				<ul className="mt-8 flex flex-col gap-3 text-lg text-foreground/90">
					{items.map((item) => (
						<li key={item} className="flex gap-2">
							<span aria-hidden="true">∞</span>
							<span>{item}</span>
						</li>
					))}
				</ul>
				{showCta ? (
					<div className="mt-8">
						<ButtonLink to={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}

export function BeforeAfter({
	title,
	subtitle,
	pairs,
	cta,
}: {
	title: string;
	subtitle?: string;
	pairs: readonly BeforeAfterPair[];
	cta?: { label: string; href: string };
}) {
	return (
		<section className="section-pad bg-surface-pale">
			<div className="site-container">
				<h2 className="font-display text-4xl font-medium md:text-5xl">{title}</h2>
				{subtitle ? (
					<p className="mt-3 text-xl text-muted-foreground">{subtitle}</p>
				) : null}
				<ul className="mt-10 grid gap-6 md:grid-cols-2">
					{pairs.map((pair) => (
						<li
							key={pair.before}
							className="rounded-card border border-border bg-surface p-6"
						>
							<p className="flex gap-2 text-muted-foreground">
								<span aria-hidden="true">∞</span>
								<span>{pair.before}</span>
							</p>
							<p className="mt-3 font-medium text-foreground">→ {pair.after}</p>
						</li>
					))}
				</ul>
				{cta ? (
					<div className="mt-10">
						<ButtonLink to={cta.href}>{cta.label}</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}

export function HowHelp({
	title,
	sections,
}: {
	title: string;
	sections: readonly HowHelpSection[];
}) {
	return (
		<section className="section-pad bg-background">
			<div className="site-container max-w-3xl">
				<h2 className="font-display text-4xl font-medium md:text-5xl">{title}</h2>
				<div className="mt-10 flex flex-col gap-10">
					{sections.map((section) => (
						<div key={section.title}>
							<h3 className="font-display text-2xl font-medium">{section.title}</h3>
							<p className="mt-3 text-foreground/90">{section.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function TherapistMeetSection({ therapist }: { therapist: TherapistMeet }) {
	return (
		<section className="section-pad bg-surface">
			<div className="site-container grid items-center gap-10 lg:grid-cols-2">
				<ResponsiveImage
					image={therapist.image}
					className="aspect-[4/5] w-full rounded-media object-cover"
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
				<div>
					<p className="text-sm tracking-wide text-muted-foreground">
						{therapist.kicker}
					</p>
					<h2 className="mt-2 font-display text-4xl font-medium">
						{therapist.name}
					</h2>
					<div className="mt-6 flex flex-col gap-4 text-foreground/90">
						{therapist.paragraphs.map((paragraph) => (
							<p key={paragraph.slice(0, 48)}>{paragraph}</p>
						))}
					</div>
					<div className="mt-8">
						<ButtonLink to={therapist.aboutHref} variant="secondary">
							{therapist.aboutLabel}
						</ButtonLink>
					</div>
				</div>
			</div>
		</section>
	);
}
