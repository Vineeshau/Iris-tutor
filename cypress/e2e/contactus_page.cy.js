describe("Contact Us Page Tests", () => {
  beforeEach(() => {
    cy.visit("/contactus");
  });

  it("should display the Contact Form with all fields", () => {
    cy.get("h2").contains("Contact Form").should("exist");
    cy.get('[data-cy="full-name-input"]').should("exist");
    cy.get('[data-cy="email-input"]').should("exist");
    cy.get(".react-tel-input").should("exist");
    cy.get('[data-cy="company-name-input"]').should("exist");
    cy.get("select").should("exist");
    cy.get('[data-cy="message-input"]').should("exist");
    cy.get('button[type="submit"]').contains("Submit").should("exist");
  });

  it("should allow form submission when all fields are valid", () => {
    cy.get('[data-cy="full-name-input"]').type("John Doe");
    cy.get('[data-cy="email-input"]').type("john.doe@example.com");
    cy.get(".react-tel-input input").type("+1234567890");
    cy.get('[data-cy="company-name-input"]').type("John Doe Ltd");
    cy.get("select").select("51-200");
    cy.get('[data-cy="message-input"]').type("This is a test message.");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully!");
    });

    cy.get('[data-cy="full-name-input"]').should("have.value", "");
    cy.get('[data-cy="email-input"]').should("have.value", "");
    cy.get(".react-tel-input input").should("have.value", "");
    cy.get('[data-cy="company-name-input"]').should("have.value", "");
    cy.get("select").should("have.value", "");
    cy.get('[data-cy="message-input"]').should("have.value", "");
  });
});
