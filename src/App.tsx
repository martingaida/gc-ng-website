import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { affair } from "@/content/affair.js";
import { communication } from "@/content/communication.js";
import { desire } from "@/content/desire.js";
import { discernment } from "@/content/discernment.js";
import { parenting } from "@/content/parenting.js";
import { SiteLayout } from "@/layouts/SiteLayout.js";
import { HomePage } from "@/pages/HomePage.js";
import { NotFoundPage } from "@/pages/NotFoundPage.js";

const AboutPage = lazy(() =>
	import("@/pages/AboutPage.js").then((m) => ({ default: m.AboutPage })),
);
const ContactPage = lazy(() =>
	import("@/pages/ContactPage.js").then((m) => ({ default: m.ContactPage })),
);
const ServicePage = lazy(() =>
	import("@/pages/ServicePage.js").then((m) => ({ default: m.ServicePage })),
);
const PolyamoryPage = lazy(() =>
	import("@/pages/PolyamoryPage.js").then((m) => ({ default: m.PolyamoryPage })),
);
const BlogIndexPage = lazy(() =>
	import("@/pages/BlogPages.js").then((m) => ({ default: m.BlogIndexPage })),
);
const SexWithEmilyPage = lazy(() =>
	import("@/pages/BlogPages.js").then((m) => ({ default: m.SexWithEmilyPage })),
);
const HolidaysBlogPage = lazy(() =>
	import("@/pages/BlogPages.js").then((m) => ({ default: m.HolidaysBlogPage })),
);

function RouteFallback() {
	return (
		<div className="site-container py-24 text-muted-foreground" role="status">
			Loading…
		</div>
	);
}

export function App() {
	return (
		<Suspense fallback={<RouteFallback />}>
			<Routes>
				<Route element={<SiteLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route
						path="/infidelity-affair-recovery"
						element={<ServicePage content={affair} crumbName="Affair Recovery" />}
					/>
					<Route
						path="/parenting-alignment-therapy"
						element={
							<ServicePage content={parenting} crumbName="Parenting Alignment" />
						}
					/>
					<Route
						path="/discernment-therapy"
						element={
							<ServicePage content={discernment} crumbName="Discernment Therapy" />
						}
					/>
					<Route
						path="/sexless-marriage"
						element={<ServicePage content={desire} crumbName="Desire & Intimacy" />}
					/>
					<Route
						path="/communication-conflict-therapy"
						element={
							<ServicePage
								content={communication}
								crumbName="Communication & Conflict"
							/>
						}
					/>
					<Route path="/polyamory-therapy" element={<PolyamoryPage />} />
					<Route path="/blog" element={<BlogIndexPage />} />
					<Route
						path="/blog/sex-with-emily-episodes"
						element={<SexWithEmilyPage />}
					/>
					<Route
						path="/blog/holidays-full-respect-living-tips"
						element={<HolidaysBlogPage />}
					/>
					{/* Legacy CMS paths */}
					<Route path="/blog-3" element={<Navigate to="/blog" replace />} />
					<Route
						path="/blog-3/sex-with-emily-episodes"
						element={<Navigate to="/blog/sex-with-emily-episodes" replace />}
					/>
					<Route
						path="/blog-3/holidays-full-respect-living-tips"
						element={
							<Navigate to="/blog/holidays-full-respect-living-tips" replace />
						}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
