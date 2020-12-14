export interface Template {
  id: string
  question: string
  duration: number
  author: Author
  answers: [Answer]
}

export interface Answer {
  title: string
  id: string
  image: [{}]
}

export interface Author {
  first_name: string
  last_name: string
  photo: [{}]
}

declare function Flex(id: string, url: string)
