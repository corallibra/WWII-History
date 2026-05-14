import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet'
import { useMapStore } from '../../stores/useMapStore'
import BattleRouteLayer from './BattleRouteLayer'
import { useEffect } from 'react'

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

  return (
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
      <BattleRouteLayer />
    </LeafletMap>
  )
}

export default MapContainer
