import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { battles } from '../data/battles'
import { characters } from '../data/characters'

const HomePage = () => {
  const { t } = useTranslation()

  const featuredBattles = battles.slice(0, 4)
  const featuredCharacters = characters.slice(0, 6)

  return (
    <div className="min-h-full bg-gray-900">
      <div className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-5 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500 rounded-full blur-[80px] sm:blur-[100px]"></div>
          <div className="absolute bottom-10 right-5 w-48 h-48 sm:w-80 sm:h-80 bg-red-500 rounded-full blur-[80px] sm:blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-[100px] sm:blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/80 rounded-full mb-4 sm:mb-6 border border-gray-700 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-xs sm:text-sm">{t('home.title')}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">{t('home.title')}</span>
            <span className="block text-blue-400 mt-2">{t('home.subtitle')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/battles"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              {t('home.cta')}
            </Link>
            <Link
              to="/map"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 border border-gray-700 transform hover:scale-105"
            >
              {t('navbar.map')}
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('battles.title')}</h2>
              <p className="text-gray-400 text-sm sm:text-base">{t('battles.subtitle')}</p>
            </div>
            <Link
              to="/battles"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 sm:mt-0"
            >
              <span className="text-sm sm:text-base">{t('view all')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredBattles.map((battle, index) => (
              <Link
                key={battle.id}
                to={`/battles/${battle.id}`}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(`World War II battle scene ${battle.id} historical war photography`)}&image_size=landscape_4_3`}
                    alt={t(battle.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-blue-400 transition-colors">
                    {t(battle.nameKey)}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{battle.startDate} - {battle.endDate}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 sm:px-2 sm:py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                    {t(battle.resultKey)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 py-4 sm:py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('characters.title')}</h2>
              <p className="text-gray-400 text-sm sm:text-base">{t('characters.subtitle')}</p>
            </div>
            <Link
              to="/characters"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 sm:mt-0"
            >
              <span className="text-sm sm:text-base">{t('view all')}</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {featuredCharacters.map((character, index) => (
              <Link
                key={character.id}
                to={`/characters/${character.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-105">
                  {character.portraitUrl ? (
                    <img
                      src={character.portraitUrl}
                      alt={character.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className="text-white font-semibold text-xs sm:text-sm truncate">{character.name}</p>
                    <span
                      className={`inline-block px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${
                        character.faction === 'axis' ? 'bg-red-600/80 text-white' : 'bg-blue-600/80 text-white'
                      }`}
                    >
                      {character.faction === 'axis' ? t('characters.axis') : t('characters.allies')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('navbar.map')}</h2>
                <p className="text-gray-300 text-sm sm:text-base">{t('interactive map description')}</p>
              </div>
              <Link
                to="/map"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              >
                {t('explore map')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
