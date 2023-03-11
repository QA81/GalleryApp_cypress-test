/// <reference types="Cypress"/>
import { loginPage } from "../POM/loginPage";

describe("Login test Gallery app", () => {
  before("visit app and click login button", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
  });

  it("Validate login with valid credentials", () => {
    loginPage.login("zeka@gmail.com", "123456789");
    cy.intercept("GET", "/**").as("logedUser");
    cy.wait("@logedUser").then((interception) => {
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.headers).to.exist;
    });
    cy.url().should("not.include", "/login");
  });
});
