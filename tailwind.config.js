/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				surface: {
					DEFAULT: "var(--surface)",
					pale: "var(--surface-pale)",
				},
				sand: "var(--sand)",
				primary: {
					DEFAULT: "var(--primary)",
					hover: "var(--primary-hover)",
					foreground: "var(--on-primary)",
				},
				accent: "var(--accent)",
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				border: "var(--border)",
				ring: "var(--ring)",
				secondary: {
					DEFAULT: "var(--secondary)",
					hover: "var(--secondary-hover)",
					foreground: "var(--foreground)",
				},
			},
			fontFamily: {
				display: [
					"Cormorant Garamond",
					"Baskerville",
					"Georgia",
					"serif",
				],
				body: [
					"EB Garamond",
					"Adobe Garamond Pro",
					"Garamond",
					"Georgia",
					"serif",
				],
				sans: [
					"EB Garamond",
					"Adobe Garamond Pro",
					"Garamond",
					"Georgia",
					"serif",
				],
			},
			borderRadius: {
				control: "var(--radius-control)",
				card: "var(--radius-card)",
				media: "var(--radius-media)",
			},
			maxWidth: {
				content: "var(--content-max)",
				measure: "var(--text-max)",
			},
			transitionTimingFunction: {
				brand: "var(--ease-out)",
			},
			transitionDuration: {
				press: "var(--duration-press)",
				hover: "var(--duration-hover)",
				enter: "var(--duration-enter)",
			},
			boxShadow: {
				soft: "0 18px 50px rgba(81, 65, 57, 0.12)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
