import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const { combinedEnv } = loadEnvConfig(process.cwd());

export default defineConfig({
  env: combinedEnv,
  e2e: {
    baseUrl: "http://localhost:3000",
    video: false,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 3,
      openMode: null,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
