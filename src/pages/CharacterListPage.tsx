import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { characters } from '../data/characters'

const CharacterListPage = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          {t('characters.title')}
        </h1>
        <p className="text-gray-400 mb-8">
          {t('characters.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <Link
              key={character.id}
              to={`/characters/${character.id}`}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {character.name}
              </h2>
              <p className="text-gray-400 mb-2">
                {character.role}
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  character.faction === 'axis'
                    ? 'bg-red-900 text-red-300'
                    : 'bg-blue-900 text-blue-300'
                }`}
              >
                {character.faction === 'axis' ? 'Axis' : 'Allies'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterListPage
