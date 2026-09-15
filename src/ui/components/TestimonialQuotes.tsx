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
	const [featured, ...rest] = items;

	return (
		<section
			className="section-pad texture-paper bg-surface-pale"
			aria-labelledby="testimonials-heading"
		>
			<div className="site-container">
				{logo ? (
					<ResponsiveImage
						image={logo}
						className="mb-8 h-14 w-auto"
						sizes="56px"
					/>
				) : null}
				<h2
					id="testimonials-heading"
					className="max-w-measure font-display text-4xl font-medium md:text-5xl"
				>
					{title}
				</h2>

				{featured ? (
					<figure className="mt-12 max-w-3xl">
						<blockquote className="editorial-pullquote border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-foreground md:pl-8 md:text-[2rem] md:leading-[1.35]">
							“{featured.quote.replace(/^["“]|["”]$/g, "")}”
						</blockquote>
						<figcaption className="mt-5 text-muted-foreground">
							— {featured.attribution}
						</figcaption>
					</figure>
				) : null}

				{rest.length > 0 ? (
					<ul className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
						{rest.map((item) => (
							<li key={`${item.attribution}-${item.quote.slice(0, 24)}`}>
								<blockquote className="editorial-pullquote border-l border-border pl-5 font-display text-xl leading-snug text-foreground md:text-2xl md:leading-[1.4]">
									“{item.quote.replace(/^["“]|["”]$/g, "")}”
								</blockquote>
								<p className="mt-4 text-sm text-muted-foreground">
									— {item.attribution}
								</p>
							</li>
						))}
					</ul>
				) : null}

				{showMiniCta ? (
					<div className="mt-14">
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
