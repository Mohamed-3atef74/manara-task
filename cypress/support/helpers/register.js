import Register from "../pages/register";
import { createRandomEmail, getWelcomeEmail } from "../helpers/mailosaur";
import {
  fillEducationalInfo,
  fillPersonalInfo,
  fillProfessionalInfo,
} from "../helpers/onboarding";
import Onboarding from "../pages/onboarding";
const onboardingPage = new Onboarding();
const registerPage = new Register();

export const registerToManara = (firstName, lastName, email) => {
  registerPage.firstNameField().type(firstName);
  registerPage.lastNameField().type(lastName);
  registerPage.emailField().type(email);
  registerPage.termsAndConditionsCheckbox().click();
  registerPage.signUpButton().click();
};

export const createTestUser = () => {
  const randomEmail = createRandomEmail();

  cy.session(["testUserSession"], () => {
    cy.visit("/auth/signup");
    registerToManara("test", "test", randomEmail);
    cy.url().should("contain", "verification-email-sent");

    getWelcomeEmail(randomEmail);
    cy.url().should("contain", "user-onboarding");

    cy.contains("Help us get to know you better").should("exist");
    fillPersonalInfo("Male", "Afghanistan", "Afghanistan");
    cy.contains("Next").click({ force: true });

    cy.contains("Tell us about your educational background").should("exist");
    fillEducationalInfo(false, "Bachelor's Degree", "Business", false);
    cy.contains("Next").click({ force: true });

    cy.contains("We're almost there").should("exist");
    fillProfessionalInfo("Test", "Less than 1");
    cy.contains("Next").click({ force: true });

    cy.contains("Saving user data...").should("not.exist");
    cy.wait(5000);
    onboardingPage.finishOnboardingButton().click();
    cy.url().should("contain", "dashboard");
  });

  cy.wrap(randomEmail).as("userEmail");
};
