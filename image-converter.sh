#!/bin/bash

cd src/images/original

for file in *
do
  convert -sampling-factor 4:2:0 -resize 1500 -strip -quality 85 -colorspace RGB "$file" "../$file"
done