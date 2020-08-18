/// <reference types="cypress" />
// 
context('API Tests', () => {
 
  it('Get Request', () => {
    
    // Execute GET request to http:localhost:3000/todos/1
    cy.api({
      url: '/todos/1'
    }).then(({ body }) => {

     // Check response squema
     expect(body).property('userId').to.be.a('number')
     expect(body.id).to.be.a('number')
     expect(body.title).to.be.a('string')
     expect(body.completed).to.be.a('boolean')
    })
    .its('status').should('equal', 200)
  })

  it('POST Request', () => {
    
    // Execute POST request to http:localhost:3000/
    cy.api({
      method:"POST",
      url: '/todos',
      body:{
        "userId": 1,
        "title": "Test API POST",
      }
    }).then(({ body }) => {

     // Check response squema
     expect(body).property('userId').to.be.a('number')
     expect(body.id).to.be.a('number')
     expect(body.title).to.be.a('string')
    })
    .its('status').should('equal', 201)
  })
})
