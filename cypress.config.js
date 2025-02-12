const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.app.manara.tech",
    setupNodeEvents(on, config) {},
  },
});
