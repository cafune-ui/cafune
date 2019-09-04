#!/bin/bash

set -e

basepath=$(dirname $0)

# clean
echo "Clean up..."
rm -rf lib css

# transpile scss to css
# custom importer for @import '~some-node-module'
echo "Compile styles..."
node-sass \
  --importer $basepath/../node_modules/node-sass-magic-importer/dist/cli.js \
  style -o css -q

# autoprefixer
postcss css --use autoprefixer --replace --no-map

echo "Compile commonjs..."
npx babel components --out-dir lib --copy-files
