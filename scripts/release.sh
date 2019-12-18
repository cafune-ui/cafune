#!/bin/bash

set -e

basepath=$(dirname $0)

rm -rf ./doc/build
git add .
git cz