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
    <div className="h-full bg-gray-900 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('battles.title')}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('battles.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {theaters.map(theater => (
              <button
                key={theater.id}
                onClick={() => setSelectedTheater(theater.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredBattles.map((battle, index) => (
            <Link
              key={battle.id}
              to={`/battles/${battle.id}`}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                {battle.imageUrl ? (
                  <img
                    src={battle.imageUrl}
                    alt={t(battle.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTheaterColor(battle.theater)}`}>
                    {getTheaterLabel(battle.theater)}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {t(battle.nameKey)}
                </h2>
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{battle.startDate} - {battle.endDate}</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mb-4">
                  {t(battle.descriptionKey)}
                </p>
                <span className="inline-block px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-semibold">
                  {t(battle.resultKey)}
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
