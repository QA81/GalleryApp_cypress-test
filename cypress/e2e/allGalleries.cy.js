/// <reference types="Cypress"/>
import { allGalleriesPage } from "../POM/AllGalleriesPage";
import { loginPage } from "../POM/loginPage";

describe("Validate funcionality of All Galleries page", () => {
  beforeEach("Visit gallery as logedin user and click on all galleries", () => {
    cy.intercept("POST", "/**").as("login");
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
    loginPage.login("zeka@gmail.com", "123456789");
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    allGalleriesPage.allGalleriesLink.click();
  });

  it("Validate any gallery is loading and add comment", () => {
    allGalleriesPage.anyGallery.first().click();
    allGalleriesPage.commentInput.type("punk is not dead");
    allGalleriesPage.submitCommentButton.click();
  });

  it("validate pagination", () => {
    allGalleriesPage.loadMoreButton.click();
  });

  it("Validate search input", () => {
    cy.intercept("GET", "/**").as("allGalleries");
    cy.wait("@allGalleries");
    allGalleriesPage.allGalleriesSearch("konj");
  });
});
