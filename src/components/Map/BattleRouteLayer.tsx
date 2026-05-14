import { Polyline, Marker, Popup } from 'react-leaflet'
import { routes } from '../../data/routes'
import { useMapStore } from '../../stores/useMapStore'
import { useBattleStore } from '../../stores/useBattleStore'

const BattleRouteLayer = () => {
  const { visibleLayers } = useMapStore()
  const { currentStep } = useBattleStore()

  return (
    <>
      {routes.map((route) => {
        if (!visibleLayers.includes(route.id)) return null

        return (
          <div key={route.id}>
            <Polyline
              positions={route.coordinates}
              color={route.color}
              weight={4}
              opacity={0.8}
            />
            {route.steps.slice(0, currentStep + 1).map((step) => (
              <Marker key={step.index} position={step.latlng}>
                <Popup>{step.label}</Popup>
              </Marker>
            ))}
          </div>
        )
      })}
    </>
  )
}

export default BattleRouteLayer
