import { image_ref } from "./images.js";
import { FEES_FAQ, SESSIONS_FAQ, VIRTUAL_NOTE } from "./site.js";
import {
	TEASER_AFFAIR,
	TEASER_DESIRE,
	TEASER_DISCERNMENT,
	TEASER_PARENTING,
} from "./services.js";
import type { ServicePageContent } from "./types.js";


export const communication = {
	meta: {
		title: "Communication & Conflict — Natalie Gaida | LMFT",
		description:
			"Communication and conflict therapy for couples in Needham, MA and across Massachusetts. Break the cycle of the same fight with a highly trained specialist.",
		path: "/communication-conflict-therapy",
	},
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	featureImage: image_ref(
		"5bc039d1-34e--couple-reconnecting-close-communication-conflict-therapy-needham-ma.webp",
		"Couple standing close with a tender hand to the face, representing repair and reconnection after conflict in couples therapy in Needham, MA",
	),
	accentImage: image_ref(
		"9c8ee77b-6c9--couples-therapy-needham-dusty-pink.webp",
		"Decorative dusty pink accent for couples therapy in Needham, MA",
	),
	kicker: "Break the cycle, not each other",
	h1: "Communication & Conflict Therapy in Needham, MA",
	lead: "You're not really fighting about the dishes, or the money, or who said what. You're fighting about the same thing you always fight about, just wearing different clothes this week. If that's where you are, here's what I want you to know: the fight itself isn't the problem, it's what's happening underneath it that never gets addressed. Couples who do this work don't just stop fighting, they learn what the fight was actually about, and how to repair fast enough that it doesn't calcify into resentment.",
	virtualNote: VIRTUAL_NOTE,
	arrivalTitle: "You may have arrived here if…",
	arrivalItems: [
		"You have the same fight, over and over, just with different words each time.",
		"One of you pushes to keep talking while the other shuts down or leaves the room.",
		"You've stopped bringing things up because it's not worth the blowup.",
		'A small disagreement turns into "you always" or "you never" before you know it.',
		"You're better at winning the argument than actually fixing anything.",
		"You want to feel like teammates again, not opponents keeping score.",
	],
	beforeAfter: {
		title: "Communication Therapy in Needham, MA Can Help",
		subtitle: "What if you could go from:",
		pairs: [
			{
				before: "Having the same fight in different clothes",
				after: "Actually getting underneath what it's about",
			},
			{
				before: "One of you chasing, the other shutting down",
				after: "Both staying present through hard conversations",
			},
			{
				before: "Complaints that go nowhere",
				after: "Requests your partner can actually act on",
			},
			{
				before: "Winning the argument",
				after: "Actually repairing the relationship",
			},
			{
				before: "Feeling like opponents keeping score",
				after: "Feeling like a team again",
			},
		],
	},
	steps: [],
	modalities: {
		title: "The Models I've Trained In, And When I Reach for Each One",
		intro:
			"I didn't pick one model and stop. I trained in all four of these, and in session I'm reaching for whichever one actually fits what's happening between you in that moment, not running you through a program.",
		image: image_ref(
			"3babe206-c6e--four-therapy-modalities-couple-embrace-rlt-gottman-pact-eft-needham-ma-jpg.webp",
			"Illustration of an embracing couple with four flowing ribbons representing the different therapy modalities, Relational Life Therapy, Gottman Method, PACT, and EFT, used in couples therapy with Natalie Gaida in Needham, MA",
		),
		items: [
			{
				title: "Relational Life Therapy (RLT)",
				body: "Is where most of my day-to-day work with conflict comes from. I trained directly with Terry Real, the founder of RLT, and its core move, catching a fight before one incident turns into a verdict on your partner's character, and turning complaints into requests your partner can actually meet, is the throughline in almost every session.",
			},
			{
				title: "Psychobiological Approach to Couple Therapy (PACT)",
				body: "Looks at what's happening in your body and nervous system in real time during a fight, not just what you're saying. When either of you moves into a pure fight, flight, or shutdown response, the goal shifts to helping you both come back to a calmer state before trying to solve anything.",
			},
			{
				title: "The Gottman Method",
				body: "Identifies the specific patterns that predict long-term breakdown, criticism, contempt, defensiveness, and shutting down, and teaches the specific antidote to each one. Identifies the fight patterns that predict breakdown and teaches the antidote to each one",
			},
			{
				title: "Emotionally Focused Therapy (EFT)",
				body: "Treats most conflict as a symptom of an underlying fear about the relationship itself, like feeling unwanted or unimportant to your partner. The work is slowing the fight down enough to get to that fear, so you're responding to what your partner actually needs instead of just the surface complaint.",
			},
		],
	},
	howHelp: {
		title: "How will Communication and Conflict Therapy Actually Help?",
		sections: [
			{
				title: "We turn complaints into requests.",
				body: 'Most complaints have a request buried inside them, and most couples never get to it. "You never help around here" is a complaint. "Could you take the trash out on Tuesdays without me asking" is a request your partner can actually act on. We work on catching yourself mid-complaint and finding the specific, doable ask underneath it, and on rewarding the effort you get instead of only noticing what\'s still missing.',
			},
			{
				title: "We look at what's actually driving the fight, not just the argument on the surface.",
				body: "The fight about money is rarely about money. Underneath most recurring conflicts is one of a few things: who has power and say in the relationship, how close or cared for you each feel, or whether you feel respected and seen by the other. We name which one is actually live in your relationship, so you stop refighting the surface version of it every time.",
			},
			{
				title: 'We build a real way to press pause, one that doesn\'t turn into stonewalling.',
				body: 'Walking away mid-fight usually makes things worse, not because taking space is wrong, but because it\'s rarely done in a way that says "I\'m coming back." We build a specific, scripted way to call a time-out that protects the relationship instead of abandoning it, along with what to actually do with that time so you come back calmer instead of more worked up.',
			},
			{
				title: "We protect your relationship from everything else pulling at it.",
				body: "Kids, work, extended family, even good intentions, can all quietly become what you turn to instead of each other. Part of this work is treating your relationship as genuinely first, not because everything else doesn't matter, but because a relationship that isn't protected as a priority erodes without either of you deciding that's what you wanted.",
			},
			{
				title: 'We use a structured process to repair, not just "talk it out."',
				body: "Talking it out often turns into relitigating who's right. Instead, we use a specific structure: what actually happened, the story you told yourself about it, what you felt, and what would genuinely help now. It sounds simple, but it's the difference between a conversation that spirals and one that actually lands somewhere.",
			},
		],
	},
	callout: {
		title: "Why conflict kills desire first",
		body: "Desire doesn't survive well in a war zone, even a quiet one. When you're keeping track of who apologized last, or bracing for round two of an old fight, wanting someone stops feeling safe. It's the same pattern I work with day to day, a complaint that never got turned into a request just sits there and calcifies, and desire is usually the first casualty. It's not that the attraction disappeared. Couples who learn to catch the fight before it turns into a verdict on each other almost always tell me the same thing afterward: they didn't just stop arguing, they started wanting each other again without noticing exactly when it came back.",
		image: image_ref(
			"a9af828d-fd8--couple-tangled-connection-line-desire-intimacy-therapy-needham-ma.webp",
			"Couple with a tangled connection line, representing how conflict affects desire and intimacy in couples therapy in Needham, MA",
		),
	},
	therapist: {
		kicker: "Meet your communication and conflict therapist",
		name: "Natalie Gaida LMFT",
		image: image_ref(
			"7f263f98-855--natalie-gaida-meet-your-therapist.webp",
			"Natalie Gaida, couples therapist specializing in sexless marriage therapy in Needham, MA",
		),
		paragraphs: [
			"Hi, I'm Natalie, a Licensed Marriage & Family Therapist. I blend Relational Life Therapy, the Gottman Method, EFT, and PACT to fit what your relationship actually needs.",
			"If you have the same fight on repeat, or one of you shuts down while the other keeps pushing, this space is for you.",
			"Communication is the most common thing couples tell me they want to work on, and it rarely means the same thing twice. For one couple it's the fighting. For another, it's the silence in between.",
			"You deserve to stop keeping score. You deserve to feel like teammates again. And you deserve an approach built around your relationship, not a one-size-fits-all script.",
		],
		aboutHref: "/about",
		aboutLabel: "More about Natalie",
	},
	faqKicker: "Get the answers you need",
	faqTitle: "Frequently Asked Questions:",
	faq: [
		{
			question:
				"We don't really yell, we just go quiet and shut down. Does this still apply to us?",
			answer:
				"Yes, actually this is one of the most common patterns I see. One partner pushes to talk while the other withdraws, and both people walk away feeling like the relationship is unsafe, just for different reasons. We work on what's underneath both the pursuing and the withdrawing.",
		},
		{
			question: 'It feels like one of us is always the "bad guy" in these fights. Is that just how it is?',
			answer:
				"No, and that pattern usually comes from how the fight gets told afterward, not from who's actually more at fault. We work on separating what actually happened from the story each of you is telling about it, so it stops defaulting to the same verdict every time.",
		},
		{
			question: "Is this about having more sex, or better sex?",
			answer:
				"Both, honestly. Understanding without any structure tends to fall apart under pressure, and scripts without understanding feel robotic. We use specific language and structure, because it works, but always in service of actually getting what's underneath the fight, not as a performance.",
		},
		{
			question: "What if we can't get through one conversation about this without it escalating?",
			answer:
				"That's exactly what we address first. We build a real way to pause and return to a hard conversation instead of either pushing through or avoiding it entirely, so you have a way to de-escalate before you ever get back to the actual issue.",
		},
		SESSIONS_FAQ,
		FEES_FAQ,
	],
	otherServicesKicker: "Other ways I can help",
	otherServicesTitle: "Other Services",
	otherServicesImage: image_ref(
		"79589d68-0c8--couple-virtual-therapy-session-communication-conflict-needham-ma.webp",
		"Couple on a telehealth video session with their therapist, working through a conversation together during virtual couples therapy in Needham, MA",
	),
	otherServices: [
		{
			title: "Desire & Intimacy",
			description:
				"For couples navigating different levels of desire, ready to feel wanted by each other again.",
			href: TEASER_DESIRE.href,
			bullets: TEASER_DESIRE.bullets,
		},
		TEASER_PARENTING,
		{
			...TEASER_DISCERNMENT,
			bullets: [
				"Get clarity on whether to stay or leave",
				"See what's keeping you stuck",
				"Work through a structured process",
				"Make the decision instead of circling it",
			],
		},
		{
			...TEASER_AFFAIR,
			bullets: [
				"Get steady before the hard conversations",
				"Understand what the affair was really about",
				"Handle disclosure without the slow drip",
				"Build something more honest than before",
			],
		},
	],
	closing: {
		kicker: "Ready to start communication and conflict therapy?",
		title: "Let's do it!",
		paragraphs: [
			"You don't have to keep having the same fight, and you don't have to figure out how to stop it alone.",
			"I work with couples in Needham and throughout Massachusetts. If you're ready to feel like a team again instead of opponents, let's talk.",
		],
	},
	closingAccentImage: image_ref(
		"ace28abc-d0a--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
} as const satisfies ServicePageContent;
