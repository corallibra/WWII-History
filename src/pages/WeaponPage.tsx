import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { weapons, Weapon } from '../data/weapons'

const WeaponPage = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: t('weapons.allCategories') },
    { id: 'aircraft', label: t('weapons.aircraft') },
    { id: 'tank', label: t('weapons.tank') },
    { id: 'naval', label: t('weapons.naval') },
    { id: 'artillery', label: t('weapons.artillery') },
    { id: 'infantry', label: t('weapons.infantry') }
  ]

  const filteredWeapons = selectedCategory === 'all'
    ? weapons
    : weapons.filter(weapon => weapon.category === selectedCategory)

  const getCategoryColor = (category: Weapon['category']) => {
    switch (category) {
      case 'aircraft': return 'bg-blue-600'
      case 'tank': return 'bg-green-600'
      case 'naval': return 'bg-cyan-600'
      case 'artillery': return 'bg-orange-600'
      case 'infantry': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  const getCategoryIcon = (category: Weapon['category']) => {
    switch (category) {
      case 'aircraft':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )
      case 'tank':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 'naval':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      case 'artillery':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case 'infantry':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="h-full bg-gray-900 p-4 sm:p-6 md:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{t('weapons.title')}</h1>
          <p className="text-gray-400">{t('weapons.subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWeapons.map((weapon, index) => (
            <div
              key={weapon.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {weapon.imageUrl && (
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <img
                    src={weapon.imageUrl}
                    alt={t(weapon.nameKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(weapon.category)}`}>
                    {getCategoryIcon(weapon.category)}
                    <span className="ml-2">{t(`weapons.${weapon.category}`)}</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold text-white">{t(weapon.nameKey)}</h2>
                  <span className="text-gray-400 text-sm">{weapon.year}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {t(weapon.descriptionKey)}
                </p>

                <div className="space-y-2 text-xs">
                  {weapon.specifications.weight && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('weapons.weight')}:</span>
                      <span className="text-gray-300">{weapon.specifications.weight}</span>
                    </div>
                  )}
                  {weapon.specifications.speed && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('weapons.speed')}:</span>
                      <span className="text-gray-300">{weapon.specifications.speed}</span>
                    </div>
                  )}
                  {weapon.specifications.range && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('weapons.range')}:</span>
                      <span className="text-gray-300">{weapon.specifications.range}</span>
                    </div>
                  )}
                </div>

                {weapon.specifications.armament && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <span className="text-gray-500 text-xs">{t('weapons.armament')}:</span>
                    <p className="text-gray-300 text-xs mt-1">{weapon.specifications.armament}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeaponPage
