import Onboarding from "../pages/onboarding";

const onboardingPage = new Onboarding();
export const fillPersonalInfo = (gender, location, nationality) => {
  onboardingPage.personalInfo.genderSelect().click();
  cy.contains(gender).click();
  cy.get("body").click();
  onboardingPage.personalInfo.locationSelect().click();
  cy.contains(location).click();
  cy.get("body").click();
  onboardingPage.personalInfo.nationalitySelect().type(`${nationality}{enter}`);
};

export const fillEducationalInfo = (
  isEnrolled,
  degree,
  fieldOfStudy,
  isBootcamp
) => {
  onboardingPage.educationalInfo.currentlyEnrolledRadio(isEnrolled).click();
  onboardingPage.educationalInfo.degreeSelect().click();
  cy.contains(degree).click();
  cy.get("body").click();
  onboardingPage.educationalInfo.fieldOfStudySelect().click();
  cy.contains(fieldOfStudy).click();
  cy.get("body").click();
  onboardingPage.educationalInfo.hasDoneBootcampRadio(isBootcamp).click();
};

export const fillProfessionalInfo = (role, yearsWorked) => {
  onboardingPage.professionalInfo.roleField().type(role);
  onboardingPage.professionalInfo.yearsWorkedSelect().click();
  cy.contains(yearsWorked).click();
};
