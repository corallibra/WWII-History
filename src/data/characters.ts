export interface Character {
  id: string
  name: string
  nationality: string
  role: string
  faction: 'axis' | 'allies'
  biography: string
  battles: string[]
  image?: string
  footprints: Array<{
    date: string
    location: string
    latlng: [number, number]
    description: string
  }>
}

export const characters: Character[] = [
  {
    id: 'hitler',
    name: 'Adolf Hitler',
    nationality: 'Germany',
    role: 'Führer of Nazi Germany',
    faction: 'axis',
    biography: 'Leader of Nazi Germany from 1934 to 1945.',
    battles: ['poland', 'france'],
    footprints: [
      {
        date: '1933-01-30',
        location: 'Berlin',
        latlng: [52.5200, 13.4050],
        description: 'Appointed Chancellor of Germany'
      },
      {
        date: '1939-09-01',
        location: 'Berlin',
        latlng: [52.5200, 13.4050],
        description: 'Orders invasion of Poland'
      }
    ]
  },
  {
    id: 'churchill',
    name: 'Winston Churchill',
    nationality: 'United Kingdom',
    role: 'Prime Minister of the UK',
    faction: 'allies',
    biography: 'Prime Minister of the United Kingdom during World War II.',
    battles: ['france'],
    footprints: [
      {
        date: '1940-05-10',
        location: 'London',
        latlng: [51.5074, -0.1278],
        description: 'Becomes Prime Minister'
      }
    ]
  }
]
