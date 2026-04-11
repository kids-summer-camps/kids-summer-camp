#!/bin/bash
# Compress brand program videos + Programs page hero (0410 boy in space) from ~/Downloads into public/videos.
# Uses the same settings as compress-small.sh (~720p CRF 28, no audio).

set -euo pipefail

INPUT_DIR="${INPUT_DIR:-$HOME/Downloads}"
OUTPUT_DIR="${OUTPUT_DIR:-$(dirname "$0")/public/videos}"

mkdir -p "$OUTPUT_DIR"

compress_video() {
    local input_file="$1"
    local output_file="$2"
    local filename
    filename=$(basename "$input_file")

    echo "Compressing: $filename -> $(basename "$output_file")"

    ffmpeg -i "$input_file" \
        -vcodec libx264 \
        -crf 28 \
        -preset medium \
        -vf "scale=1280:720:force_original_aspect_ratio=decrease,format=yuv420p" \
        -movflags +faststart \
        -an \
        "$output_file" \
        -y 2>&1 | grep -E "(Duration|Output|error|Error)" || true

    if [ -f "$output_file" ]; then
        echo "  ✓ Done: $(du -h "$output_file" | cut -f1)"
    else
        echo "  ✗ Failed: $output_file"
        return 1
    fi
}

# Source basename -> output basename (same names; files live in public/videos)
declare -a videos=(
    "Prelude.mp4"
    "Launchpad.mp4"
    "ZERO1.mp4"
    "Idealforge.mp4"
    "Apex.mp4"
    "ROBOX.mp4"
    "Mechanica.mp4"
    "Esport.mp4"
    "0410.mp4"
)

echo "==================================="
echo "Compressing program videos"
echo "Input:  $INPUT_DIR"
echo "Output: $OUTPUT_DIR"
echo "==================================="
echo ""

for name in "${videos[@]}"; do
    input="$INPUT_DIR/$name"
    out="$OUTPUT_DIR/$name"
    if [ ! -f "$input" ]; then
        echo "  ⚠ Source not found: $input"
        exit 1
    fi
    compress_video "$input" "$out"
    echo ""
done

echo "Compression complete!"
echo ""
echo "Compressed files:"
ls -lh "$OUTPUT_DIR"/*.mp4 2>/dev/null | awk '{print $9, $5}'
