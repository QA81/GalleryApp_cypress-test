class CreateGalleryPage {
  get createGalleryBtn() {
    return cy.get(".nav-link").eq(2);
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

  get addImageBtn() {
    return cy.get("button").eq(2);
  }

  get secondImageInput() {
    return cy.get("input").eq(-1)
  }

  get submitBtn() {
    return cy.get(":submit").eq(0);
  }

  get cancelBtn() {
    return cy.get(":submit").eq(1);
  }

  createGallery(title, description, imgUrl) {
    this.titleInput.type(title);
    this.descriptionsInput.type(description);
    this.imagesInput.type(imgUrl);
    
  }
}
export const createGalleryPage = new CreateGalleryPage();
