#!/usr/bin/env bash
# Generate responsive WebP variants under public/images/responsive/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT/public/images"
OUT_DIR="$SRC_DIR/responsive"
WIDTHS=(640 960 1280 1920)
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

mkdir -p "$OUT_DIR"

shopt -s nullglob
for src in "$SRC_DIR"/*.webp; do
	base="$(basename "$src" .webp)"
	png="$TMP_DIR/${base}.png"
	if ! dwebp "$src" -o "$png" >/dev/null 2>&1; then
		echo "skip (decode failed): $base"
		continue
	fi
	for w in "${WIDTHS[@]}"; do
		out="$OUT_DIR/${base}-${w}.webp"
		if [[ -f "$out" ]]; then
			continue
		fi
		# Skip upsizing: if original is narrower than target, skip
		orig_w="$(sips -g pixelWidth "$src" 2>/dev/null | awk '/pixelWidth/ {print $2}')"
		if [[ -n "$orig_w" && "$orig_w" -lt "$w" ]]; then
			continue
		fi
		resized="$TMP_DIR/${base}-${w}.png"
		sips --resampleWidth "$w" "$png" --out "$resized" >/dev/null 2>&1 || continue
		cwebp -q 78 "$resized" -o "$out" >/dev/null 2>&1
		echo "wrote $(basename "$out")"
	done
done

python3 <<PY
import json, subprocess, pathlib
src_dir = pathlib.Path("$SRC_DIR")
dims = {}
for path in sorted(src_dir.glob("*.webp")):
	try:
		out = subprocess.check_output(
			["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)],
			text=True,
		)
		w = h = None
		for line in out.splitlines():
			if "pixelWidth" in line:
				w = int(line.split(":")[-1].strip())
			if "pixelHeight" in line:
				h = int(line.split(":")[-1].strip())
		if w and h:
			dims[path.name] = {"width": w, "height": h}
	except Exception as exc:
		print(f"dim fail {path.name}: {exc}")
out_path = src_dir / "dimensions.json"
out_path.write_text(json.dumps(dims, indent=2) + "\n")
src_copy = pathlib.Path("$ROOT") / "src" / "content" / "image-dimensions.json"
src_copy.write_text(json.dumps(dims, indent=2) + "\n")
print(f"wrote {out_path} ({len(dims)} images)")
print(f"wrote {src_copy}")
PY
