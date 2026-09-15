import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on every pathname change (BrowserRouter has no ScrollRestoration). */
export function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
