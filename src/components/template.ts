import { Answer, Template } from '../global'

export const createCard = (data: Template): HTMLElement => {
  if (data === undefined) return
  const card: HTMLElement = document.createElement('div')
  card.id = data.id
  card.className = 'interface-container transition'
  card.innerHTML = `
  <div class="interface">
      <div id="topSection">
          <div class="author">
            <img src='${data.author.photo[0]}' id="photo">
            <div id="author">
              ${data.author.first_name} ${data.author.last_name}
            </div>
          </div>
          <i id="containerCloseBtn"></i>
      </div>
      <div class="question">
          <div class="questionCounter">
           <svg
        class="complete"
        width="100"
        height="100"
        xmlns="https://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="15"></circle>
        <circle cx="20" cy="20" r="15"></circle>
      </svg>   <span id='countdown-number'>${data.duration}</span>         
          </div>
          <div id="questionMsg">${data.question}</div>
      </div>
      <ul id="answers">
      ${data.answers
        .map(
          (answer: Answer) => `<li id=${answer.id} class='transition shadow'>
                      <img src='${answer.image[0]}' class="ico" alt='profile' />
                      <div>${answer.title}</div>
                    </li>`
        )
        .join('')}
      </ul>
</div>`

  return card
}
