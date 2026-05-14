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
  theater: 'europe' | 'pacific' | 'africa' | 'asia'
  significance: string
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
    routeId: 'poland-route',
    theater: 'europe',
    significance: '标志着第二次世界大战的正式爆发'
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
    routeId: 'france-route',
    theater: 'europe',
    significance: '德国成功占领法国，确立欧洲大陆霸权'
  },
  {
    id: 'britain',
    nameKey: 'battles.britain.name',
    startDate: '1940-07-10',
    endDate: '1940-10-31',
    resultKey: 'battles.britain.result',
    descriptionKey: 'battles.britain.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['United Kingdom']
    },
    eventsKey: 'battles.britain.events',
    routeId: 'britain-route',
    theater: 'europe',
    significance: '德国首次重大失败，迫使希特勒放弃入侵英国计划'
  },
  {
    id: 'moscow',
    nameKey: 'battles.moscow.name',
    startDate: '1941-10-02',
    endDate: '1942-01-07',
    resultKey: 'battles.moscow.result',
    descriptionKey: 'battles.moscow.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.moscow.events',
    routeId: 'moscow-route',
    theater: 'europe',
    significance: '打破德军不可战胜神话，标志闪电战破产'
  },
  {
    id: 'stalingrad',
    nameKey: 'battles.stalingrad.name',
    startDate: '1942-08-23',
    endDate: '1943-02-02',
    resultKey: 'battles.stalingrad.result',
    descriptionKey: 'battles.stalingrad.description',
    belligerents: {
      axis: ['Germany', 'Romania', 'Hungary', 'Italy'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.stalingrad.events',
    routeId: 'stalingrad-route',
    theater: 'europe',
    significance: '二战转折点，德军第六集团军被全歼'
  },
  {
    id: 'kursk',
    nameKey: 'battles.kursk.name',
    startDate: '1943-07-05',
    endDate: '1943-08-23',
    resultKey: 'battles.kursk.result',
    descriptionKey: 'battles.kursk.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.kursk.events',
    routeId: 'kursk-route',
    theater: 'europe',
    significance: '历史上最大规模坦克战，德军失去东线进攻能力'
  },
  {
    id: 'normandy',
    nameKey: 'battles.normandy.name',
    startDate: '1944-06-06',
    endDate: '1944-08-25',
    resultKey: 'battles.normandy.result',
    descriptionKey: 'battles.normandy.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['United States', 'United Kingdom', 'Canada', 'France']
    },
    eventsKey: 'battles.normandy.events',
    routeId: 'normandy-route',
    theater: 'europe',
    significance: '开辟欧洲第二战场，开始解放西欧'
  },
  {
    id: 'bulge',
    nameKey: 'battles.bulge.name',
    startDate: '1944-12-16',
    endDate: '1945-01-25',
    resultKey: 'battles.bulge.result',
    descriptionKey: 'battles.bulge.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['United States', 'United Kingdom', 'France', 'Belgium']
    },
    eventsKey: 'battles.bulge.events',
    routeId: 'bulge-route',
    theater: 'europe',
    significance: '希特勒最后一次大规模进攻，以失败告终'
  },
  {
    id: 'berlin',
    nameKey: 'battles.berlin.name',
    startDate: '1945-04-16',
    endDate: '1945-05-08',
    resultKey: 'battles.berlin.result',
    descriptionKey: 'battles.berlin.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.berlin.events',
    routeId: 'berlin-route',
    theater: 'europe',
    significance: '纳粹德国灭亡，欧洲战场结束'
  },
  {
    id: 'pearl-harbor',
    nameKey: 'battles.pearlharbor.name',
    startDate: '1941-12-07',
    endDate: '1941-12-07',
    resultKey: 'battles.pearlharbor.result',
    descriptionKey: 'battles.pearlharbor.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States']
    },
    eventsKey: 'battles.pearlharbor.events',
    routeId: 'pearlharbor-route',
    theater: 'pacific',
    significance: '美国参战，二战升级为全球战争'
  },
  {
    id: 'midway',
    nameKey: 'battles.midway.name',
    startDate: '1942-06-04',
    endDate: '1942-06-07',
    resultKey: 'battles.midway.result',
    descriptionKey: 'battles.midway.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States']
    },
    eventsKey: 'battles.midway.events',
    routeId: 'midway-route',
    theater: 'pacific',
    significance: '太平洋战场转折点，日本海军遭受重创'
  },
  {
    id: 'guadalcanal',
    nameKey: 'battles.guadalcanal.name',
    startDate: '1942-08-07',
    endDate: '1943-02-09',
    resultKey: 'battles.guadalcanal.result',
    descriptionKey: 'battles.guadalcanal.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States']
    },
    eventsKey: 'battles.guadalcanal.events',
    routeId: 'guadalcanal-route',
    theater: 'pacific',
    significance: '盟军首次大规模反攻，扭转太平洋战局'
  },
  {
    id: 'leyte',
    nameKey: 'battles.leyte.name',
    startDate: '1944-10-23',
    endDate: '1944-10-26',
    resultKey: 'battles.leyte.result',
    descriptionKey: 'battles.leyte.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States', 'Philippines', 'Australia']
    },
    eventsKey: 'battles.leyte.events',
    routeId: 'leyte-route',
    theater: 'pacific',
    significance: '历史最大海战，日本海军丧失作战能力'
  },
  {
    id: 'iwojima',
    nameKey: 'battles.iwojima.name',
    startDate: '1945-02-19',
    endDate: '1945-03-26',
    resultKey: 'battles.iwojima.result',
    descriptionKey: 'battles.iwojima.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States']
    },
    eventsKey: 'battles.iwojima.events',
    routeId: 'iwojima-route',
    theater: 'pacific',
    significance: '为轰炸日本本土提供重要基地'
  },
  {
    id: 'okinawa',
    nameKey: 'battles.okinawa.name',
    startDate: '1945-04-01',
    endDate: '1945-06-22',
    resultKey: 'battles.okinawa.result',
    descriptionKey: 'battles.okinawa.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States']
    },
    eventsKey: 'battles.okinawa.events',
    routeId: 'okinawa-route',
    theater: 'pacific',
    significance: '太平洋战争最后一场大规模战役'
  },
  {
    id: 'alamein',
    nameKey: 'battles.alamein.name',
    startDate: '1942-10-23',
    endDate: '1942-11-11',
    resultKey: 'battles.alamein.result',
    descriptionKey: 'battles.alamein.description',
    belligerents: {
      axis: ['Germany', 'Italy'],
      allies: ['United Kingdom', 'Australia', 'New Zealand', 'India', 'South Africa']
    },
    eventsKey: 'battles.alamein.events',
    routeId: 'alamein-route',
    theater: 'africa',
    significance: '北非战场转折点，轴心国势力被逐出北非'
  }
]
