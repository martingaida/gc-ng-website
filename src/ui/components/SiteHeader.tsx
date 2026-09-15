import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";

import { BRAND_SHORT, NAV, PRIMARY_CTA } from "@/content/site.js";
import { Button } from "@/ui/components/Button.js";
import { ButtonLink } from "@/ui/components/ButtonLink.js";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/ui/components/DropdownMenu.js";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/ui/components/Sheet.js";
import { cn } from "@/lib/cn";

const LOGO_SRC =
	"/images/93bb0e03-bb7--natalie-gaida-logo-couple-heart-icon.webp";

const NAV_LINK_CLASS =
	"inline-flex min-h-11 items-center rounded-control text-[0.95rem] text-foreground transition-colors duration-hover ease-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
	const [scrolled, set_scrolled] = useState(false);
	const [open, set_open] = useState(false);
	const navigate = useNavigate();

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
				"sticky top-0 z-40 border-b border-border/40 bg-background/95 transition-[border-color,box-shadow] duration-hover ease-brand backdrop-blur-sm",
				scrolled && "border-border shadow-sm",
			)}
		>
			<div className="site-container flex min-h-[4.25rem] items-center justify-between gap-4 py-3">
				<Link
					to="/"
					className={cn(
						NAV_LINK_CLASS,
						"gap-2.5 font-display text-xl font-medium tracking-tight md:text-2xl",
					)}
				>
					<img
						src={LOGO_SRC}
						alt=""
						width={36}
						height={36}
						className="size-9 object-contain"
						decoding="async"
					/>
					<span>{BRAND_SHORT}</span>
				</Link>

				<nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary">
					{NAV.map((item) =>
						item.children ? (
							<DropdownMenu key={item.label}>
								<DropdownMenuTrigger
									className={cn(NAV_LINK_CLASS, "gap-1 px-1 outline-none")}
								>
									{item.label}
									<ChevronDown className="size-4 opacity-70" aria-hidden="true" />
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="start"
									className="min-w-56 rounded-card border-border bg-surface p-2 text-foreground shadow-soft"
								>
									{item.children.map((child) =>
										child.href ? (
											<DropdownMenuItem
												key={child.href}
												className="min-h-11 cursor-pointer rounded-control px-3 py-2 text-[0.95rem] focus:bg-surface-pale focus:text-foreground"
												onSelect={() => navigate(child.href!)}
											>
												{child.label}
											</DropdownMenuItem>
										) : null,
									)}
								</DropdownMenuContent>
							</DropdownMenu>
						) : item.href ? (
							<NavLink
								key={item.href}
								to={item.href}
								className={({ isActive }) =>
									cn(NAV_LINK_CLASS, isActive && "text-primary")
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
								<Menu aria-hidden="true" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="bg-background text-foreground">
							<SheetHeader>
								<SheetTitle className="flex items-center gap-2.5 font-display text-left text-2xl">
									<img
										src={LOGO_SRC}
										alt=""
										width={32}
										height={32}
										className="size-8 object-contain"
										decoding="async"
									/>
									{BRAND_SHORT}
								</SheetTitle>
								<SheetDescription className="sr-only">
									Primary site navigation links and consultation contact.
								</SheetDescription>
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
																	className={cn(NAV_LINK_CLASS, "text-lg")}
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
														className={cn(NAV_LINK_CLASS, "text-lg")}
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
