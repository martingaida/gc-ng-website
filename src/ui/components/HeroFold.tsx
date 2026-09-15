import type { ImageRef } from "@/content/types.js";
import { CREDENTIALS_LINE, CTA_EXPECTATION } from "@/content/site.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";
import { cn } from "@/lib/cn";

type HeroFoldProps = {
	image: ImageRef;
	brand?: string;
	h1: string;
	promise?: string;
	support?: string;
	kicker?: string;
	virtualNote?: string;
	credentials?: string;
	cta?: { label: string; href: string };
	showCtaExpectation?: boolean;
	compact?: boolean;
	className?: string;
};

export function HeroFold({
	image,
	brand = "Natalie Gaida | LMFT",
	h1,
	promise,
	support,
	kicker,
	virtualNote,
	credentials = CREDENTIALS_LINE,
	cta,
	showCtaExpectation = true,
	compact = false,
	className,
}: HeroFoldProps) {
	return (
		<section
			className={cn(
				"relative isolate overflow-hidden bg-foreground",
				compact ? "min-h-[70vh]" : "min-h-[88vh]",
				className,
			)}
		>
			<ResponsiveImage
				image={image}
				className="absolute inset-0 size-full object-cover"
				fetchPriority="high"
				loading="eager"
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-foreground/35 via-foreground/15 to-transparent" />

			<div className="site-container relative flex min-h-[inherit] items-end py-16 md:items-center md:py-24">
				<div className="enter-rise max-w-xl rounded-media bg-background p-6 shadow-soft md:p-10">
					<p className="mb-3 font-display text-2xl font-medium text-foreground md:text-3xl">
						{brand}
					</p>
					{kicker ? (
						<p className="mb-2 text-sm tracking-wide text-muted-foreground">
							{kicker}
						</p>
					) : null}
					<h1 className="font-display text-4xl font-medium leading-[1.15] text-foreground md:text-5xl lg:text-[3.5rem]">
						{h1}
					</h1>
					{promise ? (
						<p className="mt-4 font-display text-2xl leading-snug text-foreground md:text-3xl">
							{promise}
						</p>
					) : null}
					{support ? (
						<p className="mt-3 text-measure text-lg text-muted-foreground">
							{support}
						</p>
					) : null}
					{virtualNote ? (
						<p className="mt-3 text-base text-muted-foreground">{virtualNote}</p>
					) : null}
					{credentials ? (
						<p className="mt-4 text-sm text-muted-foreground">{credentials}</p>
					) : null}
					{cta ? (
						<div className="mt-8">
							<ButtonLink to={cta.href}>{cta.label}</ButtonLink>
							{showCtaExpectation ? (
								<p className="mt-3 text-sm text-muted-foreground">
									{CTA_EXPECTATION}
								</p>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
