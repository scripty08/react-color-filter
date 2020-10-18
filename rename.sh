#!/bin/bash

# Assign the filename
packageJson="package.json"
exampleJsx="examples/client/Example.jsx"
reactSkeletonJsx="examples/src/ReactSkeleton.jsx"
indexJsx="examples/src/index.jsx"
serverJs="examples/client/server/server.js"

# Take the replace string
read -p "Enter new package name: " package
read -p "Enter new component name: " component

if [[ $package != "" && $component != "" ]]; then
sed -i "s/react-skeleton/$package/" $packageJson
sed -i "s/ReactSkeleton/$component/" $exampleJsx
sed -i "s/React Skeleton/$component/" $exampleJsx
sed -i "s/ReactSkeleton/$component/" $reactSkeletonJsx
sed -i "s/react-skeleton/$package/" $reactSkeletonJsx
sed -i "s/ReactSkeleton/$component/" $indexJsx
sed -i "s/react-skeleton/$package/" $serverJs
fi
