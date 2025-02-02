Created to demonstrate https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/669

Steps:
1. Clone the repo
2. `pnpm install`
3. `pnpm run test` - This patches the `app.js` handler and runs the app without `@sentry/esbuild-plugin`. This should succeed and print "Hello world"
4. `WITH_SENTRY=1 pnpm run test` - Same as step #3, but with `@sentry/esbuild-plugin` enabled. This is expected to fail with a message like this:

```
$ WITH_SENTRY=1 pnpm run test

> @ test C:\Users\colin\SentryBugRepro
> node build.mjs && node invoke.js

[sentry-esbuild-plugin] Warning: No auth token provided. Will not create release. Please set the `authToken` option. You can find information on how to generate a Sentry auth token here: https://docs.sentry.io/api/auth/
[sentry-esbuild-plugin] Warning: No auth token provided. Will not upload source maps. Please set the `authToken` option. You can find information on how to generate a Sentry auth token here: https://docs.sentry.io/api/auth/
[sentry-esbuild-plugin] Info: Sending telemetry data on issues and performance to Sentry. To disable telemetry, set `options.telemetry` to `false`.
C:\Users\colin\SentryBugRepro\node_modules\.pnpm\shimmer@1.2.1\node_modules\shimmer\index.js:14
  Object.defineProperty(obj, name, {
         ^

TypeError: Cannot redefine property: handler
    at Function.defineProperty (<anonymous>)
    at defineProperty (C:\Users\colin\SentryBugRepro\node_modules\.pnpm\shimmer@1.2.1\node_modules\shimmer\index.js:14:10)
    at Function.wrap (C:\Users\colin\SentryBugRepro\node_modules\.pnpm\shimmer@1.2.1\node_modules\shimmer\index.js:56:3)
    at Object.<anonymous> (C:\Users\colin\SentryBugRepro\invoke.js:4:9)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.16.0
 ELIFECYCLE  Test failed. See above for more details.
```
