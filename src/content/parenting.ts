import { image_ref } from "./images.js";
import { FEES_FAQ, SESSIONS_FAQ, VIRTUAL_NOTE } from "./site.js";
import {
	TEASER_AFFAIR,
	TEASER_COMMUNICATION,
	TEASER_DESIRE,
	TEASER_DISCERNMENT,
} from "./services.js";
import type { ServicePageContent } from "./types.js";


export const parenting = {
	meta: {
		title: "Parenting Alignment Therapy | Natalie Gaida, MA — Natalie Gaida | LMFT",
		description:
			"Parenting alignment therapy for couples in Needham, MA and across Massachusetts. Get aligned as parents with a highly trained specialist.",
		path: "/parenting-alignment-therapy",
	},
	heroImage: image_ref(
		"1d851a60-4ec--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
	featureImage: image_ref(
		"090c50a1-4d9--natalie-gaida-parenting-alignment-therapist-needham-ma.webp",
		"A man holding a young girl, both smiling and laughing, in a cozy indoor setting.",
	),
	accentImage: image_ref(
		"9c8ee77b-6c9--couples-therapy-needham-dusty-pink.webp",
		"Decorative dusty pink accent for couples therapy in Needham, MA",
	),
	kicker: "Stop letting parenting pull you apart",
	h1: "Parenting Alignment in Needham, MA",
	lead: "You can be completely in sync as partners and still fall apart the second a parenting decision lands on the table. If that's where you are right now, here's what I want you to know: this isn't a sign your relationship is broken. It's usually a sign you're missing a shared system, not a shared value, and your kids have already found the gap between you. Couples who do this work don't just stop fighting about parenting, they come out feeling like a team again.",
	virtualNote: VIRTUAL_NOTE,
	arrivalTitle: "You may have arrived here if…",
	arrivalItems: [
		"You and your partner disagree on discipline, screens, or bedtime, and the same fight keeps happening in front of your kids.",
		'One of you has quietly become "the strict one" and the other "the soft one," and you can both feel the resentment building.',
		"Your child already knows exactly which parent to ask for which answer.",
		"You're undercutting each other without meaning to, and it's starting to feel like you're on different teams instead of the same one.",
		"You want to present a united front, but the two of you don't even agree in private.",
		"The tension between you as parents is starting to leak into your relationship as partners.",
	],
	beforeAfter: {
		title: "Parenting Alignment in Needham, MA Can Help",
		subtitle: "What if you could go from:",
		pairs: [
			{
				before: "Undercutting each other in front of the kids",
				after: "Reconvening privately, then giving one answer",
			},
			{
				before: 'Being locked into "the hard one" and "the soft one"',
				after: "Actually trading off, both of you feeling like a full parent again",
			},
			{
				before: "Your kid playing you against each other",
				after: "A team your kid can't find a gap in",
			},
			{
				before: "Silently resenting how your partner parents",
				after: "Actually saying what you need from each other, out loud",
			},
			{
				before: "Repeating your own upbringing on autopilot",
				after: "Choosing your response on purpose instead of running an old script",
			},
			{
				before: "A disagreement in front of the kids feeling like failure",
				after: "Letting them see you find your way back to each other",
			},
		],
	},
	steps: [
		{
			number: 1,
			title: "Name the Pattern",
			body: "We make the strict-one, soft-one pattern you've fallen into visible enough to catch it happening in real time.",
		},
		{
			number: 2,
			title: "Align Before You Respond",
			body: "You learn to step back and land on one answer together before either of you responds to your kid.",
		},
		{
			number: 3,
			title: "Build skills that stick",
			body: "You build the skills to set limits without harshness, understand your own instincts, and repair in front of your kids when you do disagree.",
		},
	],
	howHelp: {
		title: "How will Parenting Alignment Therapy Actually Help?",
		sections: [
			{
				title: "We name the pattern you're stuck in.",
				body: "Almost every couple I see on this has fallen into a version of the same split: one of you has become the strict one, the other has become the soft one, and you're each unconsciously reacting to the other's extreme rather than to your kid. The stricter one gets harder because the soft one feels like they're giving too much away. The soft one gets softer because the strict one feels too harsh. Neither of you chose this on purpose, but your kid has noticed it, and they live in the gap between you.",
			},
			{
				title: "We build a way to align before you respond, not after.",
				body: 'Once you can see the pattern, the fix isn\'t complicated, it\'s just hard to do without practice. Instead of one of you setting a limit and the other undercutting it in the moment, you learn to step back and land on one answer together before either of you says anything to your kid. That might mean a code word to signal "let\'s talk before we respond," or just getting comfortable saying "let me talk to your other parent and we\'ll get back to you."',
			},
			{
				title: "We work on setting limits without harshness.",
				body: 'There\'s a real difference between being firm and being harsh, and couples who didn\'t grow up with a good model for that difference often swing too far one way or the other. The version that actually works is empathizing with the feeling while still holding the limit on the behavior: "I understand you\'re furious about this, and you still don\'t get to slam the door." We practice what that sounds like for the specific things your kids actually do.',
			},
			{
				title: "We look at what your own childhood is teaching your nervous system to do.",
				body: "Your instincts as a parent didn't come from nowhere. If you grew up with harshness, some part of you may swing toward permissiveness to avoid repeating it, or toward harshness because it's the only script you were given. If your partner's instincts came from a completely different upbringing, that difference can look like incompatibility when it's really just two inherited scripts running into each other.",
			},
			{
				title: "We make room for repair, including in front of your kids.",
				body: "You don't have to agree on everything or handle every moment perfectly. What your kids actually need to see isn't a united front with no cracks, it's what happens after a crack shows up. If they see you two disagree, let them also see you find your way back to each other. That teaches them relationships survive conflict, a far more useful lesson than growing up believing conflict itself is dangerous.",
			},
		],
	},
	therapist: {
		kicker: "Meet your parenting alignment therapist",
		name: "Natalie Gaida LMFT",
		image: image_ref(
			"7f263f98-855--natalie-gaida-meet-your-therapist.webp",
			"Natalie Gaida, couples therapist specializing in parenting alignment therapy in Needham, MA",
		),
		paragraphs: [
			"Hi, I'm Natalie, a Licensed Marriage & Family Therapist. I use the work of Terry Real, the Gottman Method, and Stan Tatkin to help couples parent as one team.",
			"If you and your partner keep having the same fight about discipline or screens, or feel like your kid already knows the gap between you, this space is for you.",
			"This work is personal. I have a child myself, and I know firsthand how much that shook our relationship. We have the tools, so I teach what I've had to apply myself.",
			"You deserve to feel like a team again. You deserve to stop resenting how your partner parents. And you deserve kids who see you disagree and still find your way back to each other.",
		],
		aboutHref: "/about",
		aboutLabel: "More about Natalie",
	},
	faqKicker: "Get the answers you need",
	faqTitle: "Frequently Asked Questions:",
	faq: [
		{
			question: "We don't disagree about the big stuff. Why does this keep happening?",
			answer:
				"Most of this conflict isn't really about the specific decision, bedtime or screen time or how to handle a meltdown. It's about the daily flashpoints, and how you were each parented shapes your instincts more than you'd expect. We work underneath the specific fights to the pattern actually driving them.",
		},
		{
			question: "What if one of us is way stricter than the other?",
			answer:
				"That's the most common shape this takes, and it's rarely as simple as one of you being right and the other wrong. Often the strict one is compensating for feeling like the soft one gives in too easily, and the soft one is compensating for feeling like the strict one is too harsh. Once you're not each reacting to the other's extreme, you usually land somewhere steadier, together.",
		},
		{
			question: "Will we always have to agree before saying anything to our kids?",
			answer:
				"Not always, but for the repeated flashpoints, yes, that's actually the goal. Presenting one answer, even when you had a real disagreement about it five minutes earlier in private, is one of the fastest ways to stop a kid from working the gap between you.",
		},
		{
			question: "What if we're already separated or divorced?",
			answer:
				"This work still matters, maybe even more. You don't have to agree with your co-parent on everything, but you can still get aligned on how parenting works in your home.",
		},
		SESSIONS_FAQ,
		FEES_FAQ,
	],
	otherServicesKicker: "Other ways I can help",
	otherServicesTitle: "Other Services",
	otherServicesImage: image_ref(
		"3c1dd7c0-93d--parents-laughing-with-their-toddler-representing-couples-working-through-parenting-alignment-therapy-in-needham-ma.webp",
		"A happy family of three, including a man, woman, and a young child, are outdoors, smiling and hugging each other.",
	),
	otherServices: [
		{
			...TEASER_COMMUNICATION,
			description:
				"For couples who love each other but keep having the same fight, and are ready to finally break the pattern.",
		},
		TEASER_DESIRE,
		TEASER_DISCERNMENT,
		TEASER_AFFAIR,
	],
	closing: {
		kicker: "Ready to start parenting alignment therapy?",
		title: "Let's do it!",
		paragraphs: [
			"Your kids don't need you to agree on everything. They need to know the two of you are on the same team.",
			"I work with couples in Needham and throughout Massachusetts. If you're ready to stop parenting from two different playbooks, let's talk.",
		],
	},
	closingAccentImage: image_ref(
		"ace28abc-d0a--couples-therapy-needham.webp",
		"Couples therapy in Needham, MA",
	),
} as const satisfies ServicePageContent;
