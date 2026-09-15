/** Quiet terracotta mark for recognition lists — replaces scattered ∞ motifs. */
export function AccentMark() {
	return (
		<span
			aria-hidden="true"
			className="mt-[0.7em] inline-block size-1.5 shrink-0 rounded-full bg-accent"
		/>
	);
}
