#!/bin/bash

# Final compression - keeping original 1080p resolution
# Using CRF 23 for high quality at full HD

INPUT_DIR="public/videos"
BACKUP_DIR="public/videos_backup"

mkdir -p "$BACKUP_DIR"
cp "$INPUT_DIR"/*.MP4 "$BACKUP_DIR/" 2>/dev/null || true

echo "Compressing at 1080p (original resolution) with CRF 23..."
echo ""

for video in "$BACKUP_DIR"/*.MP4; do
    [ -e "$video" ] || continue

    filename=$(basename "$video")
    output_file="$INPUT_DIR/$filename"

    echo "Processing: $filename"

    ffmpeg -i "$video" \
        -c:v libx264 \
        -preset medium \
        -crf 23 \
        -vf "format=yuv420p" \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        -maxrate 5M \
        -bufsize 10M \
        -y "$output_file"

    if [ $? -eq 0 ]; then
        original_size=$(du -h "$video" | cut -f1)
        new_size=$(du -h "$output_file" | cut -f1)
        echo "  ✓ Done: $original_size → $new_size"
    else
        echo "  ✗ Failed"
    fi
    echo ""
done

echo "Done! Videos are now 1080p with high quality compression."
echo ""
ls -lh "$INPUT_DIR"/*.MP4 2>/dev/null | awk '{print $9, $5}'
