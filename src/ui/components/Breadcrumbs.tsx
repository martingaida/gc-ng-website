import { Link } from "react-router-dom";

import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
	name: string;
	path?: string;
};

type BreadcrumbsProps = {
	items: readonly BreadcrumbItem[];
	className?: string;
	/** Inline trail inside a content column (blog); default is a quiet full-width blend. */
	variant?: "trail" | "inline";
};

const LINK_CLASS =
	"underline decoration-accent underline-offset-4 transition-colors duration-hover ease-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

export function Breadcrumbs({
	items,
	className,
	variant = "trail",
}: BreadcrumbsProps) {
	if (items.length === 0) {
		return null;
	}

	const list = (
		<ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
			{items.map((item, index) => {
				const is_last = index === items.length - 1;
				return (
					<li key={`${item.name}-${index}`} className="flex items-center gap-2">
						{index > 0 ? (
							<span aria-hidden="true" className="text-border">
								/
							</span>
						) : null}
						{item.path && !is_last ? (
							<Link to={item.path} className={LINK_CLASS}>
								{item.name}
							</Link>
						) : (
							<span
								aria-current={is_last ? "page" : undefined}
								className={is_last ? "text-foreground" : undefined}
							>
								{item.name}
							</span>
						)}
					</li>
				);
			})}
		</ol>
	);

	if (variant === "inline") {
		return (
			<nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
				{list}
			</nav>
		);
	}

	return (
		<nav
			aria-label="Breadcrumb"
			className={cn("border-b border-border/40 bg-transparent py-3", className)}
		>
			<div className="site-container">{list}</div>
		</nav>
	);
}
