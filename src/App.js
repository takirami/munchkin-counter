import './App.css'
import { Routes, Route } from 'react-router-dom'
import FrontPage from './modules/frontpage/Frontpage'
import Admin from './modules/admin/Admin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  )
}

export default App
