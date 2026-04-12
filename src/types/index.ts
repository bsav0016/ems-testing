export interface Source {
  id: string
  label: string
}

export interface AnswerOption {
  text: string
  isCorrect: boolean
}

export interface Question {
  questionText: string
  answerOptions: AnswerOption[]
  source: string
  reference?: string
}

export type Answers = Record<number, string | null>

export type View = 'source-select' | 'test' | 'results'

export type ResultFilter = 'all' | 'correct' | 'incorrect'
