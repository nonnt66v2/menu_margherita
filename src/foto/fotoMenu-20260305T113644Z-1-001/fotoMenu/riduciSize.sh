#!/bin/bash

# Controllo argomento
if [ -z "$1" ]; then
  echo "Uso: $0 /percorso/cartella"
  exit 1
fi

INPUT_DIR="$1"
OUTPUT_DIR="${INPUT_DIR}/ridotte"

# Crea cartella di output se non esiste
mkdir -p "$OUTPUT_DIR"

# Estensioni supportate
for img in "$INPUT_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG}; do
  # Salta se non esistono file che matchano
  [ -e "$img" ] || continue
  
  filename=$(basename "$img")
  
  echo "Ridimensiono: $filename"
  
  # Riduce al 20% (cioè -80%)
  magick "$img" -resize 20% "$OUTPUT_DIR/$filename"
done

echo "Operazione completata! File salvati in: $OUTPUT_DIR"
