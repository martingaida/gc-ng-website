import type { ImageRef } from "./types.js";


/** Map an assets/ filename (or path) to the public `/images/` URL. */
export function img(path: string): string {
	const filename = path.replace(/^.*\//, "");
	return `/images/${filename}`;
}

export function image_ref(path: string, alt: string): ImageRef {
	return { src: img(path), alt };
}
