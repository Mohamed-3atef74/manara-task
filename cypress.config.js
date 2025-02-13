const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    MAILOSAUR_API_KEY: process.env.CYPRESS_MAILOSAUR_API_KEY,
    MAILOSAUR_SERVER_ID: process.env.SERVER,
  },
  e2e: {
    baseUrl: "https://demo.app.manara.tech",
    setupNodeEvents(on, config) {},
  },
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
});
