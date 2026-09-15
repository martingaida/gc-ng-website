import { Route, Routes } from "react-router-dom";

import { affair } from "@/content/affair.js";
import { communication } from "@/content/communication.js";
import { desire } from "@/content/desire.js";
import { discernment } from "@/content/discernment.js";
import { parenting } from "@/content/parenting.js";
import { SiteLayout } from "@/layouts/SiteLayout.js";
import { AboutPage } from "@/pages/AboutPage.js";
import {
	BlogIndexPage,
	HolidaysBlogPage,
	SexWithEmilyPage,
} from "@/pages/BlogPages.js";
import { ContactPage } from "@/pages/ContactPage.js";
import { HomePage } from "@/pages/HomePage.js";
import { NotFoundPage } from "@/pages/NotFoundPage.js";
import { PolyamoryPage } from "@/pages/PolyamoryPage.js";
import { ServicePage } from "@/pages/ServicePage.js";

export function App() {
	return (
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
				<Route path="/blog-3" element={<BlogIndexPage />} />
				<Route
					path="/blog-3/sex-with-emily-episodes"
					element={<SexWithEmilyPage />}
				/>
				<Route
					path="/blog-3/holidays-full-respect-living-tips"
					element={<HolidaysBlogPage />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
