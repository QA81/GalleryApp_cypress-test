/// <reference types="Cypress"/>
import { allGalleriesPage } from "../POM/AllGalleriesPage";

describe("Validate funcionality of All Galleries page", () => {
  before("Visit gallery app and click on All Galleries", () => {
    cy.visit("/");
    allGalleriesPage.allGalleriesLink.click();
    cy.url().should("include", "/");
  });

  it("validate pagination", () => {
    allGalleriesPage.loadMoreButton.click();
  });
  it("Validate search input", () => {
    allGalleriesPage.allGalleriesSearch("konj");
  });
  
});
