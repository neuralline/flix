export const counter = (time: number = 15, id) => {
  let countdown: number = time
  const node = document.getElementById(id)
  const timer = setInterval(() => {
    if (countdown === 0) return clearInterval(timer)
    node.innerHTML = '' + --countdown
  }, 1000)
}
