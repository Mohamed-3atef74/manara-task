To run the tests:
1) npm i
2) Add the attached .env file to the root of the project
3) npx cypress open to run tests in Open mode
4) npx cypress run to run tests in headless mode

- I've used Cypress along with some page objects
- I've used mailosaur to receive mail to verify the registered email
- I've used cy.session() to not login for each scenario which would have taken a lot of time
- All tests are automatable, I skipped the last scenario intentionally as there's a UI issue that made me not able to proceed.
- A lot of enhancements could have been made like having page objects for all tests and also including api calls to make the tests faster, but for the sake of time I didn't do that
