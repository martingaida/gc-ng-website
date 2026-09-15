import type { Testimonial } from "@/content/types.js";

type TestimonialQuotesProps = {
	title?: string;
	logo?: { src: string; alt: string };
	items: readonly Testimonial[];
};

export function TestimonialQuotes({
	title = "Testimonials with couples' permission",
	logo,
	items,
}: TestimonialQuotesProps) {
	return (
		<section className="section-pad bg-background">
			<div className="site-container">
				{logo ? (
					<img
						src={logo.src}
						alt={logo.alt}
						className="mb-8 h-16 w-auto"
						loading="lazy"
					/>
				) : null}
				<p className="text-sm tracking-wide text-muted-foreground">{title}</p>
				<ul className="mt-10 flex flex-col gap-12">
					{items.map((item) => (
						<li key={`${item.attribution}-${item.quote.slice(0, 24)}`}>
							<blockquote className="max-w-3xl font-display text-2xl leading-snug text-foreground md:text-3xl">
								“{item.quote.replace(/^["“]|["”]$/g, "")}”
							</blockquote>
							<p className="mt-4 text-muted-foreground">— {item.attribution}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
