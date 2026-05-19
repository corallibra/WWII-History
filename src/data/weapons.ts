export interface Weapon {
  id: string
  nameKey: string
  category: 'aircraft' | 'tank' | 'naval' | 'infantry' | 'artillery'
  nation: string
  descriptionKey: string
  specifications: {
    weight?: string
    length?: string
    speed?: string
    range?: string
    armament?: string
  }
  imageUrl?: string
  year: string
}

export const weapons: Weapon[] = [
  {
    id: 'messerschmitt-bf109',
    nameKey: 'weapons.messerschmitt.name',
    category: 'aircraft',
    nation: 'Germany',
    descriptionKey: 'weapons.messerschmitt.description',
    specifications: {
      weight: '2,950 kg',
      length: '8.85 m',
      speed: '570 km/h',
      range: '850 km',
      armament: '2 × 13mm MG 131, 2 × 20mm MG 151'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Messerschmitt%20Bf%20109%20WWII%20fighter%20aircraft&image_size=landscape_4_3',
    year: '1937'
  },
  {
    id: 'spitfire',
    nameKey: 'weapons.spitfire.name',
    category: 'aircraft',
    nation: 'United Kingdom',
    descriptionKey: 'weapons.spitfire.description',
    specifications: {
      weight: '2,972 kg',
      length: '9.12 m',
      speed: '595 km/h',
      range: '760 km',
      armament: '8 × 7.7mm Browning MG'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supermarine%20Spitfire%20WWII%20fighter%20aircraft&image_size=landscape_4_3',
    year: '1936'
  },
  {
    id: 'tiger-tank',
    nameKey: 'weapons.tiger.name',
    category: 'tank',
    nation: 'Germany',
    descriptionKey: 'weapons.tiger.description',
    specifications: {
      weight: '56,900 kg',
      length: '6.3 m',
      speed: '45 km/h',
      range: '195 km',
      armament: '8.8cm KwK 36 L/56'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tiger%20I%20tank%20WWII%20german%20panzer&image_size=landscape_4_3',
    year: '1942'
  },
  {
    id: 'm4-sherman',
    nameKey: 'weapons.sherman.name',
    category: 'tank',
    nation: 'United States',
    descriptionKey: 'weapons.sherman.description',
    specifications: {
      weight: '30,000 kg',
      length: '5.8 m',
      speed: '48 km/h',
      range: '300 km',
      armament: '75mm M3 L/40 gun'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=M4%20Sherman%20tank%20WWII%20american%20armor&image_size=landscape_4_3',
    year: '1942'
  },
  {
    id: 't34',
    nameKey: 'weapons.t34.name',
    category: 'tank',
    nation: 'Soviet Union',
    descriptionKey: 'weapons.t34.description',
    specifications: {
      weight: '26,500 kg',
      length: '5.9 m',
      speed: '53 km/h',
      range: '400 km',
      armament: '76.2mm F-34 gun'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=T-34%20tank%20WWII%20soviet%20armor&image_size=landscape_4_3',
    year: '1940'
  },
  {
    id: 'zero',
    nameKey: 'weapons.zero.name',
    category: 'aircraft',
    nation: 'Japan',
    descriptionKey: 'weapons.zero.description',
    specifications: {
      weight: '2,410 kg',
      length: '8.5 m',
      speed: '533 km/h',
      range: '3,000 km',
      armament: '2 × 20mm Type 99-1, 2 × 7.7mm Type 97'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mitsubishi%20A6M%20Zero%20WWII%20japanese%20fighter&image_size=landscape_4_3',
    year: '1940'
  },
  {
    id: 'battleship-yamato',
    nameKey: 'weapons.yamato.name',
    category: 'naval',
    nation: 'Japan',
    descriptionKey: 'weapons.yamato.description',
    specifications: {
      weight: '65,000 tons',
      length: '263 m',
      speed: '50 km/h',
      range: '16,000 km',
      armament: '9 × 460mm Type 94 guns'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yamato%20battleship%20WWII%20japanese%20naval&image_size=landscape_4_3',
    year: '1940'
  },
  {
    id: 'uss-arizona',
    nameKey: 'weapons.arizona.name',
    category: 'naval',
    nation: 'United States',
    descriptionKey: 'weapons.arizona.description',
    specifications: {
      weight: '31,400 tons',
      length: '185 m',
      speed: '35 km/h',
      range: '13,000 km',
      armament: '12 × 14-inch guns'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=USS%20Arizona%20battleship%20WWII%20american%20naval&image_size=landscape_4_3',
    year: '1916'
  },
  {
    id: 'flak-88',
    nameKey: 'weapons.flak88.name',
    category: 'artillery',
    nation: 'Germany',
    descriptionKey: 'weapons.flak88.description',
    specifications: {
      weight: '4,980 kg',
      length: '7.6 m',
      speed: 'Towed',
      range: '14,790 m',
      armament: '8.8cm FlaK 18/36/37/41'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=8.8%20cm%20Flak%2018%20WWII%20german%20anti-aircraft%20artillery&image_size=landscape_4_3',
    year: '1928'
  },
  {
    id: 'katusha',
    nameKey: 'weapons.katusha.name',
    category: 'artillery',
    nation: 'Soviet Union',
    descriptionKey: 'weapons.katusha.description',
    specifications: {
      weight: '5,100 kg',
      length: '4.5 m',
      speed: '90 km/h',
      range: '8,800 m',
      armament: '132mm M-13 rockets'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=BM-13%20Katyusha%20WWII%20soviet%20rocket%20artillery&image_size=landscape_4_3',
    year: '1941'
  },
  {
    id: 'mp40',
    nameKey: 'weapons.mp40.name',
    category: 'infantry',
    nation: 'Germany',
    descriptionKey: 'weapons.mp40.description',
    specifications: {
      weight: '4 kg',
      length: '0.83 m',
      speed: 'Firing 500 rounds/min',
      range: '100 m',
      armament: '9mm parabellum'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MP40%20 submachine%20gun%20WWII%20german%20infantry%20weapon&image_size=landscape_4_3',
    year: '1940'
  },
  {
    id: 'm1-garand',
    nameKey: 'weapons.garand.name',
    category: 'infantry',
    nation: 'United States',
    descriptionKey: 'weapons.garand.description',
    specifications: {
      weight: '4.3 kg',
      length: '1.1 m',
      speed: 'Firing 20-30 rounds/min',
      range: '600 m',
      armament: '.30-06 Springfield'
    },
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=M1%20Garand%20rifle%20WWII%20american%20infantry%20weapon&image_size=landscape_4_3',
    year: '1936'
  }
]
