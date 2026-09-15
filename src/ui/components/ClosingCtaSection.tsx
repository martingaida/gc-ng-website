import type { ClosingCta } from "@/content/types.js";
import { CTA_EXPECTATION, PRIMARY_CTA } from "@/content/site.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";

type ClosingCtaSectionProps = {
	content: ClosingCta;
	accentImage?: { src: string; alt: string; width?: number; height?: number };
};

export function ClosingCtaSection({
	content,
	accentImage,
}: ClosingCtaSectionProps) {
	return (
		<section className="section-pad-lg bg-background">
			<div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					{content.kicker ? (
						<p className="font-display text-2xl text-foreground md:text-3xl">
							{content.kicker}
						</p>
					) : null}
					<h2 className="mt-3 font-display text-4xl font-medium text-pretty text-foreground md:text-5xl lg:text-[3.25rem]">
						{content.title}
					</h2>
					<span
						aria-hidden="true"
						className="mt-6 block h-px w-14 bg-accent"
					/>
					<div className="mt-6 flex max-w-measure flex-col gap-4 text-foreground/90">
						{content.paragraphs.map((paragraph) => (
							<p key={paragraph.slice(0, 40)}>{paragraph}</p>
						))}
					</div>
					<div className="mt-10">
						<ButtonLink to={PRIMARY_CTA.href} size="lg">
							{PRIMARY_CTA.label}
						</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				</div>
				{accentImage ? (
					<ResponsiveImage
						image={accentImage}
						className="aspect-[4/5] max-h-[32rem] w-full rounded-media object-cover lg:aspect-auto lg:h-full"
						sizes="(max-width: 1024px) 100vw, 50vw"
					/>
				) : null}
			</div>
		</section>
	);
}
