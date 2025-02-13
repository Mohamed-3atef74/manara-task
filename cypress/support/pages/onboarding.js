export default class Onboarding {
  personalInfo = {
    genderSelect: () => cy.get("#gender"),
    locationSelect: () => cy.get("#currentLocation"),
    nationalitySelect: () => cy.get("#nationality"),
  };

  educationalInfo = {
    currentlyEnrolledRadio: (isEnrolled) =>
      cy.get(`[name='isCurrentlyEnrolled'][value=${isEnrolled}]`),
    degreeSelect: () => cy.get("#degree"),
    fieldOfStudySelect: () => cy.get("#fieldOfStudy"),
    hasDoneBootcampRadio: (isBootcamp) =>
      cy.get(`[name='hasDoneBootcamp'][value=${isBootcamp}]`),
  };

  professionalInfo = {
    roleField: () => cy.get("#roleName"),
    yearsWorkedSelect: () => cy.get("#userReportedYearsWorked"),
  };

  finishOnboardingButton = () => cy.get("#onboarding-end-button");
}
