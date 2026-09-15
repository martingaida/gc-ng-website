import type { CtaLink, FaqItem, NavItem } from "./types.js";


export const SITE_URL =
	(typeof import.meta !== "undefined" &&
		import.meta.env &&
		import.meta.env.VITE_SITE_URL) ||
	"https://www.couplestherapyma.com";

export const BRAND_NAME = "Natalie Gaida, LMFT";
export const BRAND_SHORT = "Natalie Gaida | LMFT";

export const EMAIL = "therapy@nataliegaida.com";
export const PHONE = "774-421-9499";
export const PHONE_HREF = "tel:+17744219499";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const VIRTUAL_NOTE = "Virtual Therapy Services throughout Massachusetts";

export const PRIMARY_CTA: CtaLink = {
	label: "Book a free consultation",
	href: "/contact",
};

export const NAV: readonly NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{
		label: "Services",
		children: [
			{ label: "Desire & Intimacy", href: "/sexless-marriage" },
			{ label: "Communication & Conflict", href: "/communication-conflict-therapy" },
			{ label: "Affair Recovery", href: "/infidelity-affair-recovery" },
			{ label: "Parenting Alignment", href: "/parenting-alignment-therapy" },
			{ label: "Discernment Therapy", href: "/discernment-therapy" },
			{ label: "Polyamory Therapy", href: "/polyamory-therapy" },
		],
	},
	{ label: "Blog", href: "/blog-3" },
	{ label: "Contact", href: "/contact" },
];

export const FOOTER_COPYRIGHT = "Copyright 2026";

export const FEE_AMOUNT = "$300";
export const FEE_DURATION = "60-minute hour";
export const FEE_SUMMARY =
	"Sessions are $300 for a 60-minute hour. We typically meet every other week rather than weekly, which gives you real time between sessions to actually practice what we work on together, instead of showing up to talk about the same week you just lived.";

export const OON_INTRO =
	'I am currently considered to be an out of network mental health provider. I am happy to provide you a superbill each month to give to your insurance. Please check with your insurance about your out of network mental health benefits - many of my clients are able to get reimbursement from their insurance. Why you should consider working with an "out of network" therapist:';

export const OON_BULLETS = [
	"No limitations on sessions. We can meet for as long as you need without having to worry if insurance will cut us off, or end coverage, which could abruptly end your care.",
	"Allows me to offer you more flexible, personalized, and intentional care.",
	"Helps me keep your information completely confidential, without needing to share diagnosis or notes with insurance companies.",
	"Allows us to avoid surprise billing issues, which can lead to lapses in treatment.",
	"Lets us focus on what's best for you, not what insurance says is best for you!",
] as const;

export const SESSIONS_FAQ: FaqItem = {
	question: "What do sessions look like?",
	answer:
		"We meet over secure video, which means no commute and no waiting room, just focused time together at an hour that actually works for two full schedules. Most couples find it works as well as sitting across the room from each other, and some find it easier, since you're both already somewhere you feel at ease.",
};

export const FEES_FAQ: FaqItem = {
	question: "What are your fees, and do you accept insurance?",
	answer: FEE_SUMMARY,
	afterword: {
		body: OON_INTRO,
		bullets: OON_BULLETS,
	},
};

export function absolute_url(path: string): string {
	const base = SITE_URL.replace(/\/$/, "");
	if (!path || path === "/") {
		return base;
	}
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
