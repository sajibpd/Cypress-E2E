const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory for reports
    overwrite: false, // Keeps multiple reports instead of overwriting
    html: true, // Generate HTML report
    json: true, // Also generate JSON report for additional processing if needed
    reportTitle: 'Cypress Test Report',
    embeddedScreenshots: true, // Include screenshots in the report
    inlineAssets: true, // Put the CSS and JS inline in the HTML file for a standalone report
  },
  video: true, // Ensure video is enabled
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});

