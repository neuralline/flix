const mockUrl = 'https://jsonplaceholder.cypress.io/comments'

const url = 'https://demo2373134.mockable.io/buff/1'

context('Mange Api automation test', () => {
  it('control api test', () => {
    cy.request(mockUrl).should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

  it('this should work', () => {
    cy.request(url).should(response => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })
})
