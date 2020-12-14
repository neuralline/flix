import { timer } from './timer'

//close or remove interface
export const closeUserInterface = async (
  duration: number,
  domElement: HTMLElement,
  answer: string = ''
): Promise<boolean> => {
  if (duration) await timer(duration)
  try {
    domElement.classList.remove('open')
    await timer(2)
    domElement.removeEventListener('click', () => {}, false)
    domElement.remove()
    return true
  } catch (err) {
    console.log('Flex something went wrong accessing DOM')
    return false
  }
}
