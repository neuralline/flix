export const timer = (duration: number) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(true)
    }, duration * 1000)
  )
}
