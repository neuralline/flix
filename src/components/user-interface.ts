import { counter } from './counter'
import { timer } from './timer'

//manage user interaction
export const userInterface = async (
  duration: number,
  domElement: HTMLElement
): Promise<[number, HTMLElement, string]> => {
  let userSelectedAnswer = false
  await timer(1)
  domElement.classList.add('open')
  return new Promise(async (resolve, reject) => {
    //const span = domElement.getElementsByClassName('span')
    counter(duration, 'countdown-number')
    domElement.addEventListener('click', async (e: any) => {
      e.preventDefault()
      if (userSelectedAnswer) return
      if (e.target.nodeName === 'LI' || e.target.parentNode.nodeName === 'LI') {
        e.target.closest('li').classList.add('active')
        userSelectedAnswer = true
        return resolve([2, domElement, e.target.id])
      } else if (e.target.nodeName === 'I') {
        userSelectedAnswer = true
        return resolve([0, domElement, 'closed'])
      }
    })
    await timer(duration)
    return resolve([0, domElement, 'timed-out'])
  })
}
