import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getYears, getEventsByYear, TimelineEvent } from '../data/timeline'

const TimelinePage = () => {
  const { t } = useTranslation()
  const [selectedYear, setSelectedYear] = useState<number>(1939)

  const years = getYears()
  const events = getEventsByYear(selectedYear)

  const getCategoryColor = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'political': return 'bg-purple-600'
      case 'military': return 'bg-red-600'
      case 'diplomatic': return 'bg-blue-600'
      case 'holocaust': return 'bg-gray-600'
      case 'technology': return 'bg-yellow-600'
      default: return 'bg-gray-600'
    }
  }

  const getSideColor = (side: TimelineEvent['side']) => {
    switch (side) {
      case 'axis': return 'border-l-red-500'
      case 'allies': return 'border-l-blue-500'
      case 'neutral': return 'border-l-gray-500'
      case 'event': return 'border-l-yellow-500'
      default: return 'border-l-gray-500'
    }
  }

  return (
    <div className="h-full bg-gray-900 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{t('timeline.title')}</h1>
          <p className="text-gray-400">{t('timeline.subtitle')}</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex gap-4 sm:gap-6 pl-12 sm:pl-16 border-l-4 ${getSideColor(event.side)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 border-4 border-gray-900 z-10"></div>
                
                <div className="flex-1 bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-x-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-400">{event.year}</span>
                      {event.month && event.day && (
                        <span className="text-gray-400 text-sm">
                          {event.month}/{event.day}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(event.category)}`}>
                        {t(`timeline.category.${event.category}`)}
                      </span>
                      {event.importance === 'major' && (
                        <span className="px-3 py-1 bg-yellow-600 rounded-full text-xs font-semibold text-white">
                          {t('timeline.major')}
                        </span>
                      )}
                    </div>
                  </div>

                  {event.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={event.imageUrl}
                        alt={t(event.titleKey)}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {t(event.titleKey)}
                  </h3>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {t(event.descriptionKey)}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <span className="text-xs text-gray-500">
                      {t(`timeline.side.${event.side}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">{t('timeline.key_figures')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">{t('timeline.total_duration')}</h3>
              <p className="text-2xl font-bold text-blue-400">6 years</p>
              <p className="text-gray-400 text-sm">1939-1945</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">{t('timeline.countries_involved')}</h3>
              <p className="text-2xl font-bold text-purple-400">70+</p>
              <p className="text-gray-400 text-sm">{t('timeline.countries_description')}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">{t('timeline.death_toll')}</h3>
              <p className="text-2xl font-bold text-red-400">70-85M</p>
              <p className="text-gray-400 text-sm">{t('timeline.death_description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelinePage
