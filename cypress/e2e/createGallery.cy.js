/// <reference types="Cypress"/>
import { createGalleryPage } from "../POM/createGalleryPage";
import { loginPage } from "../POM/loginPage";

describe("Create gallery test", () => {
  before("Visit app,login", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    loginPage.login("zeka@gmail.com", "123456789");
    cy.wait(5000)
    createGalleryPage.createGalleryBtn.click();
    cy.url().should("include", "/create");
  });

  it("Create new gallery", () => {
    createGalleryPage.createGallery(
      "POM gallery",
      "Rock$Roll",
      "https://c8.alamy.com/comp/JDF7YT/rocknroll-never-dies!-skull-zombie-head-with-rockabilly-pomp-hairstyle-JDF7YT.jpg"
    );
    cy.url().should("not.include","/create")
  });
});
