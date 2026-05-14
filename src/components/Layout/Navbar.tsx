import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useI18nStore } from '../../stores/useI18nStore'
import i18n from '../../i18n'

const Navbar = () => {
  const { t } = useTranslation()
  const { setLanguage } = useI18nStore()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
    setLanguage(newLang as 'en' | 'zh')
  }

  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-xl font-bold text-white hover:text-blue-400">
            WWII History
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/battles" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.battles')}
            </Link>
            <Link to="/map" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.map')}
            </Link>
            <Link to="/characters" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.characters')}
            </Link>
            <Link to="/relationships" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.relationships')}
            </Link>
          </div>
        </div>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          {i18n.language === 'en' ? '中文' : 'English'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
