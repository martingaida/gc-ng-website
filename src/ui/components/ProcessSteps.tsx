import type { ProcessStep } from "@/content/types.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { CTA_EXPECTATION } from "@/content/site.js";

type ProcessStepsProps = {
	title: string;
	steps: readonly ProcessStep[];
	cta?: { label: string; href: string };
};

export function ProcessSteps({ title, steps, cta }: ProcessStepsProps) {
	return (
		<section className="section-pad bg-background">
			<div className="site-container">
				<h2 className="max-w-measure font-display text-4xl font-medium text-pretty md:text-5xl">
					{title}
				</h2>
				<ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
					{steps.map((step) => (
						<li
							key={step.number}
							className="flex flex-col gap-3 border-t border-border pt-6 md:border-t-0 md:border-l md:border-border md:pt-0 md:pl-6 first:md:border-l-0 first:md:pl-0"
						>
							<span className="font-display text-5xl leading-none text-accent">
								{String(step.number).padStart(2, "0")}
							</span>
							<h3 className="mt-2 font-display text-2xl font-medium">
								{step.title}
							</h3>
							<p className="text-foreground/90">{step.body}</p>
						</li>
					))}
				</ol>
				{cta ? (
					<div className="mt-14">
						<ButtonLink to={cta.href}>{cta.label}</ButtonLink>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
				) : null}
			</div>
		</section>
	);
}
