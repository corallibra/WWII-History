import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { battles } from '../data/battles'

const BattleDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const battle = battles.find((b) => b.id === id)

  if (!battle) {
    return (
      <div className="h-full bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Battle not found</p>
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
        <h1 className="text-3xl font-bold text-white mb-4">
          {t(battle.nameKey)}
        </h1>
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-400">
            {battle.startDate} - {battle.endDate}
          </span>
          <span className="text-green-400 text-lg font-semibold">
            {t(battle.resultKey)}
          </span>
        </div>

        <p className="text-gray-300 mb-8 text-lg">
          {t(battle.descriptionKey)}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Belligerents</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="text-red-400 font-semibold mb-2">Axis Powers</h3>
              <ul className="text-gray-300">
                {battle.belligerents.axis.map((country) => (
                  <li key={country}>• {country}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="text-blue-400 font-semibold mb-2">Allied Powers</h3>
              <ul className="text-gray-300">
                {battle.belligerents.allies.map((country) => (
                  <li key={country}>• {country}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Key Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{event.title}</h3>
                  <span className="text-gray-400 text-sm">{event.date}</span>
                </div>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattleDetailPage
