/// <reference types="Cypress"/>
import { createGalleryPage } from "../POM/createGalleryPage";
import { loginPage } from "../POM/loginPage";

describe("Create gallery test", () => {
  before("Visit app,login,click on create gallery", () => {
    cy.intercept("POST", "/**").as("login");
    cy.visit("/");
    loginPage.loginLink.click();
    loginPage.login("zeka@gmail.com", "123456789");
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    createGalleryPage.createGalleryBtn.click();
    createGalleryPage.createGalleryHeading
      .should("be.visible")
      .and("have.text", "Create Gallery");
    cy.url().should("include", "/create");
  });

  it("Create new gallery", () => {
    cy.intercept("POST", "/**").as("createdGallery");
    createGalleryPage.createGallery(
      "POM gallery",
      "Rock$Roll",
      "https://c8.alamy.com/comp/JDF7YT/rocknroll-never-dies!-skull-zombie-head-with-rockabilly-pomp-hairstyle-JDF7YT.jpg"
    );
    createGalleryPage.addImageBtn.click();
    createGalleryPage.secondImageInput.type(
      "https://cdn5.vectorstock.com/i/1000x1000/05/39/rock-n-roll-forever-guitar-vector-22580539.jpg"
    );
    createGalleryPage.submitBtn.click();
    cy.wait("@createdGallery").then((interception) => {
      expect(interception.response.statusCode).eq(201);
    });
    cy.url().should("not.include", "/create");
  });
});
