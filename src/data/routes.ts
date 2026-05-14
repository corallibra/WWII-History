export interface RouteStep {
  index: number
  latlng: [number, number]
  label: string
  eventIndex?: number
  duration: number
}

export interface Route {
  id: string
  nameKey: string
  battleId: string
  color: string
  coordinates: [number, number][]
  steps: RouteStep[]
}

export const routes: Route[] = [
  {
    id: 'poland-route',
    nameKey: 'Poland Invasion Route',
    battleId: 'poland',
    color: '#e53e3e',
    coordinates: [
      [52.5200, 13.4050], // Berlin
      [52.2298, 21.0118], // Warsaw
      [50.0647, 19.9450]  // Krakow
    ],
    steps: [
      {
        index: 0,
        latlng: [52.5200, 13.4050],
        label: 'Berlin',
        duration: 1000
      },
      {
        index: 1,
        latlng: [52.2298, 21.0118],
        label: 'Warsaw',
        eventIndex: 0,
        duration: 2000
      },
      {
        index: 2,
        latlng: [50.0647, 19.9450],
        label: 'Krakow',
        eventIndex: 2,
        duration: 2000
      }
    ]
  },
  {
    id: 'france-route',
    nameKey: 'France Invasion Route',
    battleId: 'france',
    color: '#e53e3e',
    coordinates: [
      [50.9375, 6.9603],  // Cologne
      [49.4432, 1.0999],  // Sedan
      [48.8566, 2.3522]   // Paris
    ],
    steps: [
      {
        index: 0,
        latlng: [50.9375, 6.9603],
        label: 'Cologne',
        duration: 1000
      },
      {
        index: 1,
        latlng: [49.4432, 1.0999],
        label: 'Sedan',
        eventIndex: 0,
        duration: 2000
      },
      {
        index: 2,
        latlng: [48.8566, 2.3522],
        label: 'Paris',
        eventIndex: 1,
        duration: 2000
      }
    ]
  }
]
