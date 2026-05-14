import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useI18nStore } from '../../stores/useI18nStore'
import i18n from '../../i18n'
import { useState } from 'react'

const Navbar = () => {
  const { t } = useTranslation()
  const { setLanguage } = useI18nStore()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLang)
    setLanguage(newLang as 'en' | 'zh')
  }

  const navItems = [
    { path: '/', label: t('navbar.home') },
    { path: '/battles', label: t('navbar.battles') },
    { path: '/map', label: t('navbar.map') },
    { path: '/characters', label: t('navbar.characters') },
    { path: '/relationships', label: t('navbar.relationships') }
  ]

  return (
    <nav className="bg-gray-800/95 backdrop-blur-md border-b border-gray-700 px-4 sm:px-6 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-8">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:block">{t('navbar.home')}</span>
          </Link>
          
          <div className="hidden md:flex space-x-4 sm:space-x-6">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  location.pathname === item.path
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300"
          >
            {i18n.language === 'en' ? t('navbar.zh') : t('navbar.en')}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-3 pb-3 border-t border-gray-700 pt-3">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-400 bg-blue-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
