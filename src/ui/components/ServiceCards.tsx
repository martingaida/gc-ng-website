import { Link } from "react-router-dom";

import type { ServiceCard, ServiceTeaser } from "@/content/types.js";

type ServiceCardsProps = {
	id?: string;
	title?: string;
	cards: readonly ServiceCard[];
};

export function ServiceCards({ id, title, cards }: ServiceCardsProps) {
	return (
		<section id={id} className="section-pad bg-surface-pale">
			<div className="site-container">
				{title ? (
					<h2 className="mb-10 font-display text-4xl font-medium md:text-5xl">
						{title}
					</h2>
				) : null}
				<ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{cards.map((card) => (
						<li
							key={card.href}
							className="overflow-hidden rounded-card border border-border bg-surface"
						>
							<img
								src={card.image.src}
								alt={card.image.alt}
								className="aspect-[4/3] w-full object-cover"
								loading="lazy"
							/>
							<div className="flex flex-col gap-3 p-6 md:p-8">
								<h3 className="font-display text-2xl font-medium">{card.title}</h3>
								<p className="text-muted-foreground">{card.description}</p>
								<Link
									to={card.href}
									className="text-foreground underline decoration-accent underline-offset-4 transition-colors duration-hover hover:text-primary hover:decoration-primary"
								>
									Learn more →
								</Link>
							</div>
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
	image?: { src: string; alt: string };
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
				<h2 className="mt-2 font-display text-4xl font-medium md:text-5xl">
					{title}
				</h2>
				{image ? (
					<img
						src={image.src}
						alt={image.alt}
						className="mt-8 max-h-72 w-full rounded-media object-cover"
						loading="lazy"
					/>
				) : null}
				<ul className="mt-10 grid gap-8 md:grid-cols-2">
					{items.map((item) => (
						<li
							key={item.href}
							className="rounded-card border border-border bg-surface p-6 md:p-8"
						>
							<h3 className="font-display text-2xl font-medium">{item.title}</h3>
							<p className="mt-3 text-muted-foreground">{item.description}</p>
							<ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
								{item.bullets.map((bullet) => (
									<li key={bullet}>∞ {bullet}</li>
								))}
							</ul>
							<Link
								to={item.href}
								className="mt-5 inline-block underline decoration-accent underline-offset-4 hover:text-primary"
							>
								Get started →
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
