#!/bin/bash

# Compress videos to small size (~2MB) - CRF 28 720p

VIDEOS_DIR="/Users/ayomideibiteye/Desktop/kids-summer-camp/public/videos"

# Ensure directory exists
mkdir -p "$VIDEOS_DIR"

# Function to compress a video
compress_video() {
    local input_file="$1"
    local output_file="$2"
    local filename=$(basename "$input_file")

    echo "Compressing: $filename -> ~2MB (CRF 28 720p)..."

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
        local orig_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        local saved=$(( (orig_size - new_size) / 1024 / 1024 ))
        echo "  ✓ Done: $(du -h "$output_file" | cut -f1) (saved ~${saved}MB)"
    else
        echo "  ✗ Failed to create: $output_file"
    fi
}

# Source videos from Downloads
SOURCE_DIR="$HOME/Downloads"

# Brand program videos (see compress-videos.sh for the canonical list)
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

# Compress each video
echo "==================================="
echo "Compressing videos to ~2MB each"
echo "==================================="
echo ""

for video in "${videos[@]}"; do
    input="$SOURCE_DIR/$video"
    output="$VIDEOS_DIR/$video"

    if [ -f "$input" ]; then
        compress_video "$input" "$output"
    else
        echo "  ⚠ Source not found: $input"
    fi
    echo ""
done

echo "==================================="
echo "Compression complete!"
echo "==================================="
echo ""
echo "Video sizes:"
ls -lh "$VIDEOS_DIR"/*.mp4 "$VIDEOS_DIR"/*.MP4 2>/dev/null || echo "No videos found"
