describe('Test contact form', () => {
  it('Visit, fill and submit form', () => {
    // Visit the page
    cy.visit('http://localhost:3000')

    // Fills out the form
    cy.get('[data-test="email"]').type("doe@gmail.com"); // Type email
    cy.get('[data-test="name"]').type("John Doe"); // Type name
    cy.get('[data-test="message"]').type("Hi, I'm John Doe"); // Type message
    cy.get('[data-test="submit"]').click(); // Click on submit button

    // Check if the success message is displayed
    cy.get('[data-test="success-message"]')
      .should("exist")
      .contains("Message sent successfully");
  })
})
