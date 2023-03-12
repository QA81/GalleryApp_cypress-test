class DeleteMyGalleryPage {
  get myGalleryBtn() {
    return cy.get(".nav-link").eq(1);
  }

  get anyGallery() {
    return cy.get(".box-title");
  }

  get deleteGalleryBtn() {
    return cy.get("button");
  }

  deleteGallery() {
    this.myGalleryBtn.click()
    this.anyGallery.first().click();
    this.deleteGalleryBtn.first().click();
  }
}

export const deleteMyGalleryPage = new DeleteMyGalleryPage();
