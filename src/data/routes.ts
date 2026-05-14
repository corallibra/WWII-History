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
      [50.0647, 19.9450], // Krakow
      [49.8175, 19.1242], // Auschwitz
      [50.0497, 20.9673]  // Deblin
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
      [48.8566, 2.3522],  // Paris
      [43.6047, 1.4442],  // Toulouse
      [43.2965, 5.3698]   // Marseille
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
  },
  {
    id: 'britain-route',
    nameKey: 'Battle of Britain Air Route',
    battleId: 'britain',
    color: '#e53e3e',
    coordinates: [
      [53.5511, -2.4829],  // Liverpool
      [51.5074, -0.1278],  // London
      [50.8503, -0.1419],  // Brighton
      [51.4700, -3.1790],  // Swansea
      [55.9533, -3.1883]   // Edinburgh
    ],
    steps: [
      {
        index: 0,
        latlng: [51.5074, -0.1278],
        label: 'London',
        duration: 1000
      },
      {
        index: 1,
        latlng: [53.5511, -2.4829],
        label: 'Liverpool',
        eventIndex: 0,
        duration: 1500
      },
      {
        index: 2,
        latlng: [55.9533, -3.1883],
        label: 'Edinburgh',
        eventIndex: 1,
        duration: 1500
      }
    ]
  },
  {
    id: 'moscow-route',
    nameKey: 'Operation Barbarossa Route',
    battleId: 'moscow',
    color: '#e53e3e',
    coordinates: [
      [52.5200, 13.4050],   // Berlin
      [50.4501, 30.5234],   // Kiev
      [53.9045, 27.5590],   // Minsk
      [55.7558, 37.6173],   // Moscow
      [59.9343, 30.3351]    // Leningrad
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
        latlng: [50.4501, 30.5234],
        label: 'Kiev',
        eventIndex: 0,
        duration: 3000
      },
      {
        index: 2,
        latlng: [53.9045, 27.5590],
        label: 'Minsk',
        eventIndex: 1,
        duration: 2000
      },
      {
        index: 3,
        latlng: [55.7558, 37.6173],
        label: 'Moscow',
        eventIndex: 2,
        duration: 2000
      }
    ]
  },
  {
    id: 'stalingrad-route',
    nameKey: 'Stalingrad Campaign Route',
    battleId: 'stalingrad',
    color: '#e53e3e',
    coordinates: [
      [52.5200, 13.4050],   // Berlin
      [48.7071, 44.5169],   // Stalingrad
      [45.0355, 41.9699],   // Rostov
      [44.5646, 33.5328],   // Sevastopol
      [51.5549, 46.0408]    // Volgograd
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
        latlng: [45.0355, 41.9699],
        label: 'Rostov',
        eventIndex: 0,
        duration: 3000
      },
      {
        index: 2,
        latlng: [48.7071, 44.5169],
        label: 'Stalingrad',
        eventIndex: 1,
        duration: 4000
      }
    ]
  },
  {
    id: 'kursk-route',
    nameKey: 'Kursk Offensive Route',
    battleId: 'kursk',
    color: '#e53e3e',
    coordinates: [
      [51.7519, 36.1979],   // Kursk
      [52.9399, 36.0671],   // Orel
      [48.4647, 34.9896],   // Kharkov
      [53.5511, 34.5075],   // Belgorod
      [54.3230, 35.0875]    // Bryansk
    ],
    steps: [
      {
        index: 0,
        latlng: [51.7519, 36.1979],
        label: 'Kursk',
        duration: 1000
      },
      {
        index: 1,
        latlng: [52.9399, 36.0671],
        label: 'Orel',
        eventIndex: 0,
        duration: 2500
      },
      {
        index: 2,
        latlng: [48.4647, 34.9896],
        label: 'Kharkov',
        eventIndex: 1,
        duration: 2500
      }
    ]
  },
  {
    id: 'normandy-route',
    nameKey: 'D-Day Invasion Route',
    battleId: 'normandy',
    color: '#3b82f6',
    coordinates: [
      [49.3399, -0.4564],   // Omaha Beach
      [49.4214, -1.4648],   // Utah Beach
      [49.2000, -0.1000],   // Gold Beach
      [49.3500, -0.5500],   // Juno Beach
      [49.3800, -0.3000],   // Sword Beach
      [48.8566, 2.3522]     // Paris
    ],
    steps: [
      {
        index: 0,
        latlng: [49.3399, -0.4564],
        label: 'Omaha Beach',
        eventIndex: 0,
        duration: 2000
      },
      {
        index: 1,
        latlng: [49.4214, -1.4648],
        label: 'Utah Beach',
        eventIndex: 1,
        duration: 1500
      },
      {
        index: 2,
        latlng: [48.8566, 2.3522],
        label: 'Paris',
        eventIndex: 2,
        duration: 3000
      }
    ]
  },
  {
    id: 'bulge-route',
    nameKey: 'Battle of the Bulge Route',
    battleId: 'bulge',
    color: '#e53e3e',
    coordinates: [
      [50.7500, 5.8500],    // Aachen
      [50.1500, 5.6500],    // Bastogne
      [49.6000, 5.8000],    // Sedan
      [50.4500, 6.2000],    // Bitburg
      [49.8000, 6.1500]     // Luxembourg
    ],
    steps: [
      {
        index: 0,
        latlng: [50.7500, 5.8500],
        label: 'Aachen',
        duration: 1000
      },
      {
        index: 1,
        latlng: [50.1500, 5.6500],
        label: 'Bastogne',
        eventIndex: 0,
        duration: 3000
      },
      {
        index: 2,
        latlng: [49.8000, 6.1500],
        label: 'Luxembourg',
        eventIndex: 1,
        duration: 2000
      }
    ]
  },
  {
    id: 'berlin-route',
    nameKey: 'Berlin Offensive Route',
    battleId: 'berlin',
    color: '#3b82f6',
    coordinates: [
      [52.5200, 13.4050],   // Berlin
      [51.0500, 13.7300],   // Dresden
      [53.0800, 12.3500],   // Rostock
      [50.7300, 14.5500],   // Prague
      [52.2200, 10.5200]    // Hannover
    ],
    steps: [
      {
        index: 0,
        latlng: [51.0500, 13.7300],
        label: 'Dresden',
        eventIndex: 0,
        duration: 2000
      },
      {
        index: 1,
        latlng: [52.5200, 13.4050],
        label: 'Berlin',
        eventIndex: 1,
        duration: 3000
      }
    ]
  },
  {
    id: 'pearlharbor-route',
    nameKey: 'Pearl Harbor Attack Route',
    battleId: 'pearl-harbor',
    color: '#e53e3e',
    coordinates: [
      [35.6762, 139.6503],  // Tokyo
      [21.3069, -157.8583], // Pearl Harbor
      [18.4333, -66.0667],  // San Juan
      [33.7405, -118.2748]  // Los Angeles
    ],
    steps: [
      {
        index: 0,
        latlng: [35.6762, 139.6503],
        label: 'Tokyo',
        duration: 1000
      },
      {
        index: 1,
        latlng: [21.3069, -157.8583],
        label: 'Pearl Harbor',
        eventIndex: 0,
        duration: 2000
      }
    ]
  },
  {
    id: 'midway-route',
    nameKey: 'Midway Battle Route',
    battleId: 'midway',
    color: '#3b82f6',
    coordinates: [
      [35.6762, 139.6503],  // Tokyo
      [28.2100, -177.3939], // Midway Atoll
      [33.7405, -118.2748], // Los Angeles
      [21.3069, -157.8583]  // Pearl Harbor
    ],
    steps: [
      {
        index: 0,
        latlng: [35.6762, 139.6503],
        label: 'Tokyo',
        duration: 1000
      },
      {
        index: 1,
        latlng: [28.2100, -177.3939],
        label: 'Midway Atoll',
        eventIndex: 0,
        duration: 3000
      }
    ]
  },
  {
    id: 'guadalcanal-route',
    nameKey: 'Guadalcanal Campaign Route',
    battleId: 'guadalcanal',
    color: '#3b82f6',
    coordinates: [
      [10.6667, 161.9500],  // Guadalcanal
      [-9.4333, 160.1000],  // Bougainville
      [-6.1667, 155.6333],  // New Guinea
      [21.3069, -157.8583]  // Pearl Harbor
    ],
    steps: [
      {
        index: 0,
        latlng: [21.3069, -157.8583],
        label: 'Pearl Harbor',
        duration: 1000
      },
      {
        index: 1,
        latlng: [10.6667, 161.9500],
        label: 'Guadalcanal',
        eventIndex: 0,
        duration: 3000
      }
    ]
  },
  {
    id: 'leyte-route',
    nameKey: 'Leyte Gulf Battle Route',
    battleId: 'leyte',
    color: '#3b82f6',
    coordinates: [
      [10.9433, 124.9267],  // Leyte
      [14.3745, 120.5685],  // Manila
      [21.3069, -157.8583], // Pearl Harbor
      [35.6762, 139.6503]   // Tokyo
    ],
    steps: [
      {
        index: 0,
        latlng: [21.3069, -157.8583],
        label: 'Pearl Harbor',
        duration: 1000
      },
      {
        index: 1,
        latlng: [10.9433, 124.9267],
        label: 'Leyte',
        eventIndex: 0,
        duration: 3000
      },
      {
        index: 2,
        latlng: [14.3745, 120.5685],
        label: 'Manila',
        eventIndex: 1,
        duration: 2000
      }
    ]
  },
  {
    id: 'iwojima-route',
    nameKey: 'Iwo Jima Campaign Route',
    battleId: 'iwojima',
    color: '#3b82f6',
    coordinates: [
      [24.7833, 141.3333],  // Iwo Jima
      [35.6762, 139.6503],  // Tokyo
      [21.3069, -157.8583]  // Pearl Harbor
    ],
    steps: [
      {
        index: 0,
        latlng: [21.3069, -157.8583],
        label: 'Pearl Harbor',
        duration: 1000
      },
      {
        index: 1,
        latlng: [24.7833, 141.3333],
        label: 'Iwo Jima',
        eventIndex: 0,
        duration: 3000
      }
    ]
  },
  {
    id: 'okinawa-route',
    nameKey: 'Okinawa Campaign Route',
    battleId: 'okinawa',
    color: '#3b82f6',
    coordinates: [
      [26.2124, 127.6809],  // Okinawa
      [35.6762, 139.6503],  // Tokyo
      [21.3069, -157.8583]  // Pearl Harbor
    ],
    steps: [
      {
        index: 0,
        latlng: [21.3069, -157.8583],
        label: 'Pearl Harbor',
        duration: 1000
      },
      {
        index: 1,
        latlng: [26.2124, 127.6809],
        label: 'Okinawa',
        eventIndex: 0,
        duration: 4000
      }
    ]
  },
  {
    id: 'alamein-route',
    nameKey: 'El Alamein Campaign Route',
    battleId: 'alamein',
    color: '#3b82f6',
    coordinates: [
      [30.0444, 28.8343],   // El Alamein
      [32.8872, 13.1913],   // Tripoli
      [31.7917, 11.2869],   // Benghazi
      [30.0444, 28.8343],   // El Alamein
      [30.0444, 31.2357]    // Cairo
    ],
    steps: [
      {
        index: 0,
        latlng: [32.8872, 13.1913],
        label: 'Tripoli',
        duration: 1000
      },
      {
        index: 1,
        latlng: [30.0444, 28.8343],
        label: 'El Alamein',
        eventIndex: 0,
        duration: 3000
      },
      {
        index: 2,
        latlng: [30.0444, 31.2357],
        label: 'Cairo',
        eventIndex: 1,
        duration: 2000
      }
    ]
  }
]
