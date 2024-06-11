describe("Sign In Page Tests", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("should display the sign-in form with all fields", () => {
    cy.get("p").contains("Sign In").should("exist");
    cy.get('[data-cy="email-input"]').should("exist");
    cy.get('[data-cy="password-input"]').should("exist");
    cy.get('button[type="submit"]').contains("Sign In").should("exist");
    cy.get('a[href="/signup"]').contains("Sign Up").should("exist");
    cy.get('a[href="/forgotPassword"]')
      .contains("Having trouble signing in?")
      .should("exist");
  });

  it("should allow form submission when all fields are valid", () => {
    cy.get('[data-cy="email-input"]').type("John@email.com");
    cy.get('[data-cy="password-input"]').type("john@123");
    cy.get('button[type="submit"]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Form submitted successfully!");
    });
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

  it("should navigate to sign-up and forgot password pages", () => {
    cy.contains("Sign Up").click();
    cy.url().should("include", "/signup");
    cy.wait(1000);
    cy.visit("/signin");
    cy.contains("Having trouble signing in?").click();
    cy.url().should("include", "/forgotPassword");
    cy.wait(1000);
  });
});
