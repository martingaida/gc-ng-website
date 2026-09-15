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

const LOGO_SRC =
	"/images/93bb0e03-bb7--natalie-gaida-logo-couple-heart-icon.webp";

const FOOTER_LINK_CLASS =
	"transition-colors duration-hover ease-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const FOOTER_CONTACT_CLASS =
	"underline decoration-accent underline-offset-4 transition-colors duration-hover ease-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

export function SiteFooter() {
	const service_links =
		NAV.find((item) => item.children)?.children ?? [];

	return (
		<footer className="border-t border-border bg-surface-pale">
			<div className="site-container flex flex-col gap-12 py-16 md:flex-row md:justify-between md:py-20">
				<div className="flex max-w-md flex-col gap-4">
					<p className="flex items-center gap-3 font-display text-3xl font-medium text-foreground">
						<img
							src={LOGO_SRC}
							alt=""
							width={40}
							height={40}
							className="size-10 object-contain"
							decoding="async"
						/>
						{BRAND_SHORT}
					</p>
					<p className="text-muted-foreground">
						Couples therapy in Needham, MA and virtually throughout Massachusetts.
					</p>
					<p className="text-muted-foreground">
						<a className={FOOTER_CONTACT_CLASS} href={EMAIL_HREF}>
							{EMAIL}
						</a>
						<br />
						<a className={FOOTER_CONTACT_CLASS} href={PHONE_HREF}>
							{PHONE}
						</a>
					</p>
				</div>

				<div className="flex flex-wrap gap-12 md:gap-16">
					<div>
						<p className="mb-4 font-display text-xl">Explore</p>
						<ul className="flex flex-col gap-2.5 text-muted-foreground">
							<li>
								<Link to="/" className={FOOTER_LINK_CLASS}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className={FOOTER_LINK_CLASS}>
									About
								</Link>
							</li>
							<li>
								<Link to="/contact" className={FOOTER_LINK_CLASS}>
									Contact
								</Link>
							</li>
							<li>
								<Link to="/blog" className={FOOTER_LINK_CLASS}>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<p className="mb-4 font-display text-xl">Services</p>
						<ul className="flex flex-col gap-2.5 text-muted-foreground">
							{service_links.map((link) =>
								link.href ? (
									<li key={link.href}>
										<Link to={link.href} className={FOOTER_LINK_CLASS}>
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
