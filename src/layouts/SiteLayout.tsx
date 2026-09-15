import { Outlet } from "react-router-dom";

import { SiteFooter } from "@/ui/components/SiteFooter.js";
import { SiteHeader } from "@/ui/components/SiteHeader.js";

export function SiteLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-background text-foreground">
			<a
				href="#main"
				className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-control focus-visible:bg-surface focus-visible:px-4 focus-visible:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
