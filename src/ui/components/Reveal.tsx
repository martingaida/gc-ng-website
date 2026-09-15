import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
	children: ReactNode;
	className?: string;
};

/**
 * One-shot scroll entrance for rare marketing bands.
 * CSS `.reveal` + data-visible; reduced motion drops translate.
 */
export function Reveal({ children, className }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, set_visible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			set_visible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					set_visible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn("reveal", className)}
			data-visible={visible ? "true" : "false"}
		>
			{children}
		</div>
	);
}
