/// <reference types="Cypress"/>
import { allGalleriesPage } from "../POM/AllGalleriesPage";
import { loginPage } from "../POM/loginPage";
describe("Validate funcionality of All Galleries page", () => {
  beforeEach("Visit gallery as logedin user and click on all galleries", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
    loginPage.login("zeka@gmail.com", "123456789");
    allGalleriesPage.allGalleriesLink.click();
    cy.url().should("include", "/");
    cy.wait(5000);
  });

  it("validate pagination", () => {
    allGalleriesPage.loadMoreButton.click();
  });

  it("Validate search input", () => {
    allGalleriesPage.allGalleriesSearch("konj");
  });
  
});
