import * as esbuild from "esbuild";

const context = await esbuild.context({
  entryPoints: ["src/index.js"],
  outfile: "dist/data-repeat.js",
  bundle: true,
  sourcemap: true,
  minify: true,
  format: "iife",
  globalName: "DataRepeat",
});

console.log("Watching for file changes...");
await context.watch();
