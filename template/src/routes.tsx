import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}
