import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { battles, Battle } from '../data/battles'

const BattleListPage = () => {
  const { t } = useTranslation()
  const [selectedTheater, setSelectedTheater] = useState<string>('all')

  const theaters = [
    { id: 'all', label: t('battles.allTheaters') },
    { id: 'europe', label: t('battles.europe') },
    { id: 'pacific', label: t('battles.pacific') },
    { id: 'africa', label: t('battles.africa') }
  ]

  const filteredBattles = selectedTheater === 'all' 
    ? battles 
    : battles.filter(battle => battle.theater === selectedTheater)

  const getTheaterColor = (theater: Battle['theater']) => {
    switch (theater) {
      case 'europe': return 'bg-blue-600'
      case 'pacific': return 'bg-cyan-600'
      case 'africa': return 'bg-yellow-600'
      case 'asia': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  const getTheaterLabel = (theater: Battle['theater']) => {
    switch (theater) {
      case 'europe': return t('battles.europe')
      case 'pacific': return t('battles.pacific')
      case 'africa': return t('battles.africa')
      case 'asia': return t('battles.asia')
      default: return 'Unknown'
    }
  }

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {t('battles.title')}
            </h1>
            <p className="text-gray-400">
              {t('battles.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {theaters.map(theater => (
              <button
                key={theater.id}
                onClick={() => setSelectedTheater(theater.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedTheater === theater.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {theater.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBattles.map((battle, index) => (
            <Link
              key={battle.id}
              to={`/battles/${battle.id}`}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTheaterColor(battle.theater)}`}>
                  {getTheaterLabel(battle.theater)}
                </span>
                <span className="text-green-400 text-sm font-medium">
                  {t(battle.resultKey)}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {t(battle.nameKey)}
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {t(battle.descriptionKey)}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {battle.startDate} - {battle.endDate}
                </span>
                <span className="text-gray-500">
                  {t('battles.significance')}: {battle.significance}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BattleListPage
