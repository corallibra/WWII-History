export interface Character {
  id: string
  name: string
  nationality: string
  role: string
  faction: 'axis' | 'allies'
  biography: string
  battles: string[]
  image?: string
  portraitUrl?: string
  footprints: Array<{
    date: string
    location: string
    latlng: [number, number]
    description: string
  }>
  achievements: string[]
  quotes?: string[]
}

export const characters: Character[] = [
  {
    id: 'hitler',
    name: 'Adolf Hitler',
    nationality: 'Germany',
    role: 'Führer of Nazi Germany',
    faction: 'axis',
    biography: 'Leader of Nazi Germany from 1934 to 1945. Hitler initiated World War II in Europe with the invasion of Poland in September 1939 and was central to the Holocaust.',
    battles: ['poland', 'france', 'moscow', 'stalingrad'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Adolf%20Hitler%20portrait%20historical%20photo%20black%20and%20white&image_size=square',
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
      },
      {
        date: '1941-06-22',
        location: 'Berlin',
        latlng: [52.5200, 13.4050],
        description: 'Launches Operation Barbarossa'
      },
      {
        date: '1945-04-30',
        location: 'Berlin',
        latlng: [52.5200, 13.4050],
        description: 'Commits suicide in his bunker'
      }
    ],
    achievements: [
      'Rise to power as Chancellor of Germany (1933)',
      'Anschluss with Austria (1938)',
      'Munich Agreement (1938)',
      'Invasion of Poland (1939)',
      'Blitzkrieg campaigns across Europe'
    ],
    quotes: [
      'The strongest must dominate and not mate with the weakest.',
      'He who wins a war makes many mistakes.'
    ]
  },
  {
    id: 'churchill',
    name: 'Winston Churchill',
    nationality: 'United Kingdom',
    role: 'Prime Minister of the UK',
    faction: 'allies',
    biography: 'Prime Minister of the United Kingdom during World War II (1940-1945). Churchill led Britain through its darkest hour, refusing to surrender to Nazi Germany.',
    battles: ['france', 'britain'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Winston%20Churchill%20portrait%20historical%20photo%20black%20and%20white&image_size=square',
    footprints: [
      {
        date: '1940-05-10',
        location: 'London',
        latlng: [51.5074, -0.1278],
        description: 'Becomes Prime Minister'
      },
      {
        date: '1940-06-18',
        location: 'London',
        latlng: [51.5074, -0.1278],
        description: 'Delivers famous "We shall fight on the beaches" speech'
      },
      {
        date: '1945-05-08',
        location: 'London',
        latlng: [51.5074, -0.1278],
        description: 'Announces victory in Europe'
      }
    ],
    achievements: [
      'Led Britain through Battle of Britain',
      'Formed "Grand Alliance" with US and USSR',
      'Delivered historic wartime speeches',
      'Post-war reconstruction efforts'
    ],
    quotes: [
      'We shall fight on the beaches.',
      'Never give in, never give in, never, never, never.',
      'The price of greatness is responsibility.'
    ]
  },
  {
    id: 'stalin',
    name: 'Joseph Stalin',
    nationality: 'Soviet Union',
    role: 'General Secretary of the Communist Party',
    faction: 'allies',
    biography: 'Leader of the Soviet Union from 1922 until his death in 1953. Stalin led the USSR through World War II, overseeing the defense against Nazi Germany and the eventual victory.',
    battles: ['moscow', 'stalingrad', 'kursk', 'berlin'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Joseph%20Stalin%20portrait%20historical%20photo%20black%20and%20white&image_size=square',
    footprints: [
      {
        date: '1941-11-07',
        location: 'Moscow',
        latlng: [55.7558, 37.6173],
        description: 'Delivers famous Red Square speech during German invasion'
      },
      {
        date: '1943-02-02',
        location: 'Stalingrad',
        latlng: [48.7071, 44.5169],
        description: 'Stalingrad victory turns the tide of war'
      },
      {
        date: '1945-05-09',
        location: 'Moscow',
        latlng: [55.7558, 37.6173],
        description: 'Declares victory over Germany'
      }
    ],
    achievements: [
      'Soviet victory at Stalingrad (1943)',
      'Largest tank battle at Kursk (1943)',
      'Liberation of Eastern Europe',
      'Capture of Berlin (1945)'
    ],
    quotes: [
      'Death is the solution to all problems. No man - no problem.',
      'The only real power comes out of a long rifle.'
    ]
  },
  {
    id: 'roosevelt',
    name: 'Franklin D. Roosevelt',
    nationality: 'United States',
    role: 'President of the United States',
    faction: 'allies',
    biography: '32nd President of the United States (1933-1945). Roosevelt led America through the Great Depression and World War II, implementing the New Deal and guiding the nation to victory.',
    battles: ['pearl-harbor', 'midway', 'normandy'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Franklin%20D%20Roosevelt%20portrait%20historical%20photo%20black%20and%20white&image_size=square',
    footprints: [
      {
        date: '1941-12-08',
        location: 'Washington D.C.',
        latlng: [38.9072, -77.0369],
        description: 'Asks Congress to declare war on Japan'
      },
      {
        date: '1944-06-06',
        location: 'Washington D.C.',
        latlng: [38.9072, -77.0369],
        description: 'D-Day invasion begins'
      },
      {
        date: '1945-04-12',
        location: 'Warm Springs',
        latlng: [32.0150, -84.4281],
        description: 'Dies in office'
      }
    ],
    achievements: [
      'New Deal economic recovery',
      'Lend-Lease program supporting Allies',
      'Pearl Harbor response and war mobilization',
      'Founding of the United Nations'
    ],
    quotes: [
      'The only thing we have to fear is fear itself.',
      'In the truest sense, freedom cannot be bestowed; it must be achieved.'
    ]
  },
  {
    id: 'eisenhower',
    name: 'Dwight D. Eisenhower',
    nationality: 'United States',
    role: 'Supreme Commander of Allied Forces',
    faction: 'allies',
    biography: 'American military commander and later 34th President of the United States. Eisenhower served as Supreme Commander of the Allied Expeditionary Forces in Europe during World War II.',
    battles: ['normandy', 'bulge'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dwight%20Eisenhower%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1944-06-06',
        location: 'Normandy',
        latlng: [49.3399, -0.4564],
        description: 'D-Day landing begins under his command'
      },
      {
        date: '1945-05-07',
        location: 'Reims',
        latlng: [49.2620, 4.0347],
        description: 'German surrender signed'
      }
    ],
    achievements: [
      'Planning and execution of D-Day invasion',
      'Liberation of France',
      'Defeat of Germany in Western Europe',
      'Post-war military reorganization'
    ],
    quotes: [
      'Leadership is the art of getting someone else to do something you want done because he wants to do it.',
      'Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed.'
    ]
  },
  {
    id: 'rommel',
    name: 'Erwin Rommel',
    nationality: 'Germany',
    role: 'Field Marshal',
    faction: 'axis',
    biography: 'German field marshal known as the "Desert Fox" for his brilliant tactics in North Africa. Rommel was one of Germany\'s most skilled military commanders.',
    battles: ['alamein'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Erwin%20Rommel%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-02-12',
        location: 'Tripoli',
        latlng: [32.8872, 13.1913],
        description: 'Arrives in North Africa to command Afrika Korps'
      },
      {
        date: '1942-10-23',
        location: 'El Alamein',
        latlng: [30.0444, 28.8343],
        description: 'Battle of El Alamein begins'
      },
      {
        date: '1944-10-14',
        location: 'Ulm',
        latlng: [48.3963, 9.9937],
        description: 'Forced to commit suicide after failed assassination plot'
      }
    ],
    achievements: [
      'Early successes in North Africa campaign',
      'Battle of Gazala victory (1942)',
      'Defense of Normandy beaches',
      'Respected by allies for military skill'
    ],
    quotes: [
      'The best form of defense is attack.',
      'Leadership is the ability to get someone to do what you want because he wants to do it.'
    ]
  },
  {
    id: 'tojo',
    name: 'Hideki Tojo',
    nationality: 'Japan',
    role: 'Prime Minister of Japan',
    faction: 'axis',
    biography: 'Japanese military leader and Prime Minister during most of World War II. Tojo was responsible for Japan\'s attack on Pearl Harbor and overall war strategy.',
    battles: ['pearl-harbor', 'midway'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hideki%20Tojo%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-10-18',
        location: 'Tokyo',
        latlng: [35.6762, 139.6503],
        description: 'Becomes Prime Minister'
      },
      {
        date: '1941-12-07',
        location: 'Tokyo',
        latlng: [35.6762, 139.6503],
        description: 'Approves attack on Pearl Harbor'
      },
      {
        date: '1945-09-11',
        location: 'Tokyo',
        latlng: [35.6762, 139.6503],
        description: 'Arrested by US occupation forces'
      }
    ],
    achievements: [
      'Consolidation of Japanese military power',
      'Expansion of Japanese empire in Asia',
      'Pearl Harbor attack planning'
    ],
    quotes: [
      'I am determined to maintain the honor of the Japanese army.',
      'We shall fight to the bitter end.'
    ]
  },
  {
    id: 'macarthur',
    name: 'Douglas MacArthur',
    nationality: 'United States',
    role: 'Supreme Commander of Allied Powers',
    faction: 'allies',
    biography: 'American five-star general and field marshal of the Philippine Army. MacArthur played a prominent role in the Pacific Theater and oversaw the occupation of Japan.',
    battles: ['guadalcanal', 'leyte'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Douglas%20MacArthur%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1942-03-12',
        location: 'Corregidor',
        latlng: [14.3745, 120.5685],
        description: 'Evacuates Philippines, promises to return'
      },
      {
        date: '1944-10-20',
        location: 'Leyte',
        latlng: [10.9433, 124.9267],
        description: 'Lands on Philippines: "I have returned"'
      },
      {
        date: '1945-09-02',
        location: 'Tokyo Bay',
        latlng: [35.6762, 139.6503],
        description: 'Accepts Japanese surrender'
      }
    ],
    achievements: [
      'Island-hopping campaign in Pacific',
      'Liberation of Philippines',
      'Post-war reconstruction of Japan',
      'Korean War command'
    ],
    quotes: [
      'I shall return.',
      'Old soldiers never die; they just fade away.'
    ]
  },
  {
    id: 'mussolini',
    name: 'Benito Mussolini',
    nationality: 'Italy',
    role: 'Dictator of Italy',
    faction: 'axis',
    biography: 'Founder of Italian Fascism and Prime Minister of Italy from 1922 to 1943. Mussolini aligned Italy with Nazi Germany and led the country into World War II.',
    battles: ['france', 'alamein'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Benito%20Mussolini%20portrait%20fascist%20leader%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1922-10-28',
        location: 'Rome',
        latlng: [41.9028, 12.4964],
        description: 'March on Rome, becomes Prime Minister'
      },
      {
        date: '1940-06-10',
        location: 'Rome',
        latlng: [41.9028, 12.4964],
        description: 'Italy declares war on France and Britain'
      },
      {
        date: '1945-04-28',
        location: 'Dongo',
        latlng: [45.9124, 9.3576],
        description: 'Captured and executed by Italian partisans'
      }
    ],
    achievements: [
      'Fascist takeover of Italy (1922)',
      'Italian invasion of Ethiopia (1935)',
      'Formation of Axis alliance with Germany'
    ],
    quotes: [
      'War alone brings up to its highest tension all human energy and puts the stamp of nobility upon the peoples who have the courage to make it.',
      'Democracy is beautiful in theory; in practice it is a fallacy.'
    ]
  },
  {
    id: 'patton',
    name: 'George Patton',
    nationality: 'United States',
    role: 'General',
    faction: 'allies',
    biography: 'American general known for his aggressive leadership style and armored warfare tactics. Patton played a key role in the liberation of France and the defeat of Germany.',
    battles: ['normandy', 'bulge'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=George%20Patton%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1944-07-25',
        location: 'Normandy',
        latlng: [49.3399, -0.4564],
        description: 'Operation Cobra breakthrough'
      },
      {
        date: '1944-12-26',
        location: 'Ardennes',
        latlng: [50.0000, 5.5000],
        description: 'Relieves Bastogne during Battle of the Bulge'
      },
      {
        date: '1945-04-12',
        location: 'Frankfurt',
        latlng: [50.1109, 8.6821],
        description: 'Captures Frankfurt'
      }
    ],
    achievements: [
      'Sicily campaign success',
      'Rapid advance across France',
      'Relief of Bastogne',
      'Advance into Germany'
    ],
    quotes: [
      'Lead me, follow me, or get out of my way.',
      'Success is how high you bounce when you hit bottom.'
    ]
  },
  {
    id: 'yamamoto',
    name: 'Isoroku Yamamoto',
    nationality: 'Japan',
    role: 'Admiral',
    faction: 'axis',
    biography: 'Japanese naval admiral and commander-in-chief of the Combined Fleet during World War II. Yamamoto planned the attack on Pearl Harbor and was a key strategist.',
    battles: ['pearl-harbor', 'midway'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Isoroku%20Yamamoto%20portrait%20naval%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-12-07',
        location: 'Hawaii',
        latlng: [21.3069, -157.8583],
        description: 'Pearl Harbor attack succeeds'
      },
      {
        date: '1942-06-04',
        location: 'Midway Atoll',
        latlng: [28.2100, -177.3939],
        description: 'Midway defeat is turning point'
      },
      {
        date: '1943-04-18',
        location: 'Solomon Islands',
        latlng: [-8.0000, 159.0000],
        description: 'Shot down by US P-38 fighters'
      }
    ],
    achievements: [
      'Pearl Harbor attack planning',
      'Early Japanese naval victories',
      'Innovative naval strategy'
    ],
    quotes: [
      'I fear all we have done is to awaken a sleeping giant and fill him with a terrible resolve.',
      'The Navy is not a mere collection of ships.'
    ]
  },
  {
    id: 'zhukov',
    name: 'Georgy Zhukov',
    nationality: 'Soviet Union',
    role: 'Marshal of the Soviet Union',
    faction: 'allies',
    biography: 'Soviet military commander and Marshal of the Soviet Union. Zhukov played a crucial role in several major battles, including Stalingrad and Berlin.',
    battles: ['moscow', 'stalingrad', 'kursk', 'berlin'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Georgy%20Zhukov%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-12-05',
        location: 'Moscow',
        latlng: [55.7558, 37.6173],
        description: 'Launches counteroffensive at Moscow'
      },
      {
        date: '1942-11-19',
        location: 'Stalingrad',
        latlng: [48.7071, 44.5169],
        description: 'Operation Uranus begins'
      },
      {
        date: '1945-05-09',
        location: 'Berlin',
        latlng: [52.5200, 13.4050],
        description: 'Accepts German surrender'
      }
    ],
    achievements: [
      'Defense of Moscow (1941-1942)',
      'Victory at Stalingrad (1943)',
      'Kursk offensive (1943)',
      'Capture of Berlin (1945)'
    ],
    quotes: [
      'The harder the battle, the sweeter the victory.',
      'We cannot win a war without fighting.'
    ]
  },
  {
    id: 'nimitz',
    name: 'Chester Nimitz',
    nationality: 'United States',
    role: 'Fleet Admiral',
    faction: 'allies',
    biography: 'American naval commander and Chief of Naval Operations. Nimitz led the United States Pacific Fleet during World War II and was instrumental in victories at Midway and the island-hopping campaign.',
    battles: ['midway', 'leyte', 'okinawa'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chester%20Nimitz%20portrait%20naval%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-12-17',
        location: 'Pearl Harbor',
        latlng: [21.3069, -157.8583],
        description: 'Takes command of Pacific Fleet'
      },
      {
        date: '1942-06-04',
        location: 'Midway',
        latlng: [28.2100, -177.3939],
        description: 'Victory at Battle of Midway'
      },
      {
        date: '1945-09-02',
        location: 'Tokyo Bay',
        latlng: [35.6762, 139.6503],
        description: 'Signs Japanese surrender'
      }
    ],
    achievements: [
      'Victory at Midway (1942)',
      'Island-hopping strategy',
      'Defeat of Japanese Navy',
      'Development of carrier warfare doctrine'
    ],
    quotes: [
      'We shall find a way, or make one.',
      'God could not be everywhere, so he made the sailors.'
    ]
  },
  {
    id: 'hirohito',
    name: 'Emperor Hirohito',
    nationality: 'Japan',
    role: 'Emperor of Japan',
    faction: 'axis',
    biography: 'The 124th Emperor of Japan who reigned from 1926 to 1989. During World War II, Hirohito served as the supreme commander of the Japanese military.',
    battles: ['pearl-harbor', 'midway', 'okinawa'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Emperor%20Hirohito%20portrait%20japanese%20emperor%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1941-12-08',
        location: 'Tokyo',
        latlng: [35.6762, 139.6503],
        description: 'Approves Pearl Harbor attack'
      },
      {
        date: '1945-08-15',
        location: 'Tokyo',
        latlng: [35.6762, 139.6503],
        description: 'Broadcasts surrender message'
      },
      {
        date: '1945-09-02',
        location: 'Tokyo Bay',
        latlng: [35.6762, 139.6503],
        description: 'Attends surrender ceremony'
      }
    ],
    achievements: [
      'Symbol of Japanese unity during wartime',
      'Surrender decision ending the war',
      'Post-war reconciliation efforts'
    ],
    quotes: [
      'The war has developed not necessarily to Japan\'s advantage.'
    ]
  },
  {
    id: 'gouraud',
    name: 'Henri Gouraud',
    nationality: 'France',
    role: 'General',
    faction: 'allies',
    biography: 'French general who commanded French forces during World War I and Free French forces in World War II. Gouraud led the French Army in several campaigns.',
    battles: ['normandy'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Henri%20Gouraud%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1944-08-25',
        location: 'Paris',
        latlng: [48.8566, 2.3522],
        description: 'Enters Paris with Free French forces'
      },
      {
        date: '1944-09-03',
        location: 'Brussels',
        latlng: [50.8503, 4.3517],
        description: 'Liberates Brussels'
      }
    ],
    achievements: [
      'Liberation of Paris',
      'Command of French First Army',
      'Rhine campaign'
    ],
    quotes: [
      'France has lost a battle, but France has not lost the war.'
    ]
  },
  {
    id: 'montgomery',
    name: 'Bernard Montgomery',
    nationality: 'United Kingdom',
    role: 'Field Marshal',
    faction: 'allies',
    biography: 'British field marshal and commander of Allied forces in North Africa and Europe. Montgomery played key roles in the Battle of El Alamein and D-Day planning.',
    battles: ['alamein', 'normandy'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bernard%20Montgomery%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1942-08-13',
        location: 'Egypt',
        latlng: [26.8206, 30.8025],
        description: 'Takes command of Eighth Army'
      },
      {
        date: '1942-10-23',
        location: 'El Alamein',
        latlng: [30.0444, 28.8343],
        description: 'Victory at Second Battle of El Alamein'
      },
      {
        date: '1944-06-06',
        location: 'Normandy',
        latlng: [49.3399, -0.4564],
        description: 'Commands ground forces during D-Day'
      }
    ],
    achievements: [
      'Victory at El Alamein (1942)',
      'D-Day planning and execution',
      'Market Garden operation'
    ],
    quotes: [
      'The measure of a war leader is the quality of his men.',
      'I do not operas.'
    ]
  },
  {
    id: 'degaulle',
    name: 'Charles de Gaulle',
    nationality: 'France',
    role: 'General / President',
    faction: 'allies',
    biography: 'French general, resistor, and statesman. After France\'s surrender in 1940, de Gaulle became the leader of the Free French movement and later President of France.',
    battles: ['normandy'],
    portraitUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Charles%20de%20Gaulle%20portrait%20military%20uniform%20historical%20photo&image_size=square',
    footprints: [
      {
        date: '1940-06-18',
        location: 'London',
        latlng: [51.5074, -0.1278],
        description: 'Broadcasts call for French resistance'
      },
      {
        date: '1944-08-25',
        location: 'Paris',
        latlng: [48.8566, 2.3522],
        description: 'Returns to liberated Paris'
      }
    ],
    achievements: [
      'Leader of Free French',
      'Liberation of France',
      'Founding of Fifth Republic'
    ],
    quotes: [
      'France cannot be France without grandeur.',
      'The flame of French resistance must not and shall not die.'
    ]
  }
]
