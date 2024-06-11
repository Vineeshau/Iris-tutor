describe("Sign Up Page Tests", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("should display the Sign Up Form with all fields", () => {
    cy.get("p").contains("Sign Up").should("exist");
    cy.get('[data-cy="full-name-input"]').should("exist");
    cy.get('[data-cy="email-input"]').should("exist");
    cy.get('[data-cy="password-input"]').should("exist");
    cy.get('input[type="checkbox"]').should("exist");
    cy.contains("I agree to the").should("exist");
    cy.contains("Terms").should("exist");
    cy.contains("Privacy Policy").should("exist");
    cy.get('button[type="submit"]').contains("Sign Up").should("exist");
    cy.contains("Sign In").should("exist");
  });

  it("should allow form submission when all fields are valid", () => {
    cy.get('[data-cy="full-name-input"]').type("John Doe");
    cy.get('[data-cy="email-input"]').type("johndoe@gmail.com");
    cy.get('[data-cy="password-input"]').type("password@123");
    cy.get('button[type="submit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully!");
    });
    cy.get('[data-cy="full-name-input"]').should("have.value", "");
    cy.get('[data-cy="email-input"]').should("have.value", "");
    cy.get('[data-cy="password-input"]').should("have.value", "");
  });

  it("should toggle the password visibility", () => {
    const password = "mypassword@123";
    cy.get('[data-cy="password-input"]').type(password);
    cy.wait(1000);
    cy.get(".absolute.right-4.top-9.text-xl.cursor-pointer").click();
    cy.wait(1000);
    cy.get('[data-cy="password-input"]').should("have.attr", "type", "text");
    cy.get('[data-cy="password-input"]').should("have.value", password);
    cy.get(".absolute.right-4.top-9.text-xl.cursor-pointer").click();
    cy.wait(1000);
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "type",
      "password"
    );
  });

  it("should navigate to sign-in page", () => {
    cy.contains("Sign In").click();
    cy.url().should("include", "/signin");
    cy.wait(1000);
  });
});
