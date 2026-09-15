import { image_ref } from "./images.js";
import { SERVICE_PATHS } from "./services.js";
import { PRIMARY_CTA, VIRTUAL_NOTE } from "./site.js";
import type { PageMeta } from "./types.js";


/**
 * Stub page: source CMS duplicated Desire & Intimacy body onto this route.
 * Honest short copy from the route meta only — do not paste desire content.
 */
export const polyamory_meta: PageMeta = {
	title: "Polyamory — Natalie Gaida | LMFT",
	description:
		"Polyamory-affirming therapy for couples and polycules in Needham, MA and across Massachusetts. Build agreements, work with jealousy, and get support from a trained specialist.",
	path: "/polyamory-therapy",
};

export const polyamory = {
	meta: polyamory_meta,
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	kicker: "Therapy for you, your partner, and your partner's partner",
	h1: "Polyamory-Affirming Therapy in Needham, MA",
	lead:
		"Polyamory-affirming therapy for couples and polycules in Needham and across Massachusetts. Build clearer agreements, work with jealousy when it shows up, and get support from a trained specialist who won't ask you to fit a monogamy-first script.",
	virtualNote: VIRTUAL_NOTE,
	themes: [
		{
			title: "Agreements that actually fit",
			body: "Clarify what openness means for your relationship — boundaries, disclosure, time, and care — so you're not guessing under pressure.",
		},
		{
			title: "Jealousy without shame",
			body: "Treat jealousy as information worth working with, not proof that non-monogamy \"isn't for you.\"",
		},
		{
			title: "Specialist support",
			body: "Work with a couples therapist who takes polyamory and polycule dynamics seriously, not as a side note to \"traditional\" couples work.",
		},
	],
	relatedServices: [
		{
			title: "Desire & Intimacy",
			href: SERVICE_PATHS.desire,
			description: "When desire, arousal, and intimacy need their own focused work.",
		},
		{
			title: "Communication & Conflict",
			href: SERVICE_PATHS.communication,
			description: "When the same conflict pattern keeps showing up, whatever the structure.",
		},
	],
	closing: {
		kicker: "Ready to talk?",
		title: "Let's do it!",
		paragraphs: [
			"I work with couples and polycules in Needham and throughout Massachusetts. If you want affirming, structured support, let's start with a free consultation.",
		],
		cta: PRIMARY_CTA,
	},
} as const;
