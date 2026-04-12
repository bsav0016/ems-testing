import type { Question } from '../types'

interface Props {
  question: Question
  questionIndex: number
  selectedAnswer: string | null
  onSelect: (answer: string | null) => void
}

export function QuestionCard({ question, questionIndex, selectedAnswer, onSelect }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
        Question {questionIndex + 1}
      </p>
      <p className="text-gray-900 font-medium text-base leading-relaxed mb-5">
        {question.questionText}
      </p>

      <div className="flex flex-col gap-2">
        {question.answerOptions.map((option, i) => {
          const isSelected = selectedAnswer === option.text
          return (
            <button
              key={i}
              onClick={() => onSelect(isSelected ? null : option.text)}
              className={[
                'w-full text-left px-4 py-3 rounded-lg border text-sm leading-snug transition-colors cursor-pointer',
                isSelected
                  ? 'border-blue-500 bg-blue-50 text-blue-900 font-medium'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100',
              ].join(' ')}
            >
              {option.text}
            </button>
          )
        })}
      </div>
    </div>
  )
}
