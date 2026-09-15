import { CTA_EXPECTATION, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/content/site.js";
import { buttonVariants } from "@/ui/components/Button.js";
import { Breadcrumbs } from "@/ui/components/Breadcrumbs.js";
import { HeroFold } from "@/ui/components/HeroFold.js";
import { contact } from "@/content/contact.js";
import { PageMeta } from "@/seo/PageMeta.js";
import { breadcrumb_json_ld } from "@/seo/jsonLd.js";
import { cn } from "@/lib/cn";

export function ContactPage() {
	return (
		<>
			<PageMeta
				meta={contact.meta}
				ogImage={contact.heroImage.src}
				jsonLd={breadcrumb_json_ld(contact.meta, [])}
			/>
			<HeroFold
				image={contact.heroImage}
				h1={contact.h1}
				support={contact.lead}
				compact
				showCtaExpectation={false}
			/>
			<Breadcrumbs
				items={[
					{ name: "Home", path: "/" },
					{ name: "Contact" },
				]}
			/>
			<section className="section-pad bg-surface">
				<div className="site-container">
					<div className="max-w-measure">
					<p className="text-lg text-foreground/90">
						Reach out by email or phone to schedule a free consultation and see if
						we are a good fit. {CTA_EXPECTATION}
					</p>
					<dl className="mt-10 flex flex-col gap-6">
						<div>
							<dt className="text-sm tracking-wide text-muted-foreground">
								Email
							</dt>
							<dd className="mt-1">
								<a
									href={EMAIL_HREF}
									className="font-display text-2xl text-foreground underline decoration-accent underline-offset-4 transition-colors duration-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									{EMAIL}
								</a>
							</dd>
						</div>
						<div>
							<dt className="text-sm tracking-wide text-muted-foreground">
								Phone
							</dt>
							<dd className="mt-1">
								<a
									href={PHONE_HREF}
									className="font-display text-2xl text-foreground underline decoration-accent underline-offset-4 transition-colors duration-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								>
									{PHONE}
								</a>
							</dd>
						</div>
					</dl>
					<div className="mt-10">
						<a
							href={EMAIL_HREF}
							className={cn(buttonVariants({ variant: "default", size: "default" }))}
						>
							Book a Consultation
						</a>
						<p className="mt-3 text-sm text-muted-foreground">{CTA_EXPECTATION}</p>
					</div>
					</div>
				</div>
			</section>
		</>
	);
}
