#!/bin/bash

cd ./hacket_group_exercise_front

echo "Installing dependencies..."
npm install

echo "Building the project..."
npm run build

echo "Build process completed."
read -p "Press any key to close..."