/// <reference types="Cypress"/>
import { loginPage } from "../POM/loginPage";
import { editGalleryPage } from "../POM/editGalleryPage";

describe("Create gallery test", () => {
  before("Visit app,login,click on my galleries", () => {
    cy.intercept("POST", "/**").as("login");
    cy.visit("/");
    loginPage.loginLink.click();
    loginPage.login("zeka@gmail.com", "123456789");
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    editGalleryPage.myGalleryBtn.click();
    cy.url().should("include", "/my-galleries");
  });

  it("Selecting my first gallery then editing title and description",()=>{
    cy.intercept('GET',"/**").as("firstGallery")
    editGalleryPage.anyGallery.first().click()
    cy.wait("@firstGallery")
    editGalleryPage.editGalleryBtn.click()
    editGalleryPage.edit("Editet title","Editet description")
    editGalleryPage.submitBtn.click()

  })




});
