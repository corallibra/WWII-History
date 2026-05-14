export interface Relationship {
  source: string
  target: string
  type: 'command' | 'political' | 'enemy' | 'allied' | 'rival' | 'mentor' | 'family'
  description: string
}

export const relationships: Relationship[] = [
  {
    source: 'hitler',
    target: 'churchill',
    type: 'enemy',
    description: 'Leaders of opposing nations during World War II'
  },
  {
    source: 'hitler',
    target: 'stalin',
    type: 'enemy',
    description: 'Hitler betrayed Stalin by launching Operation Barbarossa'
  },
  {
    source: 'hitler',
    target: 'mussolini',
    type: 'allied',
    description: 'Fascist allies forming the Axis powers'
  },
  {
    source: 'hitler',
    target: 'rommel',
    type: 'command',
    description: 'Hitler appointed Rommel as field marshal'
  },
  {
    source: 'churchill',
    target: 'roosevelt',
    type: 'allied',
    description: 'Close wartime allies and leaders of the "Grand Alliance"'
  },
  {
    source: 'churchill',
    target: 'stalin',
    type: 'allied',
    description: 'Allied leaders against Nazi Germany'
  },
  {
    source: 'roosevelt',
    target: 'stalin',
    type: 'allied',
    description: 'Allied leaders at Yalta and Tehran conferences'
  },
  {
    source: 'roosevelt',
    target: 'eisenhower',
    type: 'command',
    description: 'Roosevelt appointed Eisenhower as Supreme Commander'
  },
  {
    source: 'eisenhower',
    target: 'patton',
    type: 'command',
    description: 'Patton served under Eisenhower in Europe'
  },
  {
    source: 'stalin',
    target: 'zhukov',
    type: 'command',
    description: 'Zhukov was Stalin\'s most trusted military commander'
  },
  {
    source: 'tojo',
    target: 'yamamoto',
    type: 'command',
    description: 'Yamamoto served under Tojo as naval commander'
  },
  {
    source: 'tojo',
    target: 'hitler',
    type: 'allied',
    description: 'Leaders of Axis powers Japan and Germany'
  },
  {
    source: 'macarthur',
    target: 'roosevelt',
    type: 'command',
    description: 'MacArthur served under Roosevelt in Pacific theater'
  },
  {
    source: 'rommel',
    target: 'patton',
    type: 'rival',
    description: 'Famous rivals in North Africa campaign'
  },
  {
    source: 'mussolini',
    target: 'roosevelt',
    type: 'enemy',
    description: 'Leaders of opposing nations during WWII'
  },
  {
    source: 'yamamoto',
    target: 'roosevelt',
    type: 'enemy',
    description: 'Yamamoto planned attack on Pearl Harbor'
  },
  {
    source: 'zhukov',
    target: 'eisenhower',
    type: 'allied',
    description: 'Allied commanders coordinating victory in Europe'
  },
  {
    source: 'eisenhower',
    target: 'churchill',
    type: 'allied',
    description: 'Close collaboration on D-Day planning'
  },
  {
    source: 'patton',
    target: 'churchill',
    type: 'allied',
    description: 'Patton respected Churchill\'s leadership'
  },
  {
    source: 'macarthur',
    target: 'eisenhower',
    type: 'rival',
    description: 'Famous rivalry between American generals'
  }
]
