import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { BRAND_SHORT, NAV, PRIMARY_CTA } from "@/content/site.js";
import { Button } from "@/ui/components/Button.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/ui/components/Sheet.js";
import { cn } from "@/lib/cn";

export function SiteHeader() {
	const [scrolled, set_scrolled] = useState(false);
	const [open, set_open] = useState(false);

	useEffect(() => {
		const on_scroll = () => set_scrolled(window.scrollY > 12);
		on_scroll();
		window.addEventListener("scroll", on_scroll, { passive: true });
		return () => window.removeEventListener("scroll", on_scroll);
	}, []);

	const close_menu = () => set_open(false);

	return (
		<header
			className={cn(
				"sticky top-0 z-40 border-b border-transparent transition-colors duration-hover ease-brand",
				scrolled && "border-border bg-background shadow-sm",
			)}
		>
			<div className="site-container flex min-h-16 items-center justify-between gap-4 py-3">
				<Link
					to="/"
					className="font-display text-xl font-medium tracking-tight text-foreground transition-colors duration-hover hover:text-primary md:text-2xl"
				>
					{BRAND_SHORT}
				</Link>

				<nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
					{NAV.map((item) =>
						item.children ? (
							<div key={item.label} className="group relative">
								<span className="cursor-default text-[0.95rem] text-foreground">
									{item.label}
								</span>
								<div className="invisible absolute left-0 top-full z-50 min-w-56 pt-2 opacity-0 transition-[opacity,visibility] duration-hover ease-brand group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
									<ul className="rounded-card border border-border bg-surface p-2 shadow-soft">
										{item.children.map((child) =>
											child.href ? (
												<li key={child.href}>
													<NavLink
														to={child.href}
														className={({ isActive }) =>
															cn(
																"block rounded-control px-3 py-2 text-[0.95rem] transition-colors duration-hover hover:bg-surface-pale",
																isActive && "text-primary",
															)
														}
													>
														{child.label}
													</NavLink>
												</li>
											) : null,
										)}
									</ul>
								</div>
							</div>
						) : item.href ? (
							<NavLink
								key={item.href}
								to={item.href}
								className={({ isActive }) =>
									cn(
										"text-[0.95rem] transition-colors duration-hover hover:text-primary",
										isActive && "text-primary",
									)
								}
							>
								{item.label}
							</NavLink>
						) : null,
					)}
					<ButtonLink to={PRIMARY_CTA.href} size="sm">
						{PRIMARY_CTA.label}
					</ButtonLink>
				</nav>

				<div className="lg:hidden">
					<Sheet open={open} onOpenChange={set_open}>
						<SheetTrigger asChild>
							<Button variant="secondary" size="icon" aria-label="Open menu">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="bg-background text-foreground">
							<SheetHeader>
								<SheetTitle className="font-display text-left text-2xl">
									{BRAND_SHORT}
								</SheetTitle>
							</SheetHeader>
							<nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
								{NAV.flatMap((item) =>
									item.children
										? [
												<p
													key={`${item.label}-label`}
													className="mt-2 text-sm tracking-wide text-muted-foreground first:mt-0"
												>
													{item.label}
												</p>,
												...item.children.flatMap((child) =>
													child.href
														? [
																<Link
																	key={child.href}
																	to={child.href}
																	className="text-lg"
																	onClick={close_menu}
																>
																	{child.label}
																</Link>,
															]
														: [],
												),
											]
										: item.href
											? [
													<Link
														key={item.href}
														to={item.href}
														className="text-lg"
														onClick={close_menu}
													>
														{item.label}
													</Link>,
												]
											: [],
								)}
								<ButtonLink
									to={PRIMARY_CTA.href}
									className="mt-2"
									onClick={close_menu}
								>
									{PRIMARY_CTA.label}
								</ButtonLink>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
