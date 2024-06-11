describe("Forgot Password Page Tests", () => {
  beforeEach(() => {
    cy.visit("/forgotPassword");
  });

  it("should fill in the email input", () => {
    const email = "john.doe@example.com";
    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="email-input"]').should("have.value", email);
  });

  it("should submit the form", () => {
    cy.get('[data-cy="email-input"]').type("john.doe@example.com");
    cy.get('button[type="submit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully!");
    });
    cy.get('[data-cy="email-input"]').should("have.value", "");
  });
});
