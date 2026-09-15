import { Link } from "react-router-dom";

import type { ServiceCard, ServiceTeaser } from "@/content/types.js";
import { ResponsiveImage } from "@/ui/components/ResponsiveImage.js";

type ServiceCardsProps = {
	id?: string;
	title?: string;
	cards: readonly ServiceCard[];
};

export function ServiceCards({ id, title, cards }: ServiceCardsProps) {
	return (
		<section id={id} className="section-pad texture-paper bg-surface-pale">
			<div className="site-container">
				{title ? (
					<h2 className="mb-10 font-display text-4xl font-medium md:text-5xl">
						{title}
					</h2>
				) : null}
				<ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{cards.map((card) => (
						<li key={card.href}>
							<Link
								to={card.href}
								className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface transition-[color,border-color,transform] duration-hover ease-brand hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99]"
							>
								<ResponsiveImage
									image={card.image}
									className="aspect-[4/3] w-full object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
								/>
								<div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
									<h3 className="font-display text-2xl font-medium">{card.title}</h3>
									<p className="text-muted-foreground">{card.description}</p>
									<span className="mt-auto text-foreground underline decoration-accent underline-offset-4 transition-colors duration-hover group-hover:text-primary group-hover:decoration-primary">
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
				<h2 className="mt-2 font-display text-4xl font-medium md:text-5xl">
					{title}
				</h2>
				{image ? (
					<ResponsiveImage
						image={image}
						className="mt-8 max-h-72 w-full rounded-media object-cover"
						sizes="(max-width: 1024px) 100vw, 82.5rem"
					/>
				) : null}
				<ul className="mt-10 grid gap-8 md:grid-cols-2">
					{items.map((item) => (
						<li key={item.href}>
							<Link
								to={item.href}
								className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-[color,border-color,transform] duration-hover ease-brand hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99] md:p-8"
							>
								<h3 className="font-display text-2xl font-medium">{item.title}</h3>
								<p className="mt-3 text-muted-foreground">{item.description}</p>
								<ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
									{item.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-2">
											<span aria-hidden="true">∞</span>
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
