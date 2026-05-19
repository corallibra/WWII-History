import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import HomePage from './pages/HomePage'
import BattleListPage from './pages/BattleListPage'
import BattleDetailPage from './pages/BattleDetailPage'
import MapPage from './pages/MapPage'
import CharacterListPage from './pages/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage'
import RelationshipPage from './pages/RelationshipPage'
import WeaponPage from './pages/WeaponPage'
import TimelinePage from './pages/TimelinePage'

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/battles" element={<BattleListPage />} />
            <Route path="/battles/:id" element={<BattleDetailPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/characters" element={<CharacterListPage />} />
            <Route path="/characters/:id" element={<CharacterDetailPage />} />
            <Route path="/relationships" element={<RelationshipPage />} />
            <Route path="/weapons" element={<WeaponPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
