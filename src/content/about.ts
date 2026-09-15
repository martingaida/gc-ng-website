import { image_ref } from "./images.js";
import { HOME_SERVICE_CARDS } from "./services.js";
import { PRIMARY_CTA, VIRTUAL_NOTE } from "./site.js";
import type { PageMeta, ServiceCard, ValueItem } from "./types.js";


export const about_meta: PageMeta = {
	title: "About — Natalie Gaida | LMFT",
	description:
		"Meet Natalie Gaida, LMFT, a highly trained couples therapist in Needham, MA, serving couples virtually across Massachusetts.",
	path: "/about",
};

export const about = {
	meta: about_meta,
	heroImage: image_ref(
		"3a7f385c-d1a--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	kicker: "Meet Natalie",
	h1: "Couples Therapist in Needham, MA",
	leadParagraphs: [
		"Maybe you've tried therapy before and it didn't stick, tools that sounded good in the room, but fell apart at the first real fight, the next long stretch of silence, or the next parenting decision you couldn't agree on. Maybe trust got broken and you don't know if it can be rebuilt, or you're not even sure this relationship should continue. Or maybe you've never actually talked to a therapist about any of it.",
		"Here's what I've found: anyone can read a book on communication, or Google their way through a parenting disagreement. The problem is the negative cycle you've been running for years, whatever shape it takes for you: the same fight on repeat, slowly drifting into roommates who barely touch, secrecy that turned into something bigger, or two people who love each other but keep hitting the same wall. I help you find that cycle and interrupt it, so you can build something that actually works for the two of you.",
		"I'm Natalie, a couples therapist working with partners ready to figure out what the heck is going on, whether that's rebuilding trust, breaking a conflict pattern, reconnecting in the bedroom, getting aligned as parents, gaining clarity about whether to stay, or building a relationship structure outside the default script. Wherever you're starting from, the goal is the same: finding your way back to each other.",
	],
	portrait: image_ref(
		"ee122516-cf1--natalie-gaida-couples-therapist-needham-ma.webp",
		"Natalie Gaida, licensed marriage and family therapist in Needham, MA",
	),
	cta: PRIMARY_CTA,
	accentImage: image_ref(
		"be115b8d-e45--couples-therapy-needham-terracotta.webp",
		"Decorative terracotta accent for couples therapy in Needham, MA",
	),
	whyTitle: "Why I do this work…",
	whyParagraphs: [
		"I come from a European background, and I grew up around a certain kind of bluntness, the kind that says exactly what it sees instead of softening it into something vague. Somewhere along the way I realized that bluntness, when it comes from care instead of criticism, is actually one of the most loving things a person can offer someone. That's the therapist I've become. I'll tell you what I see, clearly, because I respect you and your relationship too much to talk around it.",
		"I also hold myself to one standard every single session: it needs to be the best use of your time, and you need to walk away with exactly what you came in for. Not a vague sense that you talked about your problems. Real movement, every time.",
		"What I can tell you is this: the couples who do this work well aren't the ones with the fewest problems. They're the ones who finally got matched with the right tools for their specific relationship, and who were willing to look at the part of themselves that didn't want to use those tools in the first place. That's the part I never get tired of watching happen, whether it's a couple rebuilding after an affair, two parents who can't agree on bedtime, partners trying to figure out if they should stay together, or a couple building an open relationship that actually works for both of them.",
	],
	valuesIcon: image_ref(
		"b751953b-04e--natalie-gaida-overlapping-circles-icon.webp",
		"Overlapping circles icon representing Natalie's therapy values",
	),
	valuesTitle: "My values as a therapist",
	values: [
		{
			title: "Steadiness",
			body: "Even in your hardest conversation, I stay grounded so neither of you has to hold the whole room alone.",
		},
		{
			title: "Non-Judgment",
			body: "Whatever you're bringing into the room, my job is to understand it, not rate it.",
		},
		{
			title: "Practicality",
			body: "You leave every session with something to actually do differently, not just something to think about.",
		},
		{
			title: "Directness",
			body: "I'll tell you what I see, clearly and kindly, instead of circling it for months.",
		},
		{
			title: "Collaboration",
			body: "You're the expert on your relationship. I'm the expert on how to change the pattern you're stuck in.",
		},
	] as const satisfies readonly ValueItem[],
	resonanceImage: image_ref(
		"38595012-25e--couple-forehead-kiss-affair-recovery-therapy-needham-ma.webp",
		"Couple sharing a forehead kiss, representing reconnection in couples therapy in Needham, MA",
	),
	resonanceItems: [
		"Maybe you've started to believe something is wrong with your relationship, that you've drifted too far, argued too much, or just aren't built to make this work the way other couples seem to.",
		"Maybe you're the one who keeps trying, and some part of you is starting to wonder if you're asking for too much, or if this is just what your relationship is now.",
		"Maybe you're not even sure what you want anymore, or you know but don't know how to ask for it.",
	],
	resonanceClose:
		"If that lands somewhere familiar, I'm glad you're here. Not because I have a formula that fixes it overnight, but because you don't need another list of tips you already know. You need to understand what's actually getting in the way of using them, whatever shape that takes for you. That's the real work, and it's where lasting change starts.",
	isTitle: "Couples Therapy with me is…",
	isItems: [
		"Direct. I'll tell you what I see, even when it's not what you expected to hear.",
		"Built around your specific relationship, not a one-size-fits-all program.",
		"A space where both of you are on the same team, even when you disagree with each other.",
		"Rooted in advanced, specialized training, not general talk therapy applied to couples.",
	],
	isNotTitle: "Couples Therapy with me is not…",
	isNotItems: [
		'Taking sides, or deciding who\'s "right."',
		"Handing you a worksheet and leaving you to figure out the rest.",
		"Assuming your relationship should look like anyone else's.",
		"Treating every fight like it's the same fight.",
		"Pressure to stay together, or to leave. That decision is always yours.",
	],
	galleryImages: [
		image_ref("39ac525a-8b4--couples-therapy-needham.webp", "Couples therapy in Needham, MA"),
		image_ref("a4222bd4-cb2--couples-therapy-needham.webp", "Couples therapy in Needham, MA"),
	],
	servicesKicker: "Services offered",
	services: HOME_SERVICE_CARDS as readonly ServiceCard[],
	closingAccent: image_ref(
		"0f359c78-0c2--couples-therapy-needham-terracotta.webp",
		"Decorative terracotta accent for couples therapy in Needham, MA",
	),
	closing: {
		kicker: "Ready to Stop Managing This Alone?",
		title: "Let's do it!",
		paragraphs: [
			"You've probably gotten good at managing this by yourself: keeping the peace, checking out before a fight gets worse, holding it together in front of your kids, or going through the motions instead of asking for what you actually want. That took real skill. It also cost you something.",
			"If you're ready to find out what it feels like to stop carrying it alone, whether that's rebuilding trust after an affair, breaking a conflict cycle, reconnecting physically, getting aligned as parents, gaining clarity about where your relationship is headed, or building a structure that actually fits the two of you, I'd be honored to help you build it.",
			"I work with couples in Needham and throughout Massachusetts, all sessions virtual.",
		],
		cta: PRIMARY_CTA,
		virtualNote: VIRTUAL_NOTE,
	},
} as const;
