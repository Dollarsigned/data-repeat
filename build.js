require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    outfile: "dist/data-repeat.js",
    bundle: true,
    format: "iife",
    globalName: "DataRepeat",
    minify: true,
  })
  .catch(() => process.exit(1));
