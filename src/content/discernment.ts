import { image_ref } from "./images.js";
import { FEES_FAQ, SESSIONS_FAQ, VIRTUAL_NOTE } from "./site.js";
import {
	TEASER_AFFAIR,
	TEASER_COMMUNICATION,
	TEASER_DESIRE,
	TEASER_PARENTING,
} from "./services.js";
import type { ServicePageContent } from "./types.js";


export const discernment = {
	meta: {
		title: "Discernment Therapy | Natalie Gaida, MA — Natalie Gaida | LMFT",
		description:
			"Discernment therapy for couples in Needham, MA and across Massachusetts. Get clarity on whether to stay or separate with a highly trained specialist.",
		path: "/discernment-therapy",
	},
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	featureImage: image_ref(
		"c5516d54-110--couple-difficult-conversation-discernment-therapy-needham.webp",
		"Couple holding hands during a difficult conversation, representing discernment therapy for couples deciding whether to stay together in Needham, MA",
	),
	accentImage: image_ref(
		"9c8ee77b-6c9--couples-therapy-needham-dusty-pink.webp",
		"Decorative dusty pink accent for couples therapy in Needham, MA",
	),
	kicker: "Clarity before you decide anything else",
	h1: "Discernment Therapy in Needham, MA",
	lead: "One of you isn't sure this relationship should continue. Maybe you both feel it, maybe just one of you does, quietly or not so quietly anymore. If that's where you are, here's what I want you to know: you don't have to decide everything today, and you don't have to pretend you're in the same place when you're not. What you need first is clarity, not pressure to stay or a push to leave. Couples who do this work walk away knowing, clearly, which path is actually theirs.",
	virtualNote: VIRTUAL_NOTE,
	arrivalTitle: "You may have arrived here if…",
	arrivalItems: [
		"One of you is leaning toward leaving and the other is leaning toward staying, and neither of you can talk about it without it turning into a fight.",
		"You're not sure you even want the same things anymore, but you haven't said that out loud.",
		'You\'ve been circling the same "should we stay or go" conversation for months without landing anywhere.',
		"You want a professional opinion, not just reassurance from friends who've already picked a side.",
		"You're scared that couples therapy means being forced to work on something you're not sure you want to save.",
		"You want to make this decision with clear eyes, not out of fear, guilt, or exhaustion.",
	],
	beforeAfter: {
		title: "Discernment Therapy in Needham, MA Can Help",
		subtitle: "What if you could go from:",
		pairs: [
			{
				before: "Circling the same stay-or-go conversation for months",
				after: "Actually knowing which path is yours",
			},
			{
				before: "Feeling like you have to pick a side in your own relationship",
				after: "Getting your own space to think clearly",
			},
			{
				before: 'Wondering if therapy means being forced to "work on it"',
				after: "A process that doesn't presume the outcome",
			},
			{
				before: "Staying stuck between two people who want different things",
				after: "A structured way to find out what's actually true",
			},
		],
	},
	steps: [
		{
			number: 1,
			title: "Get Honest About Where You Stand",
			body: "Get honest about where each of you actually stands, leaning in, leaning out, or somewhere between.",
		},
		{
			number: 2,
			title: "Getting Your Own Space",
			body: "Individual time to explore your side without managing the other's reaction.",
		},
		{
			number: 3,
			title: "Choose a Clear Path",
			body: "Choose one of three clear paths instead of staying stuck in the same unresolved question.",
		},
	],
	howHelp: {
		title: "How will we actually get through this?",
		sections: [
			{
				title: "We start by getting honest about where you each actually stand",
				body: "Most couples who come to me for this aren't both uncertain in the same way. Usually one of you is leaning toward ending it and the other is leaning toward saving it, or one of you is fully out and the other is still hoping. Naming that clearly, without pretending you're in the same place, is the first step.",
			},
			{
				title: "We're not doing couples therapy yet",
				body: "Traditional therapy asks both of you to commit to working on the relationship, and if one of you isn't there, that request itself becomes another fight. Discernment work is different. It doesn't ask you to decide anything yet. It asks you to get clear.",
			},
			{
				title: "You each get your own time in the room",
				body: "Alongside time together, I meet with each of you individually within the same session. The partner leaning out gets space to explore what's actually driving that, not just the complaint of the moment. The partner leaning in gets space to look honestly at their own part in how things got here.",
			},
			{
				title: "We work toward one of three paths, not a verdict from me",
				body: "Staying as you are, moving toward separation, or taking a structured period, typically around six months, where you pause any talk of divorce and both commit fully to seeing what's possible. I won't tell you which one is right. My job is to help you know, clearly, which one actually is.",
			},
			{
				title: "This is short, on purpose",
				body: "Discernment work usually runs a handful of sessions, not months. It isn't built to fix your relationship. It's built to get you unstuck enough to choose a path with your eyes open, whichever one that turns out to be.",
			},
		],
	},
	therapist: {
		kicker: "Meet your discernment therapist",
		name: "Natalie Gaida LMFT",
		image: image_ref(
			"7f263f98-855--natalie-gaida-meet-your-therapist.webp",
			"A young woman with long blonde hair, wearing a white top and pearl earrings, smiling outdoors in a sunny, wooded area.",
		),
		paragraphs: [
			"Hi, I'm Natalie, a Licensed Marriage & Family Therapist. I use Bill Doherty's Discernment Counseling model to help couples get clarity on whether to stay or separate.",
			"If you're not sure this relationship should continue, stuck in the same circling conversation, or unsure your partner even wants the same thing you do, this space is for you.",
			"You deserve clarity, not more circling. You deserve honesty about where you both stand. And you deserve to decide with your eyes open, not by default.",
		],
		aboutHref: "/about",
		aboutLabel: "More about Natalie",
	},
	faqKicker: "Get the answers you need",
	faqTitle: "Frequently Asked Questions:",
	faq: [
		{
			question: "What is discernment therapy, exactly?",
			answer:
				"It's short-term work for couples where one or both of you isn't sure the relationship should continue. Unlike traditional couples therapy, it doesn't ask you to commit to fixing things yet. It's built to help you get clear on one of three paths: staying as you are, moving toward separation, or taking a structured period to find out what's possible.",
		},
		{
			question: "What if only one of us wants to work on things?",
			answer:
				"That's actually the most common shape this takes, one of you leaning out and one leaning in. You don't need to be in the same place to start. Each of you gets individual time in session to be honest about where you actually stand.",
		},
		{
			question: "What if I'm the one who had the affair?",
			answer:
				"You're welcome here too. There's a real difference between shame and remorse, and it matters. Shame keeps you focused on yourself, on feeling like a terrible person, which doesn't actually help anyone. Remorse turns you outward: what did I do, what does my partner need from me now. I'll help you get from one to the other.",
		},
		{
			question: "How long does this take?",
			answer:
				"Discernment work is intentionally short, usually a handful of sessions, not months. If you both decide to move into a longer period of working on the relationship, that's a separate, deliberate next step, not something you're pulled into by default.",
		},
		SESSIONS_FAQ,
		FEES_FAQ,
	],
	otherServicesKicker: "Other ways I can help",
	otherServicesTitle: "Other Services",
	otherServicesImage: image_ref(
		"90ea479c-41b--ouple-embracing-beach-discernment-therapy-needham.webp",
		"Couple embracing at the beach at sunset, representing clarity and connection after discernment therapy in Needham, MA",
	),
	otherServices: [
		TEASER_AFFAIR,
		TEASER_COMMUNICATION,
		TEASER_DESIRE,
		TEASER_PARENTING,
	],
	closing: {
		kicker: "Ready for clarity?",
		title: "Let's do it!",
		paragraphs: [
			"You don't have to have this figured out alone, and you don't have to pretend you're further along than you are.",
			"I work with couples in Needham and throughout Massachusetts. If you're ready to get real clarity instead of staying stuck, let's talk.",
		],
	},
	closingAccentImage: image_ref(
		"0f359c78-0c2--couples-therapy-needham-terracotta.webp",
		"Decorative terracotta accent for couples therapy in Needham, MA",
	),
} as const satisfies ServicePageContent;
