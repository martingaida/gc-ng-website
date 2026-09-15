import type { ImageRef } from "@/content/types.js";
import { CTA_EXPECTATION } from "@/content/site.js";
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
	/** Pass false to hide; omit to skip credentials on lean heroes. */
	credentials?: string | false;
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
	credentials = false,
	cta,
	showCtaExpectation = true,
	compact = false,
	className,
}: HeroFoldProps) {
	const support_line = promise ?? support;

	return (
		<section
			className={cn(
				"relative isolate overflow-hidden bg-foreground",
				compact ? "min-h-[68vh]" : "min-h-[90vh]",
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
			{/* Soft vignette — keeps cocoa readable without washing out the photo */}
			<div
				className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-foreground/10 to-transparent"
				aria-hidden="true"
			/>

			<div className="site-container relative flex min-h-[inherit] items-end py-14 md:items-center md:py-20">
				<div className="enter-rise w-full max-w-lg rounded-media bg-background p-7 shadow-soft md:max-w-xl md:p-10">
					<p className="font-display text-2xl font-medium leading-tight text-foreground md:text-[1.75rem]">
						{brand}
					</p>
					<span
						aria-hidden="true"
						className="mt-4 block h-px w-12 bg-accent"
					/>
					{kicker ? (
						<p className="mt-5 text-sm tracking-wide text-muted-foreground">
							{kicker}
						</p>
					) : null}
					<h1
						className={cn(
							"font-display font-medium leading-[1.12] text-foreground text-pretty",
							kicker ? "mt-2" : "mt-5",
							compact
								? "text-4xl md:text-5xl"
								: "text-[2.5rem] md:text-5xl lg:text-[3.5rem]",
						)}
					>
						{h1}
					</h1>
					{support_line ? (
						<p className="mt-4 max-w-[34ch] font-display text-xl leading-snug text-foreground/90 md:text-2xl">
							{support_line}
						</p>
					) : null}
					{virtualNote ? (
						<p className="mt-3 text-base text-muted-foreground">{virtualNote}</p>
					) : null}
					{credentials ? (
						<p className="mt-3 text-sm text-muted-foreground">{credentials}</p>
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
