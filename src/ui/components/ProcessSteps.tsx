import type { ProcessStep } from "@/content/types.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";

type ProcessStepsProps = {
	title: string;
	steps: readonly ProcessStep[];
	cta?: { label: string; href: string };
};

export function ProcessSteps({ title, steps, cta }: ProcessStepsProps) {
	return (
		<section className="section-pad bg-background">
			<div className="site-container">
				<h2 className="max-w-measure font-display text-4xl font-medium md:text-5xl">
					{title}
				</h2>
				<ol className="mt-12 grid gap-8 md:grid-cols-3">
					{steps.map((step) => (
						<li key={step.number} className="flex flex-col gap-3">
							<span className="font-display text-5xl text-accent">
								{String(step.number).padStart(2, "0")}
							</span>
							<h3 className="font-display text-2xl font-medium">{step.title}</h3>
							<p className="text-muted-foreground">{step.body}</p>
						</li>
					))}
				</ol>
				{cta ? (
					<div className="mt-12">
						<ButtonLink to={cta.href}>{cta.label}</ButtonLink>
					</div>
				) : null}
			</div>
		</section>
	);
}
