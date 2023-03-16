/// <reference types="Cypress"/>

import { allGalleriesPage } from "../POM/AllGalleriesPage";
import { loginPage } from "../POM/loginPage";

describe("Validate funcionality of All Galleries page", () => {
  beforeEach("login and visit all galleries page", () => {
    cy.intercept("POST", "/**").as("login");
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
    loginPage.login("zeka@gmail.com", "123456789");
    cy.wait("@login").then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    allGalleriesPage.allGalleriesHeading
      .should("be.visible")
      .and("have.text", "All Galleries");
  });

  it("Validate all galleries are loaded", () => {
    allGalleriesPage.allGalleries.children().should("have.length", 10);
    allGalleriesPage.allGalleries.children().each((el) => {
      expect(el).to.exist;
    });
    cy.get("button").should("have.length", 2);
  });

  it("Validate all galleries have a img", () => {
    allGalleriesPage.allGalleries.children();
    allGalleriesPage.singleGalleryImg.should("have.length", 10);
  });

  it("Validate all galleries have an author", () => {
    allGalleriesPage.galleryAuth.should("have.length", 10);
    allGalleriesPage.galleryAuth.children().each((el) => {
      expect(el).to.exist;
    });
    cy.get("button").should("have.length", 2);
  });

  it("Validate all galleries have a creation date", () => {
    allGalleriesPage.galleryDate.should("have.length", 10);
    allGalleriesPage.galleryDate.each((date) => {
      expect(date).to.exist;
    });
  });

  it("validate pagination", () => {
    allGalleriesPage.allGalleries.children().should("have.length", 10);
    allGalleriesPage.loadMoreButton.click();
    allGalleriesPage.allGalleries.children().should("have.length", 20);
  });

  it("Validate search input", () => {
    const searchTerm = "Konj";
    allGalleriesPage.allGalleriesSearch(searchTerm);
    allGalleriesPage.singleGalleryHeading.should("contain", searchTerm);
  });

  it("Validate single gallery is loading", () => {
    allGalleriesPage.singleGalleryHeading.first().click();
    cy.url().should("include", "/galleries/");
    allGalleriesPage.loadedSingleGalleryHeading.should("be.visible");
    allGalleriesPage.singleGalleryImg.should("exist").and("be.visible");
  });

  it.only("validate add comment functionality", () => {
    const comment = "lagani rad";
    allGalleriesPage.singleGalleryHeading.first().click();
    cy.url().should("include", "/galleries/");
    allGalleriesPage.commentInput.type(comment);
    allGalleriesPage.submitCommentButton.click();
    allGalleriesPage.commentsText
      .find("p")
      .first()
      .should("have.text", comment)
      .and("be.visible");
    allGalleriesPage.authorOfComment
      .should("contain", "Commented by:")
      .and("be.visible");
      allGalleriesPage.commentCreationDate.should("exist").and("be.visible")
    allGalleriesPage.commentsDeleteButton.click();
    allGalleriesPage.commentsText.should("not.have.text", comment);
  });
});
