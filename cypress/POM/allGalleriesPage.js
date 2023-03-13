class AllGalleriesPage {
  get allGalleriesLink() {
    return cy.get(".nav-link").eq(0);
  }

  get inputSearch() {
    return cy.get("input");
  }

  get filterButton() {
    return cy.get("button").eq(0);
  }

  get loadMoreButton() {
    return cy.get("button").eq(1);
  }

  get anyGallery() {
    return cy.get(".grid").find("h2");
  }

  get commentInput(){
    return cy.get("textarea")
  }

  get submitCommentButton(){
    return cy.get("button").eq(-1)
  }

  allGalleriesSearch(search) {
    this.inputSearch.type(search);
    this.filterButton.click();
  }
}

export const allGalleriesPage = new AllGalleriesPage();
