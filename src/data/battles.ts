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
  imageUrl?: string
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
    significance: '标志着第二次世界大战的正式爆发',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Invasion%20of%20Poland%201939%20WWII%20German%20tanks%20and%20infantry%20historical%20war%20photography&image_size=landscape_4_3'
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
    significance: '德国成功占领法国，确立欧洲大陆霸权',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20France%201940%20German%20Blitzkrieg%20tanks%20World%20War%20II%20historical%20scene&image_size=landscape_4_3'
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
    significance: '德国首次重大失败，迫使希特勒放弃入侵英国计划',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Britain%201940%20Royal%20Air%20Force%20Spitfires%20vs%20German%20Luftwaffe%20aerial%20combat&image_size=landscape_4_3'
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
    significance: '打破德军不可战胜神话，标志闪电战破产',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Moscow%201941%20winter%20warfare%20Soviet%20troops%20WWII%20historical%20photography&image_size=landscape_4_3'
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
    significance: '二战转折点，德军第六集团军被全歼',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Stalingrad%201942-1943%20urban%20warfare%20World%20War%20II%20devastated%20city&image_size=landscape_4_3'
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
    significance: '历史上最大规模坦克战，德军失去东线进攻能力',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Kursk%201943%20massive%20tank%20battle%20World%20War%20II%20German%20Tigers%20vs%20Soviet%20T-34s&image_size=landscape_4_3'
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
    significance: '开辟欧洲第二战场，开始解放西欧',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=D-Day%20Normandy%20Invasion%20June%206%201944%20Allied%20troops%20landing%20on%20beach%20World%20War%20II&image_size=landscape_4_3'
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
    significance: '希特勒最后一次大规模进攻，以失败告终',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20the%20Bulge%201944%20winter%20snow%20American%20soldiers%20WWII%20Ardennes%20offensive&image_size=landscape_4_3'
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
    significance: '纳粹德国灭亡，欧洲战场结束',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Berlin%201945%20Soviet%20troops%20raising%20flag%20on%20Reichstag%20World%20War%20II%20victory&image_size=landscape_4_3'
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
    significance: '美国参战，二战升级为全球战争',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Attack%20on%20Pearl%20Harbor%20December%207%201941%20Japanese%20planes%20battleships%20Burning%20USS%20Arizona%20WWII&image_size=landscape_4_3'
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
    significance: '太平洋战场转折点，日本海军遭受重创',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Midway%201942%20aircraft%20carriers%20naval%20battle%20US%20Navy%20vs%20Japanese%20fleet%20World%20War%20II&image_size=landscape_4_3'
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
    significance: '盟军首次大规模反攻，扭转太平洋战局',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Guadalcanal%201942%20jungle%20warfare%20US%20Marines%20Pacific%20WWII%20historical%20scene&image_size=landscape_4_3'
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
    significance: '历史最大海战，日本海军丧失作战能力',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Leyte%20Gulf%201944%20largest%20naval%20battle%20WWII%20aircraft%20carriers%20kamikaze%20attacks&image_size=landscape_4_3'
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
    significance: '为轰炸日本本土提供重要基地',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Raising%20the%20flag%20on%20Iwo%20Jima%201945%20Mount%20Suribachi%20US%20Marines%20iconic%20WWII%20photograph&image_size=landscape_4_3'
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
    significance: '太平洋战争最后一场大规模战役',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Okinawa%201945%20last%20battle%20of%20WWII%20Pacific%20amphibious%20landing%20kamikaze&image_size=landscape_4_3'
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
    significance: '北非战场转折点，轴心国势力被逐出北非',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20El%20Alamein%201942%20Montgomery%20British%208th%20Army%20desert%20tanks%20North%20Africa%20WWII&image_size=landscape_4_3'
  },
  {
    id: 'dunkirk',
    nameKey: 'battles.dunkirk.name',
    startDate: '1940-05-26',
    endDate: '1940-06-04',
    resultKey: 'battles.dunkirk.result',
    descriptionKey: 'battles.dunkirk.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['United Kingdom', 'France', 'Belgium', 'Canada', 'Netherlands']
    },
    eventsKey: 'battles.dunkirk.events',
    routeId: 'dunkirk-route',
    theater: 'europe',
    significance: '敦刻尔克大撤退，保存了盟军有生力量',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dunkirk%20Evacuation%201940%20small%20boats%20rescuing%20soldiers%20Operation%20Dynamo%20WWII%20beach%20scene&image_size=landscape_4_3'
  },
  {
    id: 'market-garden',
    nameKey: 'battles.marketgarden.name',
    startDate: '1944-09-17',
    endDate: '1944-09-26',
    resultKey: 'battles.marketgarden.result',
    descriptionKey: 'battles.marketgarden.description',
    belligerents: {
      axis: ['Germany'],
      allies: ['United States', 'United Kingdom', 'Canada', 'Poland']
    },
    eventsKey: 'battles.marketgarden.events',
    routeId: 'marketgarden-route',
    theater: 'europe',
    significance: '市场花园行动，蒙哥马利大胆计划失败',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Operation%20Market%20Garden%201944%20paratroopers%20dropping%20Arnhem%20Holland%20WWII%20aerial%20invasion&image_size=landscape_4_3'
  },
  {
    id: 'savo-island',
    nameKey: 'battles.savo.name',
    startDate: '1942-08-08',
    endDate: '1942-08-09',
    resultKey: 'battles.savo.result',
    descriptionKey: 'battles.savo.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States', 'Australia']
    },
    eventsKey: 'battles.savo.events',
    routeId: 'savo-route',
    theater: 'pacific',
    significance: '萨沃岛海战，日本海军战术胜利',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Savo%20Island%201942%20night%20naval%20battle%20cruisers%20destroyers%20Guadalcanal%20WWII&image_size=landscape_4_3'
  },
  {
    id: 'coral-sea',
    nameKey: 'battles.coral.name',
    startDate: '1942-05-04',
    endDate: '1942-05-08',
    resultKey: 'battles.coral.result',
    descriptionKey: 'battles.coral.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States', 'Australia']
    },
    eventsKey: 'battles.coral.events',
    routeId: 'coral-route',
    theater: 'pacific',
    significance: '珊瑚海海战，首次航母大战',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20the%20Coral%20Sea%201942%20first%20carrier%20battle%20aircraft%20planes%20naval%20warfare%20WWII&image_size=landscape_4_3'
  },
  {
    id: 'philippines',
    nameKey: 'battles.philippines.name',
    startDate: '1944-10-20',
    endDate: '1945-08-15',
    resultKey: 'battles.philippines.result',
    descriptionKey: 'battles.philippines.description',
    belligerents: {
      axis: ['Japan'],
      allies: ['United States', 'Philippines', 'Australia', 'Mexico']
    },
    eventsKey: 'battles.philippines.events',
    routeId: 'philippines-route',
    theater: 'pacific',
    significance: '菲律宾战役，麦克阿瑟兑现诺言',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Philippines%201944%20MacArthur%20returns%20landing%20beach%20World%20War%20II%20Leyte%20Gulf&image_size=landscape_4_3'
  },
  {
    id: 'tunisia',
    nameKey: 'battles.tunisia.name',
    startDate: '1942-11-17',
    endDate: '1943-05-13',
    resultKey: 'battles.tunisia.result',
    descriptionKey: 'battles.tunisia.description',
    belligerents: {
      axis: ['Germany', 'Italy'],
      allies: ['United States', 'United Kingdom', 'France', 'Free French']
    },
    eventsKey: 'battles.tunisia.events',
    routeId: 'tunisia-route',
    theater: 'africa',
    significance: '突尼斯战役，轴心国在北非彻底失败',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Tunisia%201943%20North%20Africa%20German%20surrender%20Allied%20troops%20WWII%20historical%20photography&image_size=landscape_4_3'
  },
  {
    id: 'kiev',
    nameKey: 'battles.kiev.name',
    startDate: '1941-07-07',
    endDate: '1941-09-26',
    resultKey: 'battles.kiev.result',
    descriptionKey: 'battles.kiev.description',
    belligerents: {
      axis: ['Germany', 'Hungary', 'Romania', 'Slovakia'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.kiev.events',
    routeId: 'kiev-route',
    theater: 'europe',
    significance: '基辅包围战，苏军65万人被俘',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Battle%20of%20Kiev%201941%20encirclement%20Soviet%20troops%20German%20panzers%20Ukraine%20WWII&image_size=landscape_4_3'
  },
  {
    id: 'leningrad',
    nameKey: 'battles.leningrad.name',
    startDate: '1941-09-08',
    endDate: '1944-01-27',
    resultKey: 'battles.leningrad.result',
    descriptionKey: 'battles.leningrad.description',
    belligerents: {
      axis: ['Germany', 'Finland', 'Romania', 'Italy', 'Hungary', 'Spain'],
      allies: ['Soviet Union']
    },
    eventsKey: 'battles.leningrad.events',
    routeId: 'leningrad-route',
    theater: 'europe',
    significance: '列宁格勒围城战，历史上最长时间的围城',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Siege%20of%20Leningrad%201941-1944%20Road%20of%20Life%20winter%20trucks%20WWII%20historical%20scene&image_size=landscape_4_3'
  }
]
