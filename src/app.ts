import { closeUserInterface } from './components/close-user-interface'
import { prepareUserInterface } from './components/prepare-main-dom'
import { timer } from './components/timer'
import { userInterface } from './components/user-interface'

const Flix = (divId: string, url: string) => {
  const mainVideoContainer: HTMLElement = document.getElementById(divId)
  const videoElement: HTMLElement = document.getElementById('flix-movie')
  const defaultInterval: number = 1

  console.log('loading flix-movies')

  //fetch data
  const getData = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data.data.id === undefined) return
      return data.data
    } catch (err) {
      console.log(err)
      return undefined
    }
  }

  //next question please
  const nextQuestion = async (
    interval: number = 15,
    currentQuestion: number = 0
  ): Promise<void> => {
    const currentUrl = `${url}/${currentQuestion++}`
    console.log('currentUrl', currentUrl)
    try {
      await timer(interval)
      const data = await getData(currentUrl)
      if (data === undefined) return
      const newElement: HTMLElement = prepareUserInterface(
        data,
        mainVideoContainer
      )
      const userInterfaceResult = await userInterface(data.duration, newElement)
      await closeUserInterface(...userInterfaceResult)
      return nextQuestion(interval, currentQuestion)
    } catch (err) {
      console.log('Flix: critical error: ', err)
      return
    }
  }

  //initialize FLIX
  if (mainVideoContainer) {
    videoElement.addEventListener('ready', () => console.log('video ready'))
    nextQuestion(defaultInterval, 1)
    return true
  } else {
    console.log('Flix: Please provide a valid html DOM element')
    return undefined
  }
}
export default Flix

//base url: http://demo2373134.mockable.io/buff
Flix('main', 'https://demo2373134.mockable.io/buff')
