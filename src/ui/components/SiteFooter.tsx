import { Link } from "react-router-dom";

import {
	BRAND_SHORT,
	EMAIL,
	EMAIL_HREF,
	FOOTER_COPYRIGHT,
	NAV,
	PHONE,
	PHONE_HREF,
} from "@/content/site.js";

export function SiteFooter() {
	const service_links =
		NAV.find((item) => item.children)?.children ?? [];

	return (
		<footer className="border-t border-border bg-surface-pale">
			<div className="site-container section-pad flex flex-col gap-10 py-16 md:flex-row md:justify-between">
				<div className="max-w-md flex flex-col gap-3">
					<p className="font-display text-3xl font-medium text-foreground">
						{BRAND_SHORT}
					</p>
					<p className="text-muted-foreground">
						Couples therapy in Needham, MA and virtually throughout Massachusetts.
					</p>
					<p className="text-muted-foreground">
						<a className="underline decoration-accent underline-offset-4 hover:text-primary" href={EMAIL_HREF}>
							{EMAIL}
						</a>
						<br />
						<a className="underline decoration-accent underline-offset-4 hover:text-primary" href={PHONE_HREF}>
							{PHONE}
						</a>
					</p>
				</div>

				<div className="flex flex-wrap gap-12">
					<div>
						<p className="mb-3 font-display text-xl">Explore</p>
						<ul className="flex flex-col gap-2 text-muted-foreground">
							<li>
								<Link to="/" className="hover:text-primary">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="hover:text-primary">
									About
								</Link>
							</li>
							<li>
								<Link to="/contact" className="hover:text-primary">
									Contact
								</Link>
							</li>
							<li>
								<Link to="/blog-3" className="hover:text-primary">
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<p className="mb-3 font-display text-xl">Services</p>
						<ul className="flex flex-col gap-2 text-muted-foreground">
							{service_links.map((link) =>
								link.href ? (
									<li key={link.href}>
										<Link to={link.href} className="hover:text-primary">
											{link.label}
										</Link>
									</li>
								) : null,
							)}
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
				{FOOTER_COPYRIGHT}
			</div>
		</footer>
	);
}
