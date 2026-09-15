import { buttonVariants } from "@/ui/components/Button.js";
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
			/>
			<section className="section-pad bg-surface">
				<div className="site-container max-w-measure">
					<h2 className="font-display text-3xl font-medium md:text-4xl">
						Contact
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Reach out by email or phone to schedule a free consultation and see if
						we are a good fit.
					</p>
					<dl className="mt-10 flex flex-col gap-6">
						<div>
							<dt className="text-sm tracking-wide text-muted-foreground">
								Email
							</dt>
							<dd className="mt-1">
								<a
									href={contact.emailHref}
									className="font-display text-2xl text-foreground underline decoration-accent underline-offset-4 hover:text-primary"
								>
									{contact.email}
								</a>
							</dd>
						</div>
						<div>
							<dt className="text-sm tracking-wide text-muted-foreground">
								Phone
							</dt>
							<dd className="mt-1">
								<a
									href={contact.phoneHref}
									className="font-display text-2xl text-foreground underline decoration-accent underline-offset-4 hover:text-primary"
								>
									{contact.phone}
								</a>
							</dd>
						</div>
					</dl>
					<div className="mt-10">
						<a
							href={contact.emailHref}
							className={cn(buttonVariants({ variant: "default", size: "default" }))}
						>
							Email to book a consultation
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
