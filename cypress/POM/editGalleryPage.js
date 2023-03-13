class EditGalleryPage {
  get myGalleryBtn() {
    return cy.get(".nav-link").eq(1);
  }

  get anyGallery() {
    return cy.get(".box-title");
  }

  get editGalleryBtn() {
    return cy.get("a").eq(-1);
  }

  get titleInput() {
    return cy.get("#title");
  }

  get descriptionsInput() {
    return cy.get("#description");
  }

  get imagesInput() {
    return cy.get("input").eq(2);
  }

  get secondImageInput() {
    return cy.get("input").eq(-1);
  }

  get deletePicturesUrl() {
    return cy.get("i");
  }

  get secondPicturesUrl() {
    return cy.get("i").eq(2);
  }

  get submitBtn() {
    return cy.get(":submit").eq(0);
  }

  edit(title,description){
    this.titleInput.type(title)
    this.descriptionsInput.type(description)
    
  }
}

export const editGalleryPage = new EditGalleryPage();
