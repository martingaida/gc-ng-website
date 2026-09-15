import type { FaqItem } from "@/content/types.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { CTA_EXPECTATION, PRIMARY_CTA } from "@/content/site.js";

type FaqListProps = {
	kicker?: string;
	title?: string;
	items: readonly FaqItem[];
	showCta?: boolean;
};

export function FaqList({
	kicker = "Get the answers you need",
	title = "Frequently asked questions",
	items,
	showCta = true,
}: FaqListProps) {
	return (
		<section className="section-pad bg-surface">
			<div className="site-container">
				<div className="max-w-3xl">
					<p className="text-sm tracking-wide text-muted-foreground">{kicker}</p>
					<h2 className="mt-2 font-display text-4xl font-medium text-pretty md:text-5xl">
						{title}
					</h2>
					<div className="mt-10 flex flex-col divide-y divide-border border-y border-border">
						{items.map((item) => (
							<details key={item.question} className="group py-5">
								<summary className="cursor-pointer list-none rounded-control font-display text-2xl marker:content-none transition-opacity duration-hover ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-90 [&::-webkit-details-marker]:hidden">
									<span className="flex items-start justify-between gap-4">
										{item.question}
										<span
											aria-hidden
											className="mt-1 text-accent transition-transform duration-hover ease-brand group-open:rotate-45"
										>
											+
										</span>
									</span>
								</summary>
								<div className="mt-4 flex flex-col gap-4 text-foreground/90">
									<p>{item.answer}</p>
									{item.afterword ? (
										<>
											<p>{item.afterword.body}</p>
											<ul className="flex flex-col gap-2 pl-5">
												{item.afterword.bullets.map((bullet) => (
													<li key={bullet} className="list-disc">
														{bullet}
													</li>
												))}
											</ul>
										</>
									) : null}
								</div>
							</details>
						))}
					</div>
					{showCta ? (
						<div className="mt-10">
							<ButtonLink to={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</ButtonLink>
							<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
}
