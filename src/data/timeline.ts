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
  imageUrl?: string
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Invasion%20of%20Poland%201939%20German%20tanks%20WWII%20historical%20photo&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Soviet%20invasion%20of%20Poland%201939%20WWII%20historical%20photo&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Britain%20and%20France%20declare%20war%201939%20WWII%20historical%20newspaper&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=German%20invasion%20of%20France%201940%20Blitzkrieg%20tanks%20WWII&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dunkirk%20evacuation%201940%20small%20boats%20soldiers%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=France%20surrenders%201940%20German%20victory%20WWII%20historical&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Britain%201940%20Spitfire%20aircraft%20aerial%20combat%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Operation%20Barbarossa%201941%20German%20invasion%20of%20Soviet%20Union%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pearl%20Harbor%20attack%201941%20Japanese%20planes%20burning%20ships%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=FDR%20declares%20war%20on%20Japan%201941%20WWII%20historical%20photo&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Midway%201942%20aircraft%20carriers%20naval%20battle%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20El%20Alamein%201942%20British%20tanks%20North%20Africa%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Stalingrad%201942%20urban%20warfare%20destroyed%20city%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Kursk%201943%20massive%20tank%20battle%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Italy%20surrenders%201943%20WWII%20historical%20photo&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=D-Day%20Normandy%201944%20Allied%20troops%20landing%20beach%20WWII&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liberation%20of%20Paris%201944%20Free%20French%20troops%20WWII%20celebration&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20the%20Bulge%201944%20winter%20snow%20American%20soldiers%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Leningrad%20blockade%20lifted%201945%20Soviet%20troops%20WWII&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Vistula-Oder%20offensive%201945%20Soviet%20advance%20WWII&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Okinawa%201945%20amphibious%20landing%20WWII&image_size=landscape_4_3'
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
    importance: 'significant',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mussolini%20captured%201945%20Italian%20partisans%20WWII%20historical&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Berlin%20bunker%201945%20end%20of%20Hitler%20WWII%20historical%20illustration&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=V-E%20Day%201945%20Germany%20surrenders%20Allied%20victory%20WWII%20celebration&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hiroshima%20atomic%20bomb%201945%20mushroom%20cloud%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nagasaki%20atomic%20bomb%201945%20WWII%20historical%20photo&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=V-J%20Day%201945%20Japan%20surrenders%20celebration%20WWII&image_size=landscape_4_3'
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
    importance: 'major',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=USS%20Missouri%20surrender%20ceremony%201945%20WWII%20historical%20photo&image_size=landscape_4_3'
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
