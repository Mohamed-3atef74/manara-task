import "cypress-mailosaur";
const server = Cypress.env("MAILOSAUR_SERVER_ID");

export const createRandomEmail = () => {
  const randomName = `User${Date.now()}`;
  const email = `${randomName}@${server}.mailosaur.net`;
  return email;
};
export const getWelcomeEmail = (email) => {
  cy.mailosaurGetMessage(server, {
    sentTo: email,
  }).then((message) => {
    const href = message.html.links[0].href;
    cy.visit(href);
  });
};
