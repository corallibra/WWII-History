export interface TimelineEvent {
  id: string
  date: string
  year: number
  month?: number
  day?: number
  titleKey: string
  descriptionKey: string
  category: 'political' | 'military' | 'diplomatic' | 'holocaust' | 'technology'
  side: 'axis' | 'allies' | 'neutral' | 'event'
  importance: 'major' | 'significant' | 'minor'
}

export const timeline: TimelineEvent[] = [
  {
    id: '1939-germany-invades-poland',
    date: '1939-09-01',
    year: 1939,
    month: 9,
    day: 1,
    titleKey: 'timeline.1939.invasion_poland.title',
    descriptionKey: 'timeline.1939.invasion_poland.description',
    category: 'military',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1939-soviet-invades-poland',
    date: '1939-09-17',
    year: 1939,
    month: 9,
    day: 17,
    titleKey: 'timeline.1939.invasion_soviet.title',
    descriptionKey: 'timeline.1939.invasion_soviet.description',
    category: 'military',
    side: 'allies',
    importance: 'significant'
  },
  {
    id: '1939-france-british-declare-war',
    date: '1939-09-03',
    year: 1939,
    month: 9,
    day: 3,
    titleKey: 'timeline.1939.declare_war.title',
    descriptionKey: 'timeline.1939.declare_war.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1940-germany-invades-france',
    date: '1940-05-10',
    year: 1940,
    month: 5,
    day: 10,
    titleKey: 'timeline.1940.invasion_france.title',
    descriptionKey: 'timeline.1940.invasion_france.description',
    category: 'military',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1940-dunkirk',
    date: '1940-05-26',
    year: 1940,
    month: 5,
    day: 26,
    titleKey: 'timeline.1940.dunkirk.title',
    descriptionKey: 'timeline.1940.dunkirk.description',
    category: 'military',
    side: 'allies',
    importance: 'significant'
  },
  {
    id: '1940-france-surrenders',
    date: '1940-06-22',
    year: 1940,
    month: 6,
    day: 22,
    titleKey: 'timeline.1940.surrender_france.title',
    descriptionKey: 'timeline.1940.surrender_france.description',
    category: 'political',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1940-battle-of-britain',
    date: '1940-07-10',
    year: 1940,
    month: 7,
    day: 10,
    titleKey: 'timeline.1940.battle_britain.title',
    descriptionKey: 'timeline.1940.battle_britain.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1941-operation-barbarossa',
    date: '1941-06-22',
    year: 1941,
    month: 6,
    day: 22,
    titleKey: 'timeline.1941.barbarossa.title',
    descriptionKey: 'timeline.1941.barbarossa.description',
    category: 'military',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1941-pearl-harbor',
    date: '1941-12-07',
    year: 1941,
    month: 12,
    day: 7,
    titleKey: 'timeline.1941.pearl_harbor.title',
    descriptionKey: 'timeline.1941.pearl_harbor.description',
    category: 'military',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1941-usa-enters-war',
    date: '1941-12-08',
    year: 1941,
    month: 12,
    day: 8,
    titleKey: 'timeline.1941.usa_enters.title',
    descriptionKey: 'timeline.1941.usa_enters.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1942-midway',
    date: '1942-06-04',
    year: 1942,
    month: 6,
    day: 4,
    titleKey: 'timeline.1942.midway.title',
    descriptionKey: 'timeline.1942.midway.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1942-el-alamein',
    date: '1942-10-23',
    year: 1942,
    month: 10,
    day: 23,
    titleKey: 'timeline.1942.el_alamein.title',
    descriptionKey: 'timeline.1942.el_alamein.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1942-stalingrad-begins',
    date: '1942-08-23',
    year: 1942,
    month: 8,
    day: 23,
    titleKey: 'timeline.1942.stalingrad.title',
    descriptionKey: 'timeline.1942.stalingrad.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1943-kursk',
    date: '1943-07-05',
    year: 1943,
    month: 7,
    day: 5,
    titleKey: 'timeline.1943.kursk.title',
    descriptionKey: 'timeline.1943.kursk.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1943-italy-surrenders',
    date: '1943-09-08',
    year: 1943,
    month: 9,
    day: 8,
    titleKey: 'timeline.1943.italy_surrenders.title',
    descriptionKey: 'timeline.1943.italy_surrenders.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1944-d-day',
    date: '1944-06-06',
    year: 1944,
    month: 6,
    day: 6,
    titleKey: 'timeline.1944.dday.title',
    descriptionKey: 'timeline.1944.dday.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1944-liberation-paris',
    date: '1944-08-25',
    year: 1944,
    month: 8,
    day: 25,
    titleKey: 'timeline.1944.paris.title',
    descriptionKey: 'timeline.1944.paris.description',
    category: 'military',
    side: 'allies',
    importance: 'significant'
  },
  {
    id: '1944-battle-bulge',
    date: '1944-12-16',
    year: 1944,
    month: 12,
    day: 16,
    titleKey: 'timeline.1944.bulge.title',
    descriptionKey: 'timeline.1944.bulge.description',
    category: 'military',
    side: 'axis',
    importance: 'significant'
  },
  {
    id: '1945-ysyakh',
    date: '1945-01-27',
    year: 1945,
    month: 1,
    day: 27,
    titleKey: 'timeline.1945.leningrad.title',
    descriptionKey: 'timeline.1945.leningrad.description',
    category: 'military',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1945-iariza-offensive',
    date: '1945-01-12',
    year: 1945,
    month: 1,
    day: 12,
    titleKey: 'timeline.1945.vistula.title',
    descriptionKey: 'timeline.1945.vistula.description',
    category: 'military',
    side: 'allies',
    importance: 'significant'
  },
  {
    id: '1945-okinawa',
    date: '1945-04-01',
    year: 1945,
    month: 4,
    day: 1,
    titleKey: 'timeline.1945.okinawa.title',
    descriptionKey: 'timeline.1945.okinawa.description',
    category: 'military',
    side: 'allies',
    importance: 'significant'
  },
  {
    id: '1945-mussolini-executed',
    date: '1945-04-28',
    year: 1945,
    month: 4,
    day: 28,
    titleKey: 'timeline.1945.mussolini.title',
    descriptionKey: 'timeline.1945.mussolini.description',
    category: 'political',
    side: 'axis',
    importance: 'significant'
  },
  {
    id: '1945-hitler-death',
    date: '1945-04-30',
    year: 1945,
    month: 4,
    day: 30,
    titleKey: 'timeline.1945.hitler.title',
    descriptionKey: 'timeline.1945.hitler.description',
    category: 'political',
    side: 'axis',
    importance: 'major'
  },
  {
    id: '1945-germany-surrenders',
    date: '1945-05-08',
    year: 1945,
    month: 5,
    day: 8,
    titleKey: 'timeline.1945.germany_surrenders.title',
    descriptionKey: 'timeline.1945.germany_surrenders.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1945-hiroshima',
    date: '1945-08-06',
    year: 1945,
    month: 8,
    day: 6,
    titleKey: 'timeline.1945.hiroshima.title',
    descriptionKey: 'timeline.1945.hiroshima.description',
    category: 'technology',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1945-nagasaki',
    date: '1945-08-09',
    year: 1945,
    month: 8,
    day: 9,
    titleKey: 'timeline.1945.nagasaki.title',
    descriptionKey: 'timeline.1945.nagasaki.description',
    category: 'technology',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1945-japan-surrenders',
    date: '1945-08-15',
    year: 1945,
    month: 8,
    day: 15,
    titleKey: 'timeline.1945.japan_surrenders.title',
    descriptionKey: 'timeline.1945.japan_surrenders.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  },
  {
    id: '1945-tokyo-surrender',
    date: '1945-09-02',
    year: 1945,
    month: 9,
    day: 2,
    titleKey: 'timeline.1945.tokyo_surrender.title',
    descriptionKey: 'timeline.1945.tokyo_surrender.description',
    category: 'political',
    side: 'allies',
    importance: 'major'
  }
]

export const getYears = () => {
  const years = [...new Set(timeline.map(event => event.year))]
  return years.sort((a, b) => a - b)
}

export const getEventsByYear = (year: number) => {
  return timeline
    .filter(event => event.year === year)
    .sort((a, b) => {
      if (a.month !== b.month) return (a.month || 0) - (b.month || 0)
      return (a.day || 0) - (b.day || 0)
    })
}
