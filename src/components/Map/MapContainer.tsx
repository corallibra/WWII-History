import { useEffect, useRef, useState } from 'react'
import { useMapStore } from '../../stores/useMapStore'
import { useBattleStore } from '../../stores/useBattleStore'
import { battles } from '../../data/battles'
import { characters } from '../../data/characters'

declare const BMap: any

const MapContainer = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const { center, zoom } = useMapStore()
  const { activeRouteId } = useBattleStore()
  const [showBattles, setShowBattles] = useState(true)
  const [showLeaders, setShowLeaders] = useState(true)
  const markersRef = useRef<any[]>([])
  const overlaysRef = useRef<any[]>([])

  useEffect(() => {
    if (!mapRef.current || typeof BMap === 'undefined') return

    mapInstance.current = new BMap.Map(mapRef.current)
    const baiduCenter = new BMap.Point(center[1], center[0])
    mapInstance.current.centerAndZoom(baiduCenter, zoom)
    mapInstance.current.enableScrollWheelZoom(true)

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy()
        mapInstance.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstance.current) return

    overlaysRef.current.forEach(overlay => {
      mapInstance.current.removeOverlay(overlay)
    })
    overlaysRef.current = []

    if (showBattles) {
      battles.forEach(battle => {
        const point = new BMap.Point(10, 50)
        const circle = new BMap.Circle(point, 500000, {
          fillColor: battle.belligerents.axis.includes('Germany') ? '#ef4444' : '#3b82f6',
          fillOpacity: 0.3,
          strokeColor: battle.belligerents.axis.includes('Germany') ? '#ef4444' : '#3b82f6',
          strokeOpacity: 0.8,
          strokeWeight: 2
        })
        mapInstance.current.addOverlay(circle)
        overlaysRef.current.push(circle)

        circle.addEventListener('click', () => {
          const infoWindow = new BMap.InfoWindow(`
            <div style="min-width: 200px;">
              <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">${battle.id}</h3>
              <p style="font-size: 12px; color: #666;">${battle.startDate} - ${battle.endDate}</p>
            </div>
          `)
          mapInstance.current.openInfoWindow(infoWindow, point)
        })
      })
    }
  }, [showBattles])

  useEffect(() => {
    if (!mapInstance.current) return

    markersRef.current.forEach(marker => {
      mapInstance.current.removeOverlay(marker)
    })
    markersRef.current = []

    if (showLeaders) {
      characters.forEach(character => {
        if (character.footprints.length > 0) {
          const [lat, lng] = character.footprints[0].latlng
          const point = new BMap.Point(lng, lat)
          const marker = new BMap.Marker(point)
          mapInstance.current.addOverlay(marker)
          markersRef.current.push(marker)

          marker.addEventListener('click', () => {
            const infoWindow = new BMap.InfoWindow(`
              <div style="min-width: 200px;">
                <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">${character.name}</h3>
                <p style="font-size: 12px; color: #666;">${character.role}</p>
                <p style="font-size: 10px; color: #999; margin-top: 4px;">${character.faction === 'axis' ? 'Axis' : 'Allies'}</p>
              </div>
            `)
            mapInstance.current.openInfoWindow(infoWindow, point)
          })
        }
      })
    }
  }, [showLeaders])

  useEffect(() => {
    if (!mapInstance.current) return
    const baiduCenter = new BMap.Point(center[1], center[0])
    mapInstance.current.setCenter(baiduCenter)
    mapInstance.current.setZoom(zoom)
  }, [center, zoom])

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
      
      {activeRouteId && (
        <div className="absolute top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
          <h4 className="font-bold mb-2">Route Active</h4>
          <p className="text-sm text-gray-600">{activeRouteId}</p>
        </div>
      )}

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
