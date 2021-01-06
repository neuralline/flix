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
    })
  })

  describe('Flix video player', () => {
    it('video should exist', () => {
      cy.get('video#flix-movie').should('exist')
    })
    it('video should play', () => {
      cy.get('video#flix-movie').then(video => {
        const element = video.get(0)
        element.muted = true
        element.play()
        return video
      })
    })
  })

  describe('flix-interactive-container', () => {
    it('interactive container and interface should exist', () => {
      //test interactive container exist
      cy.getById('flix-interactive-container').should('exist')
      //container should have one video interface
      cy.getById('flix-interactive-container')
        .children()
        .should('have.length', 1)
      //video interface should have 3 child elements
      //['top-section','question', 'answer']
      cy.getById('video-interface').children().should('exist')
    })
  })
})
