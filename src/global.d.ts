export interface Template {
  id: number
  question: string
  duration: number
  author: Author
  answers: Answer[]
}

export interface Answer {
  title: string
  id: number
  image: string[]
}

export interface Author {
  first_name: string
  last_name: string
  photo: string[]
}

declare function Flex(id: string, url: string)
