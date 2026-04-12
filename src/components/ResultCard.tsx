import type { Question } from '../types'

interface Props {
  question: Question
  questionIndex: number
  selectedAnswer: string | null
}

function getReferenceLabel(source: string, reference?: string): string | null {
  if (source === 'study-guide' && reference) return `Test 3 Study Guide Question ${reference}`
  if (source === 'test-1a') return 'Test 1'
  if (source === 'test-2a') return 'Test 2'
  return null
}

export function ResultCard({ question, questionIndex, selectedAnswer }: Props) {
  const isCorrect =
    selectedAnswer != null &&
    (question.answerOptions.find((o) => o.text === selectedAnswer)?.isCorrect ?? false)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Correct / Incorrect label */}
      <p
        className={[
          'text-sm font-bold uppercase tracking-wide mb-3',
          isCorrect ? 'text-correct' : 'text-incorrect',
        ].join(' ')}
      >
        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
      </p>

      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
        Question {questionIndex + 1}
      </p>
      <p className="text-gray-900 font-medium text-base leading-relaxed mb-3">
        {question.questionText}
      </p>

      {getReferenceLabel(question.source, question.reference) && (
        <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-2 mb-4">
          Reference: {getReferenceLabel(question.source, question.reference)}
        </p>
      )}

      <div className="flex flex-col gap-2">
        {question.answerOptions.map((option, i) => {
          const isUserAnswer = selectedAnswer === option.text
          const isCorrectAnswer = option.isCorrect

          let className =
            'w-full text-left px-4 py-3 rounded-lg border text-sm leading-snug'

          if (isUserAnswer && isCorrectAnswer) {
            className += ' border-correct bg-correct-bg text-correct font-bold'
          } else if (isUserAnswer && !isCorrectAnswer) {
            className += ' border-incorrect bg-incorrect-bg text-incorrect font-bold'
          } else if (!isUserAnswer && isCorrectAnswer) {
            className += ' border-correct bg-correct-bg text-correct'
          } else {
            className += ' border-gray-200 bg-gray-50 text-gray-500'
          }

          return (
            <div key={i} className={className}>
              {isUserAnswer && (
                <span className="font-bold mr-1">(Your Answer)</span>
              )}
              {!isUserAnswer && isCorrectAnswer && (
                <span className="font-bold mr-1">(Correct Answer)</span>
              )}
              {option.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}
