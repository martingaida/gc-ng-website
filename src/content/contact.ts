import { image_ref } from "./images.js";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "./site.js";
import type { PageMeta } from "./types.js";


export const contact_meta: PageMeta = {
	title:
		"Contact | Get Support Today—Schedule Your Consultation — Natalie Gaida | LMFT",
	description:
		"Reach out to Natalie Gaida, LMFT, for therapy services including intimacy, conflict resolution, and relationship recovery. Schedule your free consultation today.",
	path: "/contact",
};

export const contact = {
	meta: contact_meta,
	heroImage: image_ref(
		"893255e6-f20--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	h1: "Let's Connect",
	lead: "Email or call to schedule a free consultation and see if we are a good fit.",
	email: EMAIL,
	emailHref: EMAIL_HREF,
	phone: PHONE,
	phoneHref: PHONE_HREF,
} as const;
