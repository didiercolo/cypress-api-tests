/// <reference types="cypress" />
// 
context('API Tests', () => {
 
  it('Get Request', () => {
    
    cy.api({
      url: '/todos/1',
      qs: {
        a: 2,
        b: 3
      }
    }).then(({ body, messages }) => {
    
     expect(body).property('userId').to.be.a('number')
     expect(body.id).to.be.a('number')
     expect(body.title).to.be.a('string')
     expect(body.completed).to.be.a('boolean')

    })

  })
})
