import { image_ref } from "./images.js";
import { FEES_FAQ, SESSIONS_FAQ, VIRTUAL_NOTE } from "./site.js";
import {
	TEASER_COMMUNICATION,
	TEASER_DESIRE,
	TEASER_DISCERNMENT,
	TEASER_PARENTING,
} from "./services.js";
import type { ServicePageContent } from "./types.js";


export const affair = {
	meta: {
		title: "Affair Recovery Therapist | Natalie Gaida, MA — Natalie Gaida | LMFT",
		description:
			"Affair recovery therapy for couples in Needham and across Massachusetts. Work with a highly trained specialist to rebuild trust and reconnect after infidelity",
		path: "/infidelity-affair-recovery",
	},
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	featureImage: image_ref(
		"e24e9241-3a0--affair-recovery-couples-therapy-needham-ma.webp",
		"Woman looking up at her partner while holding his arm, a moment of tentative reconnection in affair recovery therapy, Needham, MA",
	),
	accentImage: image_ref(
		"9c8ee77b-6c9--couples-therapy-needham-dusty-pink.webp",
		"Decorative dusty pink accent for couples therapy in Needham, MA",
	),
	kicker: "Affair recovery that actually rebuilds trust",
	h1: "Infidelity Therapy in Needham, MA",
	lead: "Finding out about an affair doesn't feel like bad news. It feels like the floor giving out. If you're in the middle of that right now, here's what I want you to know: what you're feeling has a name and a shape, and most couples who go through this find their way to the other side of it. Roughly two out of three relationships survive infidelity, and a good number end up more honest and more connected than they were before.",
	virtualNote: VIRTUAL_NOTE,
	arrivalTitle: "You may have arrived here if…",
	arrivalItems: [
		"You found out about an affair and can't stop replaying the same questions, even though you know the answers won't actually make the pain stop.",
		"You're exhausted from managing your partner's pain, or your own, without feeling like you're getting anywhere.",
		"You're checking phones, timelines, and stories, and you hate that you've become someone who does that.",
		"You're the one who stepped outside the relationship, and you're desperate to actually repair the damage, not just avoid getting caught again.",
		"You want a straight answer on whether your relationship can survive this, not just reassurance.",
		"You want a therapist who won't ask you to pick a villain before you've even sat down.",
	],
	beforeAfter: {
		title: "Affair Recovery in Needham, MA Can Help",
		subtitle: "What if you could go from:",
		pairs: [
			{
				before: "Checking their phone every hour",
				after: "To trusting your own read on things again",
			},
			{
				before: "Walking on eggshells in every conversation",
				after: "Actually talking, even about the hard stuff",
			},
			{
				before: "Wondering if you'll ever feel normal again",
				after: "Having a relationship more honest than the one you had before",
			},
			{
				before: "Carrying this alone, or feeling like you're the only one trying",
				after: "Healing it together, with an actual plan.",
			},
		],
	},
	steps: [
		{
			number: 1,
			title: "Getting steady",
			body: "Both of you finding solid footing again before we tackle the hardest conversations ahead.",
		},
		{
			number: 2,
			title: "Understanding what actually happened",
			body: "Avoided intimacy, or a relationship that went quiet. Knowing which shapes real repair.",
		},
		{
			number: 3,
			title: "Building something new",
			body: "Couples who make it through rarely patch the old relationship. They build a different one.",
		},
	],
	howHelp: {
		title: "How will we actually get through this?",
		sections: [
			{
				title: "We treat this as both a trauma and grief",
				body: "Discovering an affair is genuinely traumatic, the ground you thought was solid gives out, and that needs to be stabilized before anything else happens. But underneath the trauma, there's also a grief: grief for the relationship you thought you had, for a version of your story that turns out not to have been true. Most people only expect to deal with one of those. Naming both means you're not confused when the anger settles and something that feels more like mourning shows up underneath it.",
			},
			{
				title: "We separate the deceit from the desire",
				body: "The secrecy and the broken agreement are never okay, and I won't ask either of you to pretend otherwise. But I am curious, alongside you, about what the affair was actually reaching for. Affairs aren't only a symptom of an unhappy relationship. Sometimes they show up in relationships that look, by every outward measure, quite good, because desire and love don't always run on the same track. Understanding that isn't an excuse. It's information about what actually needs rebuilding.",
			},
			{
				title: "We ask each of you the real questions, not the easy ones",
				body: 'For the partner who was hurt, the question underneath "how could you" is usually "do I actually want to stay, and why." For the partner who strayed, the question underneath the apology is "what was I looking for, and what does it say about me." Both are harder and more honest than guilt or outrage alone, and both have to be answered before real repair is possible.',
			},
			{
				title: "We handle disclosure carefully",
				body: "Not all at once and not in pieces. What tends to do the most damage isn't always the affair itself, it's the drip of new details surfacing weeks or months later. A full, honest accounting, given with care and the right support, protects your chances of healing far more than either total secrecy or an uncontrolled confession.",
			},
			{
				title: "We build toward a different relationship, not a repaired version of the old one",
				body: "Some couples come through this work with a marriage that's more honest, more awake, and closer than the one they had before the affair. That's not guaranteed, and it's not a silver lining I'll hand you to make this easier. But it's real, and it's part of why I don't just aim to help you survive this.",
			},
		],
	},
	therapist: {
		kicker: "Meet your affair recovery therapist",
		name: "Natalie Gaida LMFT",
		image: image_ref(
			"7f263f98-855--natalie-gaida-meet-your-therapist.webp",
			"A smiling woman with long blonde hair and pearl earrings outdoors in bright sunlight, blurred trees and green foliage in the background.",
		),
		paragraphs: [
			"Hi, I'm Natalie, a Licensed Marriage & Family Therapist. I use the work of Terry Real, the Gottman Method, and Esther Perel to help couples rebuild trust after infidelity.",
			"If you're deciding whether to stay, stuck on the same unanswered questions, or trying to understand what the affair was about, this space is for you.",
			'This work is personal. I\'ve seen how much pain gets flattened into "leave the cheater," when what\'s actually happening is far more complicated. My role isn\'t to hand you an answer, it\'s to help you find your own.',
			"You deserve the truth, even when it's hard. You deserve a say in what happens next. And you deserve a relationship built on honesty, not secrecy.",
		],
		aboutHref: "/about",
		aboutLabel: "More about Natalie",
	},
	faqKicker: "Get the answers you need",
	faqTitle: "Frequently Asked Questions:",
	faq: [
		{
			question: "Can our relationship survive this?",
			answer:
				"Most do. Survival isn't the ceiling, though. With the right work, many couples come out more honest and more emotionally connected than they were before the affair.",
		},
		{
			question: "How long does this take?",
			answer:
				"There's no fixed timeline, but healing after infidelity often has a similar shape to grief. The first weeks or months are the hardest, and things do get steadier from there, even though certain dates or reminders can bring a wave of feeling back years later. That's normal, not a sign something's wrong.",
		},
		{
			question: "What if I'm the one who had the affair?",
			answer:
				"You're welcome here too. There's a real difference between shame and remorse, and it matters. Shame keeps you focused on yourself, on feeling like a terrible person, which doesn't actually help anyone. Remorse turns you outward: what did I do, what does my partner need from me now. I'll help you get from one to the other.",
		},
		{
			question: "Do I have to forgive my partner?",
			answer:
				"No one has to do anything on a timeline that isn't theirs. What I can offer is a way through the anger and the questions that doesn't ask you to rush, and doesn't ask you to stay stuck there either. What often comes instead of a clean, final forgiveness is something steadier: trust that isn't naive anymore, the belief that you can hurt each other and still find your way back, rather than trust that assumes nothing bad will ever happen again.",
		},
		SESSIONS_FAQ,
		FEES_FAQ,
	],
	otherServicesKicker: "Other ways I can help",
	otherServicesTitle: "Other Services",
	otherServicesImage: image_ref(
		"9b3f3145-706--affair-recovery-couples-therapy-needham-ma-support.webp",
		"Close-up of a person's hands resting on their lap, with one hand clasped over the other, and a woman with black nail polish holding their hand. Two individuals are sitting together, one wearing a dark blazer and a light-colored shirt, and the other wearing a white dress.",
	),
	otherServices: [
		TEASER_COMMUNICATION,
		TEASER_DESIRE,
		TEASER_DISCERNMENT,
		TEASER_PARENTING,
	],
	closing: {
		kicker: "Ready to start affair recovery therapy?",
		title: "Let's do it!",
		paragraphs: [
			"The work isn't really about settling what one of you did to the other. It's about what happened to both of you, and how you're going to change in the face of it, together.",
			"I work with couples in Needham and throughout Massachusetts. If you're ready to stop carrying this alone, let's talk.",
		],
	},
	closingAccentImage: image_ref(
		"0f359c78-0c2--couples-therapy-needham-terracotta.webp",
		"Decorative terracotta accent for couples therapy in Needham, MA",
	),
} as const satisfies ServicePageContent;
