import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResultCard } from '../components/ResultCard'
import { ConfirmModal } from '../components/ConfirmModal'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../constants'
import type { Answers, Question, ResultFilter } from '../types'

export function ResultsPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<ResultFilter>('all')
  const [showConfirm, setShowConfirm] = useState(false)

  const [activeQuestions] = useLocalStorage<Question[]>(STORAGE_KEYS.activeQuestions, [])
  const [answers] = useLocalStorage<Answers>(STORAGE_KEYS.answers, {})
  const [submitted] = useLocalStorage<boolean>(STORAGE_KEYS.submitted, false)

  useEffect(() => {
    if (!submitted || activeQuestions.length === 0) navigate('/', { replace: true })
  }, [submitted, activeQuestions, navigate])

  function handleTryAgain() {
    localStorage.removeItem(STORAGE_KEYS.activeQuestions)
    localStorage.removeItem(STORAGE_KEYS.answers)
    localStorage.removeItem(STORAGE_KEYS.submitted)
    navigate('/')
  }

  if (!submitted || activeQuestions.length === 0) return null

  const correctCount = activeQuestions.filter((question, i) => {
    const selected = answers[i] ?? null
    return selected != null && question.answerOptions.find((o) => o.text === selected)?.isCorrect
  }).length

  const total = activeQuestions.length
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0

  const filteredEntries = activeQuestions
    .map((question, index) => {
      const selected = answers[index] ?? null
      const isCorrect =
        selected != null &&
        (question.answerOptions.find((o) => o.text === selected)?.isCorrect ?? false)
      return { question, index, selected, isCorrect }
    })
    .filter(({ isCorrect }) => {
      if (filter === 'correct') return isCorrect
      if (filter === 'incorrect') return !isCorrect
      return true
    })

  const filterButtons: { label: string; value: ResultFilter }[] = [
    { label: 'See All', value: 'all' },
    { label: 'See Correct', value: 'correct' },
    { label: 'See Incorrect', value: 'incorrect' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-5 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Results</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                {correctCount} / {total} correct
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={[
                  'text-4xl font-bold',
                  percentage >= 70 ? 'text-correct' : 'text-incorrect',
                ].join(' ')}
              >
                {percentage}%
              </span>
              <button
                onClick={() => setShowConfirm(true)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold
                  text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-2">
            {filterButtons.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={[
                  'px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer',
                  filter === value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Question results */}
      <div className="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-4">
        {filteredEntries.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-12">No questions to show.</p>
        ) : (
          filteredEntries.map(({ question, index, selected }) => (
            <ResultCard
              key={index}
              question={question}
              questionIndex={index}
              selectedAnswer={selected}
            />
          ))
        )}

      </div>
      {showConfirm && (
        <ConfirmModal
          title="Try Again?"
          description="This will clear your results and return you to the source selection screen."
          confirmLabel="Try Again"
          onConfirm={handleTryAgain}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </div>
  )
}
