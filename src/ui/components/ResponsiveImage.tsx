import type { ImageRef } from "@/content/types.js";
import { cn } from "@/lib/cn";
import { src_set_for } from "@/content/images.js";

type ResponsiveImageProps = {
	image: ImageRef;
	className?: string;
	sizes?: string;
	loading?: "lazy" | "eager";
	fetchPriority?: "high" | "low" | "auto";
	decoding?: "async" | "auto" | "sync";
};

export function ResponsiveImage({
	image,
	className,
	sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px",
	loading = "lazy",
	fetchPriority,
	decoding = "async",
}: ResponsiveImageProps) {
	const src_set = image.srcSet ?? src_set_for(image.src);

	return (
		<img
			src={image.src}
			srcSet={src_set}
			sizes={sizes}
			alt={image.alt}
			width={image.width}
			height={image.height}
			className={cn(className)}
			loading={loading}
			fetchPriority={fetchPriority}
			decoding={decoding}
		/>
	);
}
