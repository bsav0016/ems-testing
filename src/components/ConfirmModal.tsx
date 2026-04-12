import { useEffect } from 'react'

interface Props {
  title: string
  description: string
  confirmLabel: string
  confirmClassName?: string
  onConfirm: () => void
  onClose: () => void
}

export function ConfirmModal({
  title,
  description,
  confirmLabel,
  confirmClassName,
  onConfirm,
  onClose,
}: Props) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      {/* Panel — stop backdrop click from propagating through */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>

        <h2 className="text-lg font-semibold text-gray-900 mb-2 pr-8">{title}</h2>
        <p className="text-sm text-gray-500 mb-6">{description}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-600
              hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={
              confirmClassName ??
              'px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors cursor-pointer bg-blue-600 hover:bg-blue-700'
            }
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
