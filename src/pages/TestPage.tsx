import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard'
import { ConfirmModal } from '../components/ConfirmModal'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../constants'
import type { Answers, Question } from '../types'

type ModalType = 'clear' | 'return' | null

function scrollToQuestion(index: number) {
  document.getElementById(`question-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function TestPage() {
  const navigate = useNavigate()
  const [modal, setModal] = useState<ModalType>(null)

  const [activeQuestions] = useLocalStorage<Question[]>(STORAGE_KEYS.activeQuestions, [])
  const [answers, setAnswers] = useLocalStorage<Answers>(STORAGE_KEYS.answers, {})
  const [, setSubmitted] = useLocalStorage<boolean>(STORAGE_KEYS.submitted, false)

  useEffect(() => {
    if (activeQuestions.length === 0) navigate('/', { replace: true })
  }, [activeQuestions, navigate])

  const answeredCount = Object.values(answers).filter((a) => a != null).length

  function handleAnswer(index: number, answer: string | null) {
    setAnswers((prev) => ({ ...prev, [index]: answer }))
  }

  function confirmClearAll() {
    setAnswers({})
    setModal(null)
  }

  function confirmReturn() {
    localStorage.removeItem(STORAGE_KEYS.activeQuestions)
    localStorage.removeItem(STORAGE_KEYS.answers)
    localStorage.removeItem(STORAGE_KEYS.submitted)
    navigate('/')
  }

  function handleSubmit() {
    setSubmitted(true)
    navigate('/results')
  }

  if (activeQuestions.length === 0) return null

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">EMS Test 3 Study Guide</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {answeredCount} of {activeQuestions.length} answered
          </p>
        </div>
      </div>

      {/* Body: sidebar + questions */}
      <div className="max-w-5xl mx-auto px-4 pt-6 flex gap-6 items-start">

        {/* Sidebar */}
        <aside className="hidden lg:block w-52 flex-shrink-0 sticky top-[81px] max-h-[calc(100vh-81px-80px)] overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Questions
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {activeQuestions.map((_, index) => {
                const answered = answers[index] != null
                return (
                  <button
                    key={index}
                    onClick={() => scrollToQuestion(index)}
                    title={`Question ${index + 1}`}
                    className={[
                      'aspect-square rounded-md text-xs font-bold transition-colors cursor-pointer',
                      answered
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200',
                    ].join(' ')}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-3 h-3 rounded-sm bg-green-500 flex-shrink-0" />
                Answered
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-3 h-3 rounded-sm bg-gray-100 flex-shrink-0" />
                Unanswered
              </div>
            </div>
          </div>
        </aside>

        {/* Questions */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {activeQuestions.map((question, index) => (
            <div key={index} id={`question-${index}`} className="scroll-mt-24">
              <QuestionCard
                question={question}
                questionIndex={index}
                selectedAnswer={answers[index] ?? null}
                onSelect={(answer) => handleAnswer(index, answer)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModal('return')}
              className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-600
                hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Return to Test Configuration
            </button>
            <button
              onClick={() => setModal('clear')}
              className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-600
                hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Clear All Responses
            </button>
          </div>

          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors
              bg-blue-600 text-white hover:bg-blue-700 cursor-pointer
              disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Submit Test
          </button>
        </div>
      </div>

      {modal === 'clear' && (
        <ConfirmModal
          title="Clear All Responses"
          description="This will remove all of your selected answers. This cannot be undone."
          confirmLabel="Clear All"
          confirmClassName="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
          onConfirm={confirmClearAll}
          onClose={() => setModal(null)}
        />
      )}

      {modal === 'return' && (
        <ConfirmModal
          title="Return to Test Configuration"
          description="Your progress will be lost and you'll be taken back to the source selection screen."
          confirmLabel="Return"
          confirmClassName="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
          onConfirm={confirmReturn}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
