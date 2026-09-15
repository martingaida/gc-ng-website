import { image_ref } from "./images.js";
import { FEES_FAQ, SESSIONS_FAQ, VIRTUAL_NOTE } from "./site.js";
import {
	TEASER_AFFAIR,
	TEASER_COMMUNICATION,
	TEASER_DISCERNMENT,
	TEASER_PARENTING,
} from "./services.js";
import type { ServicePageContent } from "./types.js";


export const desire = {
	meta: {
		title: "Desire & Intimacy Therapy | Natalie Gaida, MA — Natalie Gaida | LMFT",
		description:
			"Desire and intimacy therapy for couples in Needham, MA and across Massachusetts. Reconnect and feel wanted again with a highly trained specialist.",
		path: "/sexless-marriage",
	},
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	featureImage: image_ref(
		"8b4df234-305--sexless-marriage-therapy-needham.webp",
		"Couple lying in bed together with foreheads touching, smiling, representing renewed intimacy and connection in couples therapy in Needham, MA",
	),
	accentImage: image_ref(
		"9c8ee77b-6c9--couples-therapy-needham-dusty-pink.webp",
		"Decorative dusty pink accent for couples therapy in Needham, MA",
	),
	kicker: "Feel wanted by each other again",
	h1: "Desire & Intimacy Therapy in Needham, MA",
	lead: "One of you wants sex more than the other, and by now it's less about sex and more about who has to ask, who feels rejected, and who feels pressured. If that's where you are, here's what I want you to know: desire isn't a fixed trait one of you has and the other lacks. It's something that can be understood, rebuilt, and reawakened, in the body and between you. Couples who do this work don't just close the gap. They find their way back to wanting each other.",
	virtualNote: VIRTUAL_NOTE,
	arrivalTitle: "You may have arrived here if…",
	arrivalItems: [
		"One of you wants sex more than the other, and it's turned into a source of resentment on both sides.",
		"You've stopped initiating because you're tired of being turned down, or tired of turning your partner down.",
		"Sex feels like a chore, a negotiation, or something you're managing rather than wanting.",
		"You used to feel desired and don't anymore, and you're not sure how to get that back.",
		"You freeze, disconnect, or check out during intimacy and don't fully understand why.",
		"You want to feel like lovers again, not just co-parents, roommates, or responsible adults.",
	],
	beforeAfter: {
		title: "Desire & Intimacy in Needham, MA Can Help",
		subtitle: "What if you could go from:",
		pairs: [
			{
				before: "Waiting to be in the mood before anything can happen",
				after: "Willingness that lets desire catch up",
			},
			{
				before: "Sex feeling like a performance",
				after: "Sex that's actually about pleasure and connection",
			},
			{
				before: "Feeling touched-out or shut down",
				after: "Understanding what your body is actually telling you",
			},
			{
				before: "One of you always initiating, the other always declining",
				after: "Both of you wanting to reconnect",
			},
			{
				before: "Talking about sex only when something's wrong",
				after: "Sexual conversations that bring you closer",
			},
			{
				before: "Feeling like the desire is just gone",
				after: "Knowing desire can be rebuilt, not just missed",
			},
		],
	},
	steps: [
		{
			number: 1,
			title: "Understanding the Gap",
			body: "Naming what's actually happening in your bodies and your relationship, not just the frequency.",
		},
		{
			number: 2,
			title: "Rebuilding Safety",
			body: "Learning what turns each of you on, and what shuts each of you down.",
		},
		{
			number: 3,
			title: "Reconnecting on Purpose",
			body: "Choosing each other again, with sexual conversations that build rather than blame.",
		},
	],
	howHelp: {
		title: "How will Desire and Intimacy Therapy Actually Help?",
		sections: [
			{
				title: "We separate desire from arousal.",
				body: "Desire is the wanting, arousal is what turns your body on, and they're not the same thing. Most couples assume that if one partner isn't spontaneously desiring sex, something's wrong. But desire doesn't have to strike first. For a lot of people, especially in long relationships, arousal comes first and desire catches up once the body is already engaged.",
			},
			{
				title: "We use somatic work, not just conversation.",
				body: "Your nervous system has a say in this before your mind does. Somatic sex therapy means we work with the body directly, what regulates you and what shuts you down in intimate moments, and build from there instead of pushing past it or only talking around it.",
			},
			{
				title: "We build willingness instead of waiting for desire.",
				body: "You don't have to be in the mood to start. Willingness is quieter than desire, it's just staying open to see where something goes, and it's often how desire actually shows back up.",
			},
			{
				title: "We get specific instead of vague.",
				body: 'Vague complaints, "we never have sex," "it\'s just boring," don\'t lead anywhere. We get precise about what each of you actually wants, what turns you on, what shuts you down, so the conversation can go somewhere instead of in circles.',
			},
			{
				title: "We treat this as reconnection, not a performance review.",
				body: "The goal isn't a certain frequency or a technique. It's two people finding their way back to actually wanting each other, at whatever pace that takes.",
			},
		],
	},
	therapist: {
		kicker: "Meet your desire and intimacy therapist",
		name: "Natalie Gaida LMFT",
		image: image_ref(
			"7f263f98-855--natalie-gaida-meet-your-therapist.webp",
			"Natalie Gaida, couples therapist specializing in sexless marriage therapy in Needham, MA",
		),
		paragraphs: [
			"Hi, I'm Natalie, a Licensed Marriage & Family Therapist. I draw on the work of Terry Real, Holly Richmond's somatic sex therapy training, and Esther Perel to help couples reconnect with desire.",
			"If you and your partner get along great but feel more like roommates than lovers, or you're carrying guilt and shame you've never said out loud, this space is for you.",
			"This work is personal. My husband and I got along so well we became roommates, and I let our intimacy quietly fade. It didn't fix itself, not until we did the work ourselves.",
			"You deserve more than managing the distance. You deserve to feel wanted, not just accommodated. And you deserve to find your way back to desire, together.",
		],
		aboutHref: "/about",
		aboutLabel: "More about Natalie",
	},
	faqKicker: "Get the answers you need",
	faqTitle: "Frequently Asked Questions:",
	faq: [
		{
			question: "One of us wants sex a lot more than the other. Is that a sign something's wrong?",
			answer:
				'Not necessarily. Desire differences are extremely common, and they\'re rarely about one person being "too much" or "too little." Usually it\'s about two different relationships to desire itself, spontaneous versus responsive, and once you understand which is which, the gap gets a lot less loaded.',
		},
		{
			question: "What if I don't feel desire at all anymore?",
			answer:
				"That's more common than you'd think, and it's rarely permanent. Desire often follows willingness and arousal rather than leading them. We start with what your body and nervous system actually need before we worry about wanting sex again.",
		},
		{
			question: "Is this about having more sex, or better sex?",
			answer:
				"Better, almost always. More sex that still feels like a chore doesn't solve anything. This work is about the quality of the connection, pleasure, presence, and actually wanting to be there, not hitting a number.",
		},
		{
			question: "What if one of us shuts down or checks out during intimacy?",
			answer:
				"That's worth taking seriously, not pushing past. We slow down and look at what your nervous system is doing in those moments, and build safety before anything else.",
		},
		{
			question: "Do we need to already be comfortable talking about sex?",
			answer:
				"No. Most couples aren't, and that's usually part of what brought you here. We build the ability to talk about this specifically and honestly, without it turning into a fight.",
		},
		SESSIONS_FAQ,
		FEES_FAQ,
	],
	otherServicesKicker: "Other ways I can help",
	otherServicesTitle: "Other Services",
	otherServicesImage: image_ref(
		"8871ad8f-203--loss-of-desire-therapy-needham.webp",
		"Two people lying on a bed near a large window with sheer curtains, one with arm extended, both appearing relaxed.",
	),
	otherServices: [
		{
			...TEASER_COMMUNICATION,
			description:
				"For couples who love each other but keep having the same fight, and are ready to finally break the pattern.",
		},
		TEASER_PARENTING,
		TEASER_DISCERNMENT,
		TEASER_AFFAIR,
	],
	closing: {
		kicker: "Ready to start desire and intimacy therapy?",
		title: "Let's do it!",
		paragraphs: [
			"You don't have to settle for managing the gap, or pretending it isn't there.",
			"I work with couples in Needham and throughout Massachusetts. If you're ready to feel like lovers again, let's talk.",
		],
	},
	closingAccentImage: image_ref(
		"ace28abc-d0a--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
} as const satisfies ServicePageContent;
