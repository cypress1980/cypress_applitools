/// <reference types="cypress" />
describe("Login into applitools site with valid crediential", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "AppTool!",
    });
  });
  afterEach(() => {
    cy.eyesClose();
  });
  it("Login into applitools site with valid crediential", () => {
    cy.visit("https://demo.applitools.com/");
    cy.eyesCheckWindow("Applitools landing Page");
    cy.get("#username").type("andy");
    cy.get("#password").type("i<3pandas");
    cy.get("#log-in").click();
    cy.eyesCheckWindow("Logged-In Page");
  });
});
describe.only("Login into talent500.", () => {
  beforeEach(() => {
    cy.visit('/signin')
    cy.get('[name="email"]').as('emailInput')
    cy.get('[name="password"]').as('passwordInput')
    cy.get('[data-id="submit-login-btn"]').as('loginButton')

  });
  it("Login into talent500 when Email is incorrect", () => {
    //cy.get('[name="email"]').type("applitoolsautomation11@yopmail.com", {force: true});
    cy.get('@emailInput').type("applitoolsautomation@yopmail.com",{ force: true })
      .should("have.value", "applitoolsautomation@yopmail.com")
      .and("include.value", ".")
      .and("include.value", "@")
      .and("not.have.value", "test@qa.com")
    cy.get('@passwordInput').type("Test@1234", { force: true });
    cy.get('@loginButton').click({ force: true });
    cy.contains("Unable to login with the provided credentials");
  });
  it("Login into talent500 when Password is incorrect", () => {
    cy.get('@emailInput').type("applitoolsautomation@yopmail.com", {
      force: true,
    });
    cy.get('@passwordInput').type("Test@123444", { force: true });
    cy.get('@loginButton').click({ force: true });
    cy.contains("Unable to login with the provided credentials");
  });
  it("Login into talent500 with valid crediential ", () => {
    cy.get('@emailInput').type("applitoolsautomation@yopmail.com", {
      force: true,
    });
    cy.get('@passwordInput').type("Test@123", { force: true });
    cy.get('@loginButton').click({ force: true });
    cy.get('[data-id="nav-dropdown-logout"]').click({ force: true });
  });
});
describe.skip("Login Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://talent500.co/auth/signin");
    cy.get('[name="email"]').type("applitoolsautomation@yopmail.com", {
      force: true,
    });
    cy.get('[name="password"]').type("Test@123", { force: true });
    cy.get('[data-id="submit-login-btn"]').click({ force: true });
  });
  it("should display the dashboard", () => {
    cy.contains("John").should("be.visible");
  });
  it("should display the dashboard", () => {
    cy.contains("Contact us").should("be.visible");
  });
  afterEach(() => {
    cy.get('[data-id="nav-dropdown-logout"]').click({ force: true });
  });
});

