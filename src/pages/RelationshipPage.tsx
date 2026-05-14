import { useTranslation } from 'react-i18next'
import { relationships } from '../data/relationships'
import { characters } from '../data/characters'

const RelationshipPage = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          {t('relationships.title')}
        </h1>
        <p className="text-gray-400 mb-8">
          {t('relationships.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relationships.map((rel, index) => {
            const source = characters.find((c) => c.id === rel.source)
            const target = characters.find((c) => c.id === rel.target)

            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white">{source?.name}</h3>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      rel.type === 'enemy'
                        ? 'bg-red-900 text-red-300'
                        : rel.type === 'allied'
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {rel.type.toUpperCase()}
                  </span>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white">{target?.name}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-center">{rel.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelationshipPage
