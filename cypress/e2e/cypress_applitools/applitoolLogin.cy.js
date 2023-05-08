/// <reference types="cypress" />
describe('Login into applitools site with valid crediential', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'AppTool!',
      /*browser: [
        //Desktop 
        {width: 800, height: 600, name: 'chrome'},
        {width: 1600, height: 1200, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},

        //Mobile
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
        {deviceName: 'Nexus 10', screenOrientation: 'landscape'},
    ],*/
    });
  })
  afterEach(() => {
    cy.eyesClose();
  });
  it('Login into applitools site with valid crediential', () => {
    cy.visit('https://demo.applitools.com/')
    cy.eyesCheckWindow('Applitools landing Page');
    cy.get('#username').type('andy')
    cy.get('#password').type('i<3pandas')
    cy.get('#log-in').click()
    cy.eyesCheckWindow('Logged-In Page');
  })
})