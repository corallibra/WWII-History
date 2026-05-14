import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { characters } from '../data/characters'
import { battles } from '../data/battles'

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const character = characters.find((c) => c.id === id)

  if (!character) {
    return (
      <div className="h-full bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">{t('character not found')}</p>
      </div>
    )
  }

  const participatedBattles = battles.filter(battle => 
    character.battles.includes(battle.id)
  )

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/characters"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{t('characters.backToList')}</span>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden mb-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-700 to-gray-800">
              {character.portraitUrl && (
                <img
                  src={character.portraitUrl}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800 md:block hidden"></div>
            </div>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    character.faction === 'axis'
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {character.faction === 'axis' ? t('characters.axis') : t('characters.allies')}
                </span>
                <span className="text-gray-400">{character.nationality}</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {character.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">{character.role}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {t('characters.biography')}
            </h2>
            <p className="text-gray-300 leading-relaxed">{character.biography}</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              {t('characters.achievements')}
            </h2>
            <ul className="space-y-2">
              {character.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {character.quotes && character.quotes.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              {t('characters.quotes')}
            </h2>
            <div className="space-y-4">
              {character.quotes.map((quote, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-300 italic">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {participatedBattles.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              {t('characters.battlesParticipated')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {participatedBattles.map(battle => (
                <Link
                  key={battle.id}
                  to={`/battles/${battle.id}`}
                  className="bg-gray-700/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <h3 className="text-white font-semibold">{t(battle.nameKey)}</h3>
                  <p className="text-gray-400 text-sm">{battle.startDate} - {battle.endDate}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t('characters.footprints')}
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            <div className="space-y-6">
              {character.footprints.map((footprint, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-gray-700/50 rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-semibold flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {footprint.location}
                      </h3>
                      <span className="text-gray-400 text-sm">{footprint.date}</span>
                    </div>
                    <p className="text-gray-300">{footprint.description}</p>
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

export default CharacterDetailPage
