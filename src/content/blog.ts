import { image_ref } from "./images.js";
import type { BlogPost, BlogPostSummary, PageMeta } from "./types.js";


export const blog_index_meta: PageMeta = {
	title: "Blog — Natalie Gaida | LMFT",
	description:
		"Articles and recommendations from Natalie Gaida, LMFT, on couples communication, intimacy, and relational living for partners in Needham and across Massachusetts.",
	path: "/blog",
};

export const blog_posts: readonly BlogPostSummary[] = [
	{
		title: "My All-Time Favorite 'Sex with Emily' Podcast Episodes",
		excerpt:
			"Check out this list of my favorite 'Sex with Emily' podcast episodes that I often recommend",
		href: "/blog/sex-with-emily-episodes",
		image: image_ref(
			"170880679150--ab6765630000ba8a50c7d252a7bb404519be5b29.webp",
			"My All-Time Favorite 'Sex with Emily' Podcast Episodes",
		),
	},
	{
		title: "Harmonious Holidays: The Art of Generous Listening During the Holidays",
		excerpt:
			"Discover the key to harmonious holiday relationships by learning how to master the art of empathetic listening and mature responding, as advised by renowned therapist Terry Real.",
		href: "/blog/holidays-full-respect-living-tips",
		image: image_ref(
			"170101590282--freestocks-yb2tglr-rvo-unsplash.webp",
			"Harmonious Holidays: The Art of Generous Listening During the Holidays",
		),
	},
];

export const sex_with_emily_post: BlogPost = {
	meta: {
		title: "My All-Time Favorite 'Sex with Emily' Podcast Episodes — Natalie Gaida | LMFT",
		description:
			"Check out this list of my favorite 'Sex with Emily' podcast episodes that I often recommend",
		path: "/blog/sex-with-emily-episodes",
	},
	h1: "My All-Time Favorite 'Sex with Emily' Podcast Episodes",
	authorLabel: "Natalie Gaida",
	authorHref: "/blog",
	episodes: [
		{
			title: "More Foreplay, More Orgasms",
			url: "https://podcasts.apple.com/us/podcast/sex-with-emily/id82456189?i=1000640330562",
			summary:
				"Emily dives into the psychology of foreplay and how to get aroused with specific (and quite sexy) pre-game tips. She also talks about what to do if foreplay and overall sex with your partner has gotten a bit stale, how to tease and arouse yourself, what to do if your partner doesn't want to explore new things, and how to handle a partner who won't reciprocate foreplay. Plus, I answer your questions!",
			learnings: [
				"How to set the mood for hotter, more intimate sex",
				"Specific sex tips to seduce a partner",
				"The key differences between couples with 'great' vs. 'bad' sex lives",
			],
		},
		{
			title:
				"Coming Together w/ Celeste Hirshman & Danielle Harel authors of one of my favorite books, Coming Together.",
			url: "https://podcasts.apple.com/us/podcast/sex-with-emily/id82456189?i=1000457602146",
			summary:
				'The three of them discuss core desires – what are they, how to figure out your own, and how they\'ll help your sex life, how to create your "Hottest Sexual Movie," and ways to be more compatible with your partner. Plus, they give you a lesson on sexual breathing.',
		},
		{
			title: "Uplevel Your Orgasms w/ Susan Bratton",
			url: "https://podcasts.apple.com/us/podcast/sex-with-emily/id82456189?i=1000629211925",
			summary:
				"Orgasms are learned skills. So says bestselling author and sex expert Susan Bratton, who teaches couples and individuals to have more collaborative, orgasmic intercourse. Susan and Emily answer questions about being a better lover, erasing sexual shame, and, of course… having tons of orgasms. First: how do you help a partner who never orgasms during sex? Next, how do you train your G-spot for internal orgasms? We give you specific techniques to train your vaginal canal, and help make the area more engorged and responsive. How about Doggy Style – can the receiving partner orgasm more easily in this position? Susan talks through the Glissando Technique to help you out. They also talk through female ejaculatory pleasure and squirting, delayed ejaculation and much (much!) more.",
		},
		{
			title: "How Often Should You Have Sex? And Other News",
			url: "https://podcasts.apple.com/us/podcast/sex-with-emily/id82456189?i=1000628466990",
			summary:
				'Ever wondered how often happy couples have sex? Or the little-known key to sexual satisfaction? Emily reveals new research that answers both of these questions and a surprising new finding on who says "I love you" first. First, they look at a study on sexual frequency and the number of times per month couples have sex. Is it this often for you? Next, they dig into research on men saying "I love you" -- do you agree with our takeaway? We then get into amazing new research on mutual masturbation and give you easy ways to try it. Finally, they explore a study on sleep health and sex. Turns out, an orgasm might be more effective than sleeping pills.',
		},
		{
			title: "Fingering & Handjobs: The Lost Art of Hand Play",
			url: "https://podcasts.apple.com/us/podcast/sex-with-emily/id82456189?i=1000625273711",
			summary:
				"Two of your most powerful sex accessories? Your hands. Hands set the tone of your sexual energy. For example, caressing their cheek while you make out versus pinning their hands down while you have sex. And while they talk a lot about what to do with our mouths or genitals on this show, Emily focuses on a lost art: hand play. Specifically, how to finger, give a hand job, and use your hands with sexual intention. They first share how to penetrate a vulva with your fingers. They give you tricks to stimulate the labia and clitoris, different forms of pressure and touch, and how to find the G-spot when you finger. Next, they give the penis some love with hand job techniques and upgrades like toy play and perineum stimulation. Finally, they discuss secondary erogenous zones and answer your hand play questions.",
		},
	],
	footerImage: image_ref(
		"82c2675683b8--82c2675683b841fab7f5483e58645882.webp",
		"Decorative image for Natalie Gaida blog",
	),
	next: {
		label: "Next Harmonious Holidays: The Art of Generous Listening During the Holidays",
		href: "/blog/holidays-full-respect-living-tips",
	},
};

export const holidays_post: BlogPost = {
	meta: {
		title:
			"Harmonious Holidays: Full Respect Living for Family Communication - Terry Real's Technique — Natalie Gaida | LMFT",
		description:
			"Learn how to master the art of empathetic listening and mature responding, as advised by renowned therapist Terry Real. This guide offers practical strategies to enhance communication and understanding with loved ones during the festive season. Ideal for those seeking to foster deeper connections and minimize conflicts during holidays.",
		path: "/blog/holidays-full-respect-living-tips",
	},
	h1: "Harmonious Holidays: The Art of Generous Listening During the Holidays",
	authorLabel: "Natalie Gaida",
	authorHref: "/blog",
	image: image_ref(
		"ffe1ef31-445--freestocks-yb2tglr-rvo-unsplash.webp",
		"Holiday gathering atmosphere representing generous listening during the holidays",
	),
	body: [
		"The holiday season, while filled with joy and festivity, can also bring unique stresses and challenges, especially in our closest relationships.",
		'Holidays often mean increased interactions with loved ones, sometimes leading to misunderstandings or conflicts. Terry Real emphasizes two key steps in generous listening that are particularly valuable during this time. Firstly, acknowledging your partner\'s or family member\'s perspectives and experiences can make them feel heard and valued, a crucial aspect when emotions run high. Phrases like, "I see this is important to you," or "Tell me more about why this matters," demonstrate genuine interest and empathy. Secondly, responding to their needs or requests with openness and willingness to understand can foster a supportive and loving environment.',
	],
	sections: [
		{
			title: "Practicing Understanding Amidst Holiday Chaos",
			body: 'The hustle and bustle of the holiday season can test our patience. In your role as a listener, focus on understanding rather than immediately responding with your own concerns or rebuttals. This approach, coupled with Real\'s advice to "get curious, not furious," can help in managing holiday-related stress and keeping the atmosphere light and positive.',
		},
		{
			title: "Meeting Challenges with Maturity",
			body: 'Holiday pressures can sometimes bring out the less mature sides of ourselves and our loved ones. When faced with such situations, try to remain calm and empathetic. Statements like, "I understand this is stressful for you, let\'s try to work through it together," can diffuse tension and foster cooperation.',
		},
		{
			title: "Responsible Time-Outs for Holiday Harmony",
			body: "When discussions get heated, taking a responsible time-out can be a valuable tool. Politely excusing yourself to regroup and calm down can prevent conflicts from escalating. Ensure to revisit the conversation later in a more relaxed setting, maybe over a cup of hot cocoa or during a quiet moment, to resolve any issues amicably.",
		},
	],
	closing:
		"Remember, the holidays are a time for togetherness, celebration, and sometimes, a bit of chaos. By applying the principles of Full Respect Living, particularly in listening and responding, you can navigate this festive season with greater ease and joy. Remember, the key to a harmonious holiday lies in understanding, patience, and a generous spirit.",
	footerImage: image_ref(
		"82c2675683b8--82c2675683b841fab7f5483e58645882.webp",
		"Decorative image for Natalie Gaida blog",
	),
	prev: {
		label: "Previous My All-Time Favorite 'Sex with Emily' Podcast Episodes",
		href: "/blog/sex-with-emily-episodes",
	},
};

export const blog = {
	meta: blog_index_meta,
	posts: blog_posts,
	sexWithEmily: sex_with_emily_post,
	holidays: holidays_post,
} as const;
