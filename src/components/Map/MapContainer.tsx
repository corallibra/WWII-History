import { MapContainer as LeafletMap, TileLayer, useMap, Marker, Popup, Circle } from 'react-leaflet'
import { useMapStore } from '../../stores/useMapStore'
import { useBattleStore } from '../../stores/useBattleStore'
import { useEffect, useState } from 'react'
import { battles } from '../../data/battles'
import { characters } from '../../data/characters'

const MapUpdater = () => {
  const map = useMap()
  const { center, zoom } = useMapStore()

  useEffect(() => {
    map.setView(center, zoom)
  }, [center, zoom, map])

  return null
}

const MapContainer = () => {
  const { center, zoom } = useMapStore()
  const { activeRouteId } = useBattleStore()
  const [showBattles, setShowBattles] = useState(true)
  const [showLeaders, setShowLeaders] = useState(true)

  return (
    <div className="relative h-full w-full">
      <LeafletMap
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <MapUpdater />
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {showBattles && battles.map(battle => (
          <Circle
            key={`battle-${battle.id}`}
            center={[50, 10]}
            radius={50000}
            color={battle.belligerents.axis.includes('Germany') ? '#ef4444' : '#3b82f6'}
            fillOpacity={0.3}
          >
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="font-bold text-lg mb-1">{battle.id}</h3>
                <p className="text-sm text-gray-600">
                  {battle.startDate} - {battle.endDate}
                </p>
              </div>
            </Popup>
          </Circle>
        ))}

        {showLeaders && characters.map(character => (
          character.footprints.length > 0 && (
            <Marker
              key={`leader-${character.id}`}
              position={character.footprints[0].latlng}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-lg mb-1">{character.name}</h3>
                  <p className="text-sm text-gray-600">{character.role}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {character.faction === 'axis' ? 'Axis' : 'Allies'}
                  </p>
                </div>
              </Popup>
            </Marker>
          )
        ))}

        {activeRouteId && (
          <div className="absolute top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
            <h4 className="font-bold mb-2">Route Active</h4>
            <p className="text-sm text-gray-600">{activeRouteId}</p>
          </div>
        )}
      </LeafletMap>

      <div className="absolute top-4 left-4 z-50 bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-700">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowBattles(!showBattles)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                showBattles ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Battle Locations
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLeaders(!showLeaders)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                showLeaders ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              Leader Footprints
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapContainer
