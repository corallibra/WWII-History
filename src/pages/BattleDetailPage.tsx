import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { battles } from '../data/battles'

const BattleDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const battle = battles.find((b) => b.id === id)

  if (!battle) {
    return (
      <div className="h-full bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">{t('battle not found')}</p>
      </div>
    )
  }

  const events = t(battle.eventsKey, { returnObjects: true }) as Array<{
    date: string
    title: string
    description: string
    latlng: [number, number]
  }>

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/battles"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('battles.backToList')}</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-8 border border-gray-700">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t(battle.nameKey)}
          </h1>
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <span className="text-gray-400 text-lg">
              {battle.startDate} - {battle.endDate}
            </span>
            <span className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold">
              {t(battle.resultKey)}
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
              {battle.theater === 'europe' ? t('battles.europe') : 
               battle.theater === 'pacific' ? t('battles.pacific') : 
               battle.theater === 'africa' ? t('battles.africa') : t('battles.asia')}
            </span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t(battle.descriptionKey)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              {t('battles.belligerents')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-900/30 p-4 rounded-lg border border-red-800/50">
                <h3 className="text-red-400 font-semibold mb-2">Axis Powers</h3>
                <ul className="space-y-1">
                  {battle.belligerents.axis.map((country) => (
                    <li key={country} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-800/50">
                <h3 className="text-blue-400 font-semibold mb-2">Allied Powers</h3>
                <ul className="space-y-1">
                  {battle.belligerents.allies.map((country) => (
                    <li key={country} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {t('battles.significance')}
            </h2>
            <p className="text-gray-300 text-lg">{battle.significance}</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('battles.events')}
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="relative flex gap-6 animate-fade-in">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold">{event.title}</h3>
                      <span className="text-gray-400 text-sm">{event.date}</span>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattleDetailPage
