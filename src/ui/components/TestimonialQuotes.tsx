import type { Testimonial } from "@/content/types.js";
import { PRIMARY_CTA, CTA_EXPECTATION } from "@/content/site.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";

type TestimonialQuotesProps = {
	title?: string;
	logo?: { src: string; alt: string; width?: number; height?: number };
	items: readonly Testimonial[];
	showMiniCta?: boolean;
};

export function TestimonialQuotes({
	title = "Testimonials with couples' permission",
	logo,
	items,
	showMiniCta = false,
}: TestimonialQuotesProps) {
	return (
		<section className="section-pad bg-background" aria-labelledby="testimonials-heading">
			<div className="site-container">
				{logo ? (
					<ResponsiveImage
						image={logo}
						className="mb-8 h-16 w-auto"
						sizes="64px"
					/>
				) : null}
				<h2
					id="testimonials-heading"
					className="font-display text-4xl font-medium md:text-5xl"
				>
					{title}
				</h2>
				<ul className="mt-10 flex flex-col gap-14">
					{items.map((item) => (
						<li key={`${item.attribution}-${item.quote.slice(0, 24)}`}>
							<blockquote className="editorial-pullquote max-w-3xl border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-foreground md:pl-8 md:text-3xl md:leading-[1.35]">
								“{item.quote.replace(/^["“]|["”]$/g, "")}”
							</blockquote>
							<p className="mt-4 text-muted-foreground">— {item.attribution}</p>
						</li>
					))}
				</ul>
				{showMiniCta ? (
					<div className="mt-12">
						<ButtonLink to={PRIMARY_CTA.href} variant="secondary">
							{PRIMARY_CTA.label}
						</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}
