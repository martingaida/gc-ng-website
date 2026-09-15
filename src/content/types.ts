export type PageMeta = {
	title: string;
	description: string;
	path: string;
};

export type NavItem = {
	label: string;
	/** Omit for non-link parents (e.g. Services dropdown label). */
	href?: string;
	children?: readonly NavItem[];
};

export type ImageRef = {
	src: string;
	alt: string;
	/** Intrinsic pixel width — reserves layout space (CLS). */
	width?: number;
	/** Intrinsic pixel height — reserves layout space (CLS). */
	height?: number;
	/** Optional precomputed srcset string. */
	srcSet?: string;
};

export type CtaLink = {
	label: string;
	href: string;
};

export type FaqItem = {
	question: string;
	answer: string;
	/** Supplemental block after the main answer (e.g. out-of-network details). */
	afterword?: {
		body: string;
		bullets: readonly string[];
	};
};

export type Testimonial = {
	quote: string;
	attribution: string;
};

export type ServiceCard = {
	title: string;
	description: string;
	href: string;
	image: ImageRef;
};

export type ServiceTeaser = {
	title: string;
	description: string;
	href: string;
	bullets: readonly string[];
};

export type ProcessStep = {
	number: number;
	title: string;
	body: string;
};

export type BeforeAfterPair = {
	before: string;
	after: string;
};

export type HowHelpSection = {
	title: string;
	body: string;
};

export type TherapistMeet = {
	kicker: string;
	name: string;
	image: ImageRef;
	paragraphs: readonly string[];
	aboutHref: string;
	aboutLabel: string;
};

export type ClosingCta = {
	kicker: string;
	title: string;
	paragraphs: readonly string[];
};

export type ValueItem = {
	title: string;
	body: string;
};

export type BlogPostSummary = {
	title: string;
	excerpt: string;
	href: string;
	image: ImageRef;
};

export type BlogEpisode = {
	title: string;
	url: string;
	summary: string;
	learnings?: readonly string[];
};

export type BlogPost = {
	meta: PageMeta;
	h1: string;
	authorLabel: string;
	authorHref: string;
	body?: readonly string[];
	episodes?: readonly BlogEpisode[];
	sections?: readonly {
		title: string;
		body: string;
	}[];
	closing?: string;
	image?: ImageRef;
	footerImage?: ImageRef;
	prev?: { label: string; href: string };
	next?: { label: string; href: string };
};

export type ServicePageContent = {
	meta: PageMeta;
	heroImage: ImageRef;
	featureImage: ImageRef;
	accentImage: ImageRef;
	kicker: string;
	h1: string;
	lead: string;
	virtualNote: string;
	arrivalTitle: string;
	arrivalItems: readonly string[];
	beforeAfter: {
		title: string;
		subtitle: string;
		pairs: readonly BeforeAfterPair[];
	};
	steps: readonly ProcessStep[];
	howHelp: {
		title: string;
		sections: readonly HowHelpSection[];
	};
	/** Optional modality block (Communication page). */
	modalities?: {
		title: string;
		intro: string;
		image: ImageRef;
		items: readonly HowHelpSection[];
	};
	/** Optional editorial callout (Communication page). */
	callout?: {
		title: string;
		body: string;
		image: ImageRef;
	};
	therapist: TherapistMeet;
	faqKicker: string;
	faqTitle: string;
	faq: readonly FaqItem[];
	otherServicesKicker: string;
	otherServicesTitle: string;
	otherServicesImage?: ImageRef;
	otherServices: readonly ServiceTeaser[];
	closing: ClosingCta;
	closingAccentImage?: ImageRef;
};
