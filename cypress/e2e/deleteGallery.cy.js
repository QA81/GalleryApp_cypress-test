/// <reference types="Cypress" />
import { deleteMyGalleryPage } from "../POM/deleteGalleryPage";
import { loginPage } from "../POM/loginPage";

describe("delete my gallery test", () => {
  before("visit app and login", () => {
    cy.intercept("POST", "/**").as("login");
    cy.visit("/");
    loginPage.loginLink.click();
    loginPage.login("zeka@gmail.com", "123456789");
    cy.url().should("not.include", "login");
  });

  it("Navigate to my galleries and deleting first gallery", () => {
    cy.intercept("DELETE", "/**").as("deleted");
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.headers).to.exist;
      deleteMyGalleryPage.deleteGallery();
      cy.wait("@deleted").then((interception) => {
        expect(interception.response.statusCode).eq(200);
      });
    });
  });
});
