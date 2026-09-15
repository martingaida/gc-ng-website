import { Link } from "react-router-dom";

import type { ServiceCard, ServiceTeaser } from "@/content/types.js";
import { AccentMark } from "@/ui/components/AccentMark.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";

type ServiceCardsProps = {
	id?: string;
	title?: string;
	cards: readonly ServiceCard[];
};

export function ServiceCards({ id, title, cards }: ServiceCardsProps) {
	return (
		<section id={id} className="section-pad bg-surface">
			<div className="site-container">
				{title ? (
					<h2 className="mb-12 max-w-measure font-display text-4xl font-medium md:text-5xl">
						{title}
					</h2>
				) : null}
				<ul className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-12">
					{cards.map((card) => (
						<li key={card.href}>
							<Link
								to={card.href}
								className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
							>
								<div className="overflow-hidden rounded-media">
									<ResponsiveImage
										image={card.image}
										className="aspect-[4/3] w-full object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
									/>
								</div>
								<div className="flex flex-1 flex-col gap-3 pt-5">
									<h3 className="font-display text-2xl font-medium transition-colors duration-hover group-hover:text-primary">
										{card.title}
									</h3>
									<p className="text-foreground/90">{card.description}</p>
									<span className="mt-auto pt-1 text-foreground underline decoration-accent underline-offset-4 transition-colors duration-hover group-hover:text-primary group-hover:decoration-primary">
										Learn more →
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

type ServiceTeasersProps = {
	kicker?: string;
	title: string;
	image?: { src: string; alt: string; width?: number; height?: number };
	items: readonly ServiceTeaser[];
};

export function ServiceTeasers({
	kicker,
	title,
	image,
	items,
}: ServiceTeasersProps) {
	return (
		<section className="section-pad bg-background">
			<div className="site-container">
				{kicker ? (
					<p className="text-sm tracking-wide text-muted-foreground">{kicker}</p>
				) : null}
				<h2 className="mt-2 max-w-measure font-display text-4xl font-medium md:text-5xl">
					{title}
				</h2>
				{image ? (
					<ResponsiveImage
						image={image}
						className="mt-8 max-h-72 w-full rounded-media object-cover"
						sizes="(max-width: 1024px) 100vw, 82.5rem"
					/>
				) : null}
				<ul className="mt-12 grid gap-10 md:grid-cols-2">
					{items.map((item) => (
						<li key={item.href} className="border-t border-border pt-6">
							<Link
								to={item.href}
								className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
							>
								<h3 className="font-display text-2xl font-medium transition-colors duration-hover group-hover:text-primary">
									{item.title}
								</h3>
								<p className="mt-3 text-foreground/90">{item.description}</p>
								<ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
									{item.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-3">
											<AccentMark />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
								<span className="mt-5 inline-block underline decoration-accent underline-offset-4 transition-colors duration-hover group-hover:text-primary group-hover:decoration-primary">
									Get started →
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
