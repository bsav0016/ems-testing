import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SourceSelectPage } from './pages/SourceSelectPage'
import { TestPage } from './pages/TestPage'
import { ResultsPage } from './pages/ResultsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SourceSelectPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
