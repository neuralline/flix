import Flix from '../src/app'
const div = document.createElement('div')
div.id = 'dom12'

test('Flix', () => {
  expect(Flix('html', '3')).toEqual(undefined)
})

test('Flix', () => {
  expect(Flix('dom12', '3')).toEqual(undefined)
})
