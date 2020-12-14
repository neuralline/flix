import { closeUserInterface } from './components/close-user-interface'
import { prepareUserInterface } from './components/prepare-main-dom'
import { timer } from './components/timer'
import { userInterface } from './components/user-interface'

const Flix = (divId: string, url: string) => {
  const main: HTMLElement = document.getElementById(divId)
  const defaultInterval: number = 1

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
    try {
      await timer(interval)
      const data = await getData(currentUrl)
      if (data === undefined) return
      const newElement: HTMLElement = prepareUserInterface(data, main)
      const userInterfaceResult = await userInterface(data.duration, newElement)
      await closeUserInterface(...userInterfaceResult)
      return nextQuestion(interval, currentQuestion)
    } catch (err) {
      console.log('Flix: critical error: ', err)
      return
    }
  }

  //initialize FLIX
  if (main) {
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
