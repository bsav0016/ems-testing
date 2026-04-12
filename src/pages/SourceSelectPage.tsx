import { useNavigate } from 'react-router-dom'
import { SOURCES, QUESTIONS, getActiveQuestions } from '../data/questions'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { STORAGE_KEYS } from '../constants'
import type { Question } from '../types'

export function SourceSelectPage() {
  const navigate = useNavigate()

  const [selectedSources, setSelectedSources] = useLocalStorage<string[]>(
    STORAGE_KEYS.selectedSources,
    [],
  )
  const [, setActiveQuestions] = useLocalStorage<Question[]>(STORAGE_KEYS.activeQuestions, [])
  const [, setAnswers] = useLocalStorage<Record<number, string | null>>(STORAGE_KEYS.answers, {})
  const [, setSubmitted] = useLocalStorage<boolean>(STORAGE_KEYS.submitted, false)

  function toggleSource(id: string) {
    setSelectedSources((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    )
  }

  function handleStart() {
    const questions = getActiveQuestions(selectedSources)
    setActiveQuestions(questions)
    setAnswers({})
    setSubmitted(false)
    navigate('/test')
  }

  const canStart = selectedSources.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">EMS Test 3 Study Guide</h1>
          <p className="text-gray-500 text-sm">Select one or more question sources to begin.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Question Sources
          </h2>

          <div className="flex flex-col gap-3">
            {SOURCES.map((source) => {
              const checked = selectedSources.includes(source.id)
              const count = QUESTIONS.filter((q) => q.source === source.id).length
              return (
                <label
                  key={source.id}
                  className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors
                    select-none hover:bg-gray-50 border-gray-200"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSource(source.id)}
                    className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
                  />
                  <span className="flex-1 text-gray-800 font-medium text-sm">{source.label}</span>
                  <span className="text-xs text-gray-400 font-medium">{count} questions</span>
                </label>
              )
            })}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={!canStart}
          className="w-full py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer
            bg-blue-600 text-white hover:bg-blue-700
            disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Start Test
        </button>
      </div>
    </div>
  )
}
