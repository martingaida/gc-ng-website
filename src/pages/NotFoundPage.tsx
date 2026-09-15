import { Link } from "react-router-dom";

import { ButtonLink } from "@/ui/components/ButtonLink.js";
import { PageMeta } from "@/seo/PageMeta.js";

export function NotFoundPage() {
	return (
		<>
			<PageMeta
				meta={{
					title: "Page not found — Natalie Gaida | LMFT",
					description: "The page you requested could not be found.",
					path: "/404",
				}}
			/>
			<section className="section-pad bg-background">
				<div className="site-container max-w-measure py-24">
					<h1 className="font-display text-5xl font-medium">Page not found</h1>
					<p className="mt-4 text-muted-foreground">
						That URL does not match a page on this site. Head home or book a
						consultation.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<ButtonLink to="/">Home</ButtonLink>
						<ButtonLink to="/contact" variant="secondary">
							Contact
						</ButtonLink>
						<Link to="/about" className="self-center underline decoration-accent">
							About Natalie
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
