import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-lg font-medium transition-[color,background-color,border-color,transform] duration-hover ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] active:duration-press [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"rounded-control bg-primary text-primary-foreground hover:bg-primary-hover",
				secondary:
					"rounded-control border border-border bg-surface text-foreground hover:bg-surface-pale",
				outline:
					"rounded-control border border-border bg-surface text-foreground hover:bg-surface-pale",
				ghost: "rounded-control border border-transparent text-foreground hover:bg-surface-pale hover:text-primary",
				link: "rounded-none text-foreground underline decoration-accent underline-offset-4 hover:text-primary hover:decoration-primary",
			},
			size: {
				default: "min-h-12 px-6 py-3",
				sm: "min-h-11 px-4 py-2 text-base",
				lg: "min-h-14 px-8 py-3.5 text-xl",
				icon: "size-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
