class AllGalleriesPage {
  get allGalleriesLink() {
    return cy.get(".nav-link").eq(0);
  }

  get allGalleriesHeading() {
    return cy.get("h1");
  }

  get searchInput() {
    return cy.get("input");
  }

  get filterButton() {
    return cy.get("button").eq(0);
  }

  get loadMoreButton() {
    return cy.get("button").eq(1);
  }

  get allGalleries() {
    return cy.get(".grid");
  }

  get singleGallery() {
    return cy.get(".cell").first();
  }

  get singleGalleryHeading() {
    return cy.get("h2");
  }

  get loadedSingleGalleryHeading() {
    return cy.get("h1");
  }

  get singleGalleryImg() {
    return cy.get("img");
  }

  get galleryAuth() {
    return cy.get("p");
  }

  get galleryDate() {
    return cy.get("small");
  }

  get commentInput() {
    return cy.get("textarea");
  }

  get submitCommentButton() {
    return cy.get("button").eq(-1);
  }

  get commentsWrapper() {
    return cy.get(".comments-section")
  }

  get commentsText(){
    return this.commentsWrapper.find("li").last()
  }

  get authorOfComment(){
    return this.commentsWrapper.find("p").last()
  }

  get commentsDeleteButton(){
    return this.commentsWrapper.find("i").last()
  }

  get commentCreationDate(){
    return this.commentsWrapper.find("small").last()
  }

  allGalleriesSearch(search) {
    this.searchInput.type(search);
    this.filterButton.click();
  }
}

export const allGalleriesPage = new AllGalleriesPage();
