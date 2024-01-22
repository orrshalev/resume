#!/bin/sh
bun run index.ts "$1"
sudo docker run --rm -i -v "$PWD":/data resume-latex pdflatex --output-directory=build "$1.tex"
