#!/bin/bash

set -e

basepath=$(dirname $0)

rm -rf cafune-ui/doc/build
git add .
git cz