export default class Register {
  firstNameField = () => cy.get("#firstName");
  lastNameField = () => cy.get("#lastName");
  emailField = () => cy.get("#email");
  termsAndConditionsCheckbox = () => cy.get("#tospp");
  signUpButton = () => cy.contains("Sign up with email");
}
