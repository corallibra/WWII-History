import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center h-full bg-gray-900">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          {t('home.subtitle')}
        </p>
        <p className="text-lg text-gray-400 mb-8">
          {t('home.description')}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/battles"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors"
          >
            {t('home.cta')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
