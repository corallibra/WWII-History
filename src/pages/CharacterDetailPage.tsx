import { useParams } from 'react-router-dom'
import { characters } from '../data/characters'

const CharacterDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const character = characters.find((c) => c.id === id)

  if (!character) {
    return (
      <div className="h-full bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Character not found</p>
      </div>
    )
  }

  return (
    <div className="h-full bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">
          {character.name}
        </h1>
        <p className="text-gray-400 mb-2">
          {character.role}
        </p>
        <p className="text-gray-500 mb-8">
          {character.nationality}
        </p>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Biography</h2>
          <p className="text-gray-300">{character.biography}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Footprints</h2>
          <div className="space-y-4">
            {character.footprints.map((footprint, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold">{footprint.location}</h3>
                  <span className="text-gray-400 text-sm">{footprint.date}</span>
                </div>
                <p className="text-gray-300">{footprint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetailPage
