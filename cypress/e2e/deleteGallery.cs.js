/// <reference types="Cypress" />
import { deleteMyGalleryPage } from "../POM/deleteGalleryPage";
import { loginPage } from "../POM/loginPage";

describe("delete my gallery test", () => {
  before("visit app and login", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    loginPage.login("zeka@gmail.com", "123456789");
    cy.url().should("include", "login");
  });

  it("delete my gallery",()=>{
    deleteMyGalleryPage.deleteGallery()
  })
});
