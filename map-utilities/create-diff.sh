#!/bin/env bash

set -uo pipefail

file1=old/Map/map.json
file2=current/Map/map.json

diff -u5 --speed-large-files "$file1" "$file2"
ret=$?
if [ $ret -eq 0 ]; then
  echo "No diff in JSON file"
elif [ $ret -gt 1 ]; then
  echo "An error occurred!"
fi