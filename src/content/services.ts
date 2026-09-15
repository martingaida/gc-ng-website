import { image_ref } from "./images.js";
import type { ServiceCard, ServiceTeaser } from "./types.js";


export const SERVICE_PATHS = {
	affair: "/infidelity-affair-recovery",
	parenting: "/parenting-alignment-therapy",
	discernment: "/discernment-therapy",
	desire: "/sexless-marriage",
	communication: "/communication-conflict-therapy",
	polyamory: "/polyamory-therapy",
} as const;

export const HOME_SERVICE_CARDS: readonly ServiceCard[] = [
	{
		title: "Affair Recovery",
		description:
			'For couples after an affair, tired of "rebuilding trust" as a vague idea. I\'ll tell you plainly what that actually takes.',
		href: SERVICE_PATHS.affair,
		image: image_ref(
			"adb760c0-49f--couple-kitchen-embrace-affair-recovery-therapy-needham-ma.webp",
			"Woman kissing her partner's head while he sits at the kitchen table, a quiet moment of reconnection representing affair recovery therapy for couples in Needham, MA",
		),
	},
	{
		title: "Discernment Therapy",
		description:
			"For couples where one of you isn't sure this should continue. A short, structured process built to get you a real decision.",
		href: SERVICE_PATHS.discernment,
		image: image_ref(
			"f8761ca6-cfc--couple-reading-together-discernment-therapy-needham-ma.webp",
			"Couple sitting together each reading their own book, representing individual reflection within discernment therapy for couples in Needham, MA",
		),
	},
	{
		title: "Communication & Conflict",
		description:
			"For couples who've tried the scripts and still end up in the same fight. I'll name the pattern underneath the words.",
		href: SERVICE_PATHS.communication,
		image: image_ref(
			"9edf1011-2b6--couple-laughing-together-communication-conflict-therapy-needham-ma.webp",
			"Couple standing close and laughing together outdoors, representing open communication in couples therapy in Needham, MA",
		),
	},
	{
		title: "Desire & Intimacy",
		description:
			"For couples navigating different levels of desire, ready to feel wanted by each other again, not just accommodated.",
		href: SERVICE_PATHS.desire,
		image: image_ref(
			"b88e6633-48c--couple-sitting-close-beach-desire-intimacy-therapy-needham-ma.webp",
			"Couple sitting close together on the beach looking at each other, representing renewed desire and intimacy in couples therapy in Needham, MA",
		),
	},
	{
		title: "Parenting Alignment",
		description:
			"For couples who are fine with each other until a parenting decision lands on the table, then suddenly aren't.",
		href: SERVICE_PATHS.parenting,
		image: image_ref(
			"a8213d33-6cf--father-tossing-baby-outdoors-parenting-alignment-therapy-needham-ma.webp",
			"Couple embracing while holding baby shoes outside their home, representing parenting alignment therapy for couples in Needham, MA",
		),
	},
	{
		title: "Polyamory Therapy",
		description:
			"For couples and polycules who want affirming support with agreements, jealousy, and a structure that fits — not a monogamy-first script.",
		href: SERVICE_PATHS.polyamory,
		image: image_ref(
			"1d851a60-4ec--couples-therapy-needham.webp",
			"Couples therapy in Needham, MA supporting polyamory-affirming work",
		),
	},
] as const;

export const TEASER_AFFAIR: ServiceTeaser = {
	title: "Affair Recovery",
	description:
		"For couples working to rebuild trust and understand what actually happened after infidelity, ready to move toward something more honest.",
	href: SERVICE_PATHS.affair,
	bullets: [
		"Get steady again before the hardest conversations",
		"Understand what the affair was actually about",
		"Handle disclosure carefully, without a slow drip",
		"Build something more honest than before",
	],
};

export const TEASER_COMMUNICATION: ServiceTeaser = {
	title: "Communication & Conflict",
	description:
		"For couples who love each other deeply but keep having the exact same fight over and over, and are finally ready to break the pattern for good",
	href: SERVICE_PATHS.communication,
	bullets: [
		"Break the cycle of having the same fight",
		"Learn to stay steady during hard conversations",
		"Understand what's actually driving the conflict",
		"Rebuild the feeling of being on one team",
	],
};

export const TEASER_DESIRE: ServiceTeaser = {
	title: "Desire & Intimacy Mismatch",
	description:
		"For couples navigating different levels of desire, and ready to feel wanted by each other again.",
	href: SERVICE_PATHS.desire,
	bullets: [
		"Talk honestly about sex without judgment",
		"Understand what's really behind the mismatch",
		"Rebuild connection without pressure or a script",
		"Feel desired again, not just accommodated",
	],
};

export const TEASER_DISCERNMENT: ServiceTeaser = {
	title: "Discernment Therapy",
	description:
		"For couples where one of you isn't sure this relationship should continue, and you need clarity before deciding anything else.",
	href: SERVICE_PATHS.discernment,
	bullets: [
		"Get clarity on whether to stay or leave",
		"See what's kept you stuck between the two",
		"Work through a structured, time-limited process",
		"Make the decision instead of circling it",
	],
};

export const TEASER_PARENTING: ServiceTeaser = {
	title: "Parenting Alignment",
	description:
		"For couples who are solid with each other but split the moment a parenting decision lands on the table.",
	href: SERVICE_PATHS.parenting,
	bullets: [
		"See the pattern you keep falling into",
		"Learn to align before you respond",
		"Set limits without slipping into harshness",
		"Repair in front of your kids, together",
	],
};
