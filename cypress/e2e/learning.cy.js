import { createTestUser } from "../support/helpers/register";

before(() => {
  createTestUser();
});

beforeEach(() => {
  createTestUser();
  cy.visit("/dashboard");
});

it("Verify that user is able to mark a task as completed", () => {
  cy.visit("/learning/18");
  cy.get("[id*='course-start-button']").first().click();
  cy.url().should("contain", "/learning/18/54/classroom");
  cy.contains("h4", "The Age of Data: Why Data Matters").should("exist");
  cy.get("[role='checkbox']").should("have.attr", "aria-checked", "false");
  cy.get("[role='checkbox']").click();
  cy.get("[role='checkbox']").should("have.attr", "aria-checked", "true");
});

it("Verify that navigating to a video task is displaying a video thumbnail", () => {
  cy.visit("/learning/18/54/classroom");
  cy.contains("p", "The Data Team: Roles and Responsibilities").click();
  cy.contains("h4", "The Data Team: Roles and Responsibilities").should(
    "exist"
  );
  cy.get("img[alt='Video Thumbnail']").should("exist");
});

it("Verify that completing all tasks in a module correctly updates the info bar", () => {
  cy.visit("/learning/9");
  cy.get("[id*='course-start-button']").first().click();
  cy.contains("0/3 Completed").should("exist");
  cy.get("button[class*='items-start']")
    .its("length")
    .then((count) => {
      for (let i = 0; i < count; i++) {
        cy.get("[role='checkbox']").click();
        cy.get("#task-header-next-button").click();
      }
    });

  cy.contains("1/3 Completed").should("exist");
});

it.skip("Verify that user can go to the next tasks until the end of the course", () => {
  cy.visit("/learning/20");
  cy.get("[id*='course-start-button']").first().click();
  for (let j = 0; j < 3; j++) {
    cy.get("button[class*='items-start']")
      .its("length")
      .then((count) => {
        for (let i = 0; i < count; i++) {
          cy.get("[role='checkbox']").click();
          cy.get("#task-header-next-button").click();
        }
        if (j == 3) {
          cy.get("#quiz-skip-knowledge-review").click();
          cy.get("#skip-quiz-confirm").click();
        }
      });
  }
  cy.contains("You finished the Introduction to DevOPS!").should("exist");
});
