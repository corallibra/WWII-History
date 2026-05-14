export interface BattleEvent {
  date: string
  title: string
  description: string
  latlng: [number, number]
}

export interface Battle {
  id: string
  nameKey: string
  startDate: string
  endDate: string
  resultKey: string
  descriptionKey: string
  belligerents: {
    axis: string[]
    allies: string[]
  }
  eventsKey: string
  routeId: string
}

export const battles: Battle[] = [
  {
    id: 'poland',
    nameKey: 'battles.poland.name',
    startDate: '1939-09-01',
    endDate: '1939-10-06',
    resultKey: 'battles.poland.result',
    descriptionKey: 'battles.poland.description',
    belligerents: {
      axis: ['Germany', 'Soviet Union'],
      allies: ['Poland']
    },
    eventsKey: 'battles.poland.events',
    routeId: 'poland-route'
  },
  {
    id: 'france',
    nameKey: 'battles.france.name',
    startDate: '1940-05-10',
    endDate: '1940-06-25',
    resultKey: 'battles.france.result',
    descriptionKey: 'battles.france.description',
    belligerents: {
      axis: ['Germany', 'Italy'],
      allies: ['France', 'United Kingdom', 'Belgium', 'Netherlands', 'Luxembourg']
    },
    eventsKey: 'battles.france.events',
    routeId: 'france-route'
  }
]
