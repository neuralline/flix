context('Home page', () => {
  describe('test set up', () => {
    it('should work', () => {
      cy.visit(Cypress.env('baseUrl'))
      cy.clearLocalStorage()
      cy.getById('todo').should('have.length', 0)
    })
  })
  describe('Flix home page', () => {
    it('contains "Flix Movies" in the title', () => {
      cy.title().should('contain', 'Flix Movies')

      cy.get('video#flix-movie').should('exist')
    })
  })

  describe('Flix video player', () => {
    it('video player should work', () => {
      cy.get('video#flix-movie').should('exist')
      cy.get('video#flix-movie').then(video => {
        const element = video.get(0)
        element.muted = true
        element.play()
        return video
      })
    })
  })
})
