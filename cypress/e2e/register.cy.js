import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  describe("Error Messages", () => {


    it('name input throws error for 2 chars', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="ad-input"]').type("emre");
      //assert
      cy.contains(errorMessages.ad);
    })

    it('surname input throws error for 2 chars', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="soyad-input"]').type("şa");
      //assert
      cy.contains(errorMessages.soyad);
    })

    it('email input throws error for emre@wit.', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="email-input"]').type("emre@wit.");
      //assert
      cy.contains(errorMessages.email);

    })

    it('Password input throws error for 1234', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.contains(errorMessages.password);

    })

    it('button is disabled for unvalidated inputs', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.get('[data-cy="password-input"]').should("be.disabled");

    })

  })
  describe("Form inputs validated", () => {

    it.only('button enabled for validated inputs', () => {
      //arrange
      cy.visit('http://localhost:5174/')
      // act 
      cy.get('[data-cy="ad-input"]').type("emre");
      cy.get('[data-cy="soyad-input"]').type("Şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234**");

      //assert
      cy.get('[data-cy="password-input"]').should("not.be.disabled");
    })
  })
})
