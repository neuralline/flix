import { Template } from '../global'
import { createCard } from './template'

//prepare new dom element
export const prepareUserInterface = (
  data: Template,
  mainDom: HTMLElement
): HTMLElement => {
  const videoInterface: HTMLElement = createCard(data)
  try {
    mainDom?.appendChild(videoInterface)
    return videoInterface
  } catch (err) {
    console.log('Flex: something went wrong: ', err)
    return undefined
  }
}
