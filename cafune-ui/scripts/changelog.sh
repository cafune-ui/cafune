#!/bin/bash

set -e

basepath=$(dirname $0)

echo "Generating change log"
conventional-changelog -p angular -i ./doc/markdown/doc/CHANGELOG.md -s