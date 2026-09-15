import dimensions from "./image-dimensions.json" with { type: "json" };
import type { ImageRef } from "./types.js";


type DimMap = Record<string, { width: number; height: number }>;

const DIMS = dimensions as DimMap;

/** Map an assets/ filename (or path) to the public `/images/` URL. */
export function img(path: string): string {
	const filename = path.replace(/^.*\//, "");
	return `/images/${filename}`;
}

/**
 * Build a srcset pointing at generated responsive variants when present:
 * `/images/responsive/{basename}-640.webp 640w`, etc.
 */
export function src_set_for(
	src: string,
	widths: readonly number[] = [640, 960, 1280, 1920],
): string {
	const filename = src.replace(/^.*\//, "");
	const base = filename.replace(/\.webp$/i, "");
	const dim = DIMS[filename];
	const usable = widths.filter((width) => !dim || dim.width >= width);
	const candidates = (usable.length > 0 ? usable : widths).map(
		(width) => `/images/responsive/${base}-${width}.webp ${width}w`,
	);
	return [...candidates, `${src} ${dim?.width ?? 2400}w`].join(", ");
}

export function image_ref(
	path: string,
	alt: string,
	dimensions_override?: { width: number; height: number },
): ImageRef {
	const filename = path.replace(/^.*\//, "");
	const src = img(path);
	const dim = dimensions_override ?? DIMS[filename];
	return {
		src,
		alt,
		width: dim?.width,
		height: dim?.height,
		srcSet: src_set_for(src),
	};
}
