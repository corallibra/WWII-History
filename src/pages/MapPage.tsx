import { useTranslation } from 'react-i18next'
import MapContainer from '../components/Map/MapContainer'
import PlaybackControl from '../components/Map/PlaybackControl'

const MapPage = () => {
  const { t } = useTranslation()

  return (
    <div className="h-full bg-gray-900 flex flex-col">
      <div className="flex-1 relative">
        <MapContainer />
      </div>
      <PlaybackControl />
    </div>
  )
}

export default MapPage
