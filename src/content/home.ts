import { image_ref } from "./images.js";
import { HOME_SERVICE_CARDS } from "./services.js";
import { FEES_FAQ, PRIMARY_CTA, VIRTUAL_NOTE } from "./site.js";
import type {
	FaqItem,
	ImageRef,
	PageMeta,
	ProcessStep,
	ServiceCard,
	Testimonial,
} from "./types.js";


export const home_meta: PageMeta = {
	title: "Natalie Gaida | LMFT | Rebuild Connection Today",
	description:
		"Experienced couples therapy in Needham, MA, with virtual options throughout Massachusetts. Rebuild trust, communication, and intimacy to strengthen your relationship.",
	path: "/",
};

export const home_hero = {
	/** Full-bleed hero photo (style-lock anchor asset). */
	secondaryImage: image_ref(
		"c35660a5-102--couples-therapy-needham.webp",
		"A person holding hands with another person across a table with coffee mugs and a vase of flowers near a window.",
	),
	h1: "Couples Therapy in Needham, MA",
	virtualNote: VIRTUAL_NOTE,
	promise: "Close the Gap. Come Back to Each Other",
	support: "Couples Therapy for Partners Ready to Rebuild Desire and Connection",
	cta: PRIMARY_CTA,
} as const;

export const home_unstuck = {
	kicker: "Couples therapy that actually works",
	title: "Get Unstuck, and Feel Like a Team Again",
	paragraphs: [
		"Most couples who reach out to me aren't in crisis, they're just tired. Tired of having the same fight, tired of feeling like roommates instead of partners, tired of wondering whether the distance between you is something you can fix or something you're stuck with. Maybe you've read the books, tried talking it out on your own, and you're still landing in the same place. That's not a sign your relationship is one of the ones that doesn't make it. It's usually a sign you're missing the right tools for exactly what's happening between you, not more effort, not more good intentions, but an approach actually built for your relationship. You don't need another list of communication tips you've already tried.",
		"You need someone who can see the actual pattern you're stuck in and help you build a way out of it together. That's what this work is. Not generic advice. A way back to each other that fits the two of you specifically.",
	],
} as const;

export const home_peace_cost = {
	title:
		"You're Choosing to Keep the Peace, Even When It's Costing You the Closeness You Actually Want",
	items: [
		"You have the same fight over and over, just about different things each time",
		"You feel more like co-parents or roommates than partners",
		"One of you isn't sure this relationship should continue",
		"Trust was broken, and you don't know how to rebuild it",
		"You want to feel wanted by each other again, not just functional",
	],
	cta: PRIMARY_CTA,
} as const;

export const home_meet = {
	kicker: "Meet Natalie Gaida, LMFT",
	title: "Couples Therapist in Needham, MA",
	image: image_ref(
		"318103e9-05d--natalie-gaida-couples-therapist-needham-ma.webp",
		"Natalie Gaida, LMFT, smiling outdoors, couples therapist serving Needham, MA and throughout Massachusetts",
	),
	virtualNote: VIRTUAL_NOTE,
	paragraphs: [
		"Hi, I'm Natalie. I help couples who are stuck in the same repeated fight, or who've started to feel more like roommates than partners, rebuild real trust and communication so they can feel like a team again, want each other without walking on eggshells, and build a relationship that actually fits who they are, not a generic script for what a relationship is supposed to look like.",
		"This work is personal to me. I don't believe most couples are broken, I believe they're missing the right tools for exactly what's happening between them, and that once they have those tools, real change happens fast. That belief shapes how I show up in the room: I'll tell you what I see, in a way that feels like I'm on your team the whole time.",
		"I believe in relationships where both people feel like partners again, not roommates, not opponents keeping score. Where hard conversations get easier instead of scarier, and where you both know exactly how to find your way back to each other, no matter what you're up against.",
	],
	aboutHref: "/about",
	aboutLabel: "More about me",
} as const;

export const home_services: readonly ServiceCard[] = HOME_SERVICE_CARDS;

export const home_testimonials_icon: ImageRef = image_ref(
	"93bb0e03-bb7--natalie-gaida-logo-couple-heart-icon.webp",
	"Illustration of two people holding a heart-shaped outline, with a smaller red heart inside, symbolizing love and connection.",
);

export const home_testimonials_kicker = "Testimonials with Couples' Permission";

/** Real client testimonials with initials. Vendor/placeholder quote omitted. */
export const home_testimonials: readonly Testimonial[] = [
	{
		quote:
			"Working with Natalie has truly been one of the best decisions we've made for our relationship. After being together for over 12 years, we felt stuck in the same cycles and patterns, especially when it came to physical intimacy and communication. She helped us slow down, look deeper, and explore the root causes instead of just focusing on the surface issues.",
		attribution: "A & A",
	},
	{
		quote:
			"Natalie is a gifted therapist. She has a way of getting to the root of the problem without offending either party. She taught us to communicate, rather than going around in circles repeating the same complaints.",
		attribution: "K & F",
	},
	{
		quote:
			"Natalie is a master at creating a space where both partners feel heard and supported, while also gently challenging us to grow. She helps identify patterns, reactions, and blind spots with clarity and compassion.",
		attribution: "A & S",
	},
	{
		quote:
			"Rather than letting us fall back into old habits, she encouraged us to stay curious, communicate openly, and truly work as a team. She helped us feel hopeful again and gave us practical ways to strengthen our relationship and intimacy.",
		attribution: "A & A",
	},
	{
		quote:
			"She uses RLT techniques, and recommends books and articles that are beneficial for our specific needs. She is compassionate, friendly, and able to keep a session light hearted when it might otherwise be tension filled. We highly recommend Natalie as a couples therapist.",
		attribution: "K & F",
	},
	{
		quote:
			"She took pauses during our sessions, truly processing what was being discussed and offering such insightful thoughts and suggestions. Anyone out there would be so incredibly lucky to work with Natalie, she is an absolute gem.",
		attribution: "A & Z",
	},
	{
		quote:
			"We found our sessions with Natalie to be invaluable. Natalie helped us to communicate better and to remember why we fell in love with each other in the first place. Natalie is very approachable and always made us feel comfortable.",
		attribution: "B & V",
	},
	{
		quote:
			"Natalie is someone we were both able to establish a rapport with quickly, which helped us open up and trust the process with her. She is friendly, kind, and open, in a way that makes the sessions feel less formal and more of a collaboration.",
		attribution: "C & K",
	},
	{
		quote:
			"Our communication greatly improved and we started to remember to spend more time enjoying each other's company and less on the demands of day to day life. It has made a wonderful difference in our relationship.",
		attribution: "C & K",
	},
	{
		quote:
			"We especially appreciated Natalie's quickness to introduce new strategies, always suggesting additional resources and encouraging exploration of concepts between sessions. We are truly grateful for the work we've done with Natalie.",
		attribution: "A & S",
	},
	{
		quote:
			"Couples therapy is something that often feels misunderstood, stigmatized. My husband and I worked with Natalie for around a year, and the growth we made in understanding each other was insurmountable.",
		attribution: "A & Z",
	},
];

export const home_why_wait = {
	kicker: "Why couples wait so long to get help",
	image: image_ref(
		"b3a8899d-4c9--couple-distracted-on-phones-disconnected-therapy-needham-ma.webp",
		"Couple sitting apart absorbed in their phones and laptop, representing emotional distance couples let build before seeking therapy in Needham, MA",
	),
	body: "Most couples wait years longer than they mean to. Not because the problem isn't real, but because it's hard to tell whether what you're going through is a phase, a rough patch, or something worth getting outside help for. By the time most couples reach out, they've usually tried talking it through themselves more than once, maybe read a book or two, and are starting to wonder if this is just what their relationship is now. It isn't. The couples who wait the longest usually aren't dealing with something more broken than everyone else, they're just missing a clear-eyed outside perspective and a specific plan, which is exactly what this work provides.",
} as const;

export const home_now_what = {
	kicker: "You don't have to figure this out on your own",
	title: "This all resonates. Now what?",
	steps: [
		{
			number: 1,
			title: "Book a free 30-minute consultation",
			body: "I offer a free 30-minute call so you can ask any questions about getting started. We can get to know each other and make sure you feel comfortable moving forward. Use any “Book a Consultation” button on the site — it opens your email app so you can request a time.",
		},
		{
			number: 2,
			title: "Schedule your first session",
			body: "We meet over secure video, no commute, no waiting room, just focused time at an hour that works for two full schedules, wherever you are in Massachusetts.",
		},
		{
			number: 3,
			title: "Start building something different",
			body: "You'll leave with an approach built around your relationship specifically, not a generic program, and a clear sense of what we're actually working toward together.",
		},
	] as const satisfies readonly ProcessStep[],
	cta: PRIMARY_CTA,
	accentImage: image_ref(
		"0f359c78-0c2--couples-therapy-needham-terracotta.webp",
		"Decorative terracotta accent for couples therapy in Needham, MA",
	),
} as const;

export const home_faq = {
	kicker: "Get the answers you need",
	title: "Frequently Asked Questions:",
	items: [
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
		{
			question: "What do sessions look like?",
			answer:
				"We meet over secure video, which means no commute and no waiting room, just focused time together at an hour that actually works for two full schedules. Most couples find it works as well as sitting across the room from each other, and some find it easier, since you're both already somewhere you feel at ease.",
		},
		FEES_FAQ,
	] as const satisfies readonly FaqItem[],
} as const;

export const home_closing = {
	kicker: "Ready to start couples therapy?",
	title: "Let's do it!",
	paragraphs: [
		"The work isn't about fixing one of you. It's about helping you reconnect as a team again — with clearer communication, rebuilt trust, and a relationship that fits the two of you.",
		"I work with couples in Needham and throughout Massachusetts. If you're ready to stop carrying this alone, let's talk.",
	],
	cta: PRIMARY_CTA,
	image: image_ref(
		"8aaca2fb-05b--gui-franca-rrg44bvobey-unsplash.webp",
		"Couple reconnecting, representing couples therapy in Needham, MA",
	),
} as const;

export const home = {
	meta: home_meta,
	hero: home_hero,
	unstuck: home_unstuck,
	peaceCost: home_peace_cost,
	meet: home_meet,
	services: home_services,
	testimonialsIcon: home_testimonials_icon,
	testimonialsKicker: home_testimonials_kicker,
	testimonials: home_testimonials,
	whyWait: home_why_wait,
	nowWhat: home_now_what,
	faq: home_faq,
	closing: home_closing,
} as const;
