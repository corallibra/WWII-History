import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { characters } from '../data/characters'

const CharacterListPage = () => {
  const { t } = useTranslation()
  const [selectedFaction, setSelectedFaction] = useState<string>('all')

  const factions = [
    { id: 'all', label: t('characters.allies') + ' & ' + t('characters.axis') },
    { id: 'allies', label: t('characters.allies') },
    { id: 'axis', label: t('characters.axis') }
  ]

  const filteredCharacters = selectedFaction === 'all'
    ? characters
    : characters.filter(character => character.faction === selectedFaction)

  return (
    <div className="h-full bg-gray-900 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('characters.title')}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {t('characters.subtitle')}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {factions.map(faction => (
              <button
                key={faction.id}
                onClick={() => setSelectedFaction(faction.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedFaction === faction.id
                    ? faction.id === 'allies' ? 'bg-blue-600 text-white' : 
                      faction.id === 'axis' ? 'bg-red-600 text-white' : 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {faction.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCharacters.map((character, index) => (
            <Link
              key={character.id}
              to={`/characters/${character.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                {character.portraitUrl && (
                  <img
                    src={character.portraitUrl}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      character.faction === 'axis'
                        ? 'bg-red-600 text-white'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {character.faction === 'axis' ? t('characters.axis') : t('characters.allies')}
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {character.name}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">{character.role}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{character.nationality}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterListPage
