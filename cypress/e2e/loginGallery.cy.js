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
    cy.url().should("not.include","/login")
  });


});
