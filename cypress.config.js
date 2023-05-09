const { defineConfig } = require('cypress')
const eyesPlugin = require('@applitools/eyes-cypress')
module.exports = eyesPlugin(defineConfig({
  // the e2e or component configuration
  
  e2e: {
    baseUrl: 'https://talent500.co/auth/',
    "chromeWebSecurity": false,
    testIsolation: false,
    setupNodeEvents(on, config) {
    }
  }
}))