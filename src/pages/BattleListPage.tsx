import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { battles } from '../data/battles'

const BattleListPage = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          {t('battles.title')}
        </h1>
        <p className="text-gray-400 mb-8">
          {t('battles.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {battles.map((battle) => (
            <Link
              key={battle.id}
              to={`/battles/${battle.id}`}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {t(battle.nameKey)}
              </h2>
              <p className="text-gray-400 mb-4">
                {t(battle.descriptionKey)}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {battle.startDate} - {battle.endDate}
                </span>
                <span className="text-green-400">
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
