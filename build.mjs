import { sentryEsbuildPlugin } from "@sentry/esbuild-plugin";
import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["app.js"],
  outdir: "dist/",
  bundle: true,
  platform: "node",
  sourcemap: true, // Source map generation must be turned on for Sentry
  plugins: process.env.WITH_SENTRY ? [
    sentryEsbuildPlugin({
      authToken: "",
      org: "",
      project: "",
    }),
  ] : [],
});
