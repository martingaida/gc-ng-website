import { Link } from "react-router-dom";

import { Button } from "@/ui/components/Button.js";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
	to: string;
	children: React.ReactNode;
	variant?: "default" | "secondary" | "outline" | "ghost" | "link";
	size?: "default" | "sm" | "lg" | "icon";
	className?: string;
	onClick?: () => void;
};

export function ButtonLink({
	to,
	children,
	variant = "default",
	size = "default",
	className,
	onClick,
}: ButtonLinkProps) {
	return (
		<Button asChild variant={variant} size={size} className={cn(className)}>
			<Link to={to} onClick={onClick}>
				{children}
			</Link>
		</Button>
	);
}
