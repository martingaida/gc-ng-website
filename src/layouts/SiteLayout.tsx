import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/ui/components/SiteFooter.js";
import { SiteHeader } from "@/ui/components/SiteHeader.js";

export function SiteLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-background text-foreground">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2"
			>
				Skip to content
			</a>
			<SiteHeader />
			<main id="main" className="flex-1">
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	);
}
