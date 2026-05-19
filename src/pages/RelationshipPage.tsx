import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { relationships, Relationship } from '../data/relationships'
import { characters } from '../data/characters'
import { Link } from 'react-router-dom'

const RelationshipPage = () => {
  const { t } = useTranslation()
  const [selectedType, setSelectedType] = useState<string>('all')

  const relationshipTypes: { id: string; label: string; color: string }[] = [
    { id: 'all', label: 'All', color: 'bg-purple-600' },
    { id: 'command', label: t('relationships.command'), color: 'bg-orange-600' },
    { id: 'political', label: t('relationships.political'), color: 'bg-yellow-600' },
    { id: 'enemy', label: t('relationships.enemy'), color: 'bg-red-600' },
    { id: 'allied', label: t('relationships.allied'), color: 'bg-blue-600' },
    { id: 'rival', label: t('relationships.rival'), color: 'bg-pink-600' },
    { id: 'mentor', label: t('relationships.mentor'), color: 'bg-green-600' },
    { id: 'family', label: t('relationships.family'), color: 'bg-indigo-600' }
  ]

  const filteredRelationships = selectedType === 'all'
    ? relationships
    : relationships.filter(rel => rel.type === selectedType)

  const getRelationshipColor = (type: Relationship['type']) => {
    const typeInfo = relationshipTypes.find(t => t.id === type)
    return typeInfo?.color || 'bg-gray-600'
  }

  return (
    <div className="h-full bg-gray-900 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('relationships.title')}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('relationships.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {relationshipTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedType === type.id
                    ? `${type.color} text-white`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredRelationships.map((rel, index) => {
            const source = characters.find((c) => c.id === rel.source)
            const target = characters.find((c) => c.id === rel.target)

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Link
                    to={`/characters/${rel.source}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-700 overflow-hidden mb-2 border-2 border-gray-600 group-hover:border-blue-500 transition-colors">
                      {source?.portraitUrl ? (
                        <img
                          src={source.portraitUrl}
                          alt={source.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center">{source?.name}</span>
                    <span className="text-gray-500 text-xs hidden sm:block">{source?.role}</span>
                  </Link>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      <div className="w-4 sm:w-6 h-px bg-gray-600"></div>
                      <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold text-white ${getRelationshipColor(rel.type)}`}
                      >
                        {t(`relationships.${rel.type}`)}
                      </span>
                      <div className="w-4 sm:w-6 h-px bg-gray-600"></div>
                    </div>
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>

                  <Link
                    to={`/characters/${rel.target}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-700 overflow-hidden mb-2 border-2 border-gray-600 group-hover:border-blue-500 transition-colors">
                      {target?.portraitUrl ? (
                        <img
                          src={target.portraitUrl}
                          alt={target.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center">{target?.name}</span>
                    <span className="text-gray-500 text-xs hidden sm:block">{target?.role}</span>
                  </Link>
                </div>
                <p className="text-gray-400 text-center text-xs sm:text-sm">{rel.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelationshipPage
