export interface Relationship {
  source: string
  target: string
  type: 'command' | 'political' | 'enemy' | 'allied'
  description: string
}

export const relationships: Relationship[] = [
  {
    source: 'hitler',
    target: 'churchill',
    type: 'enemy',
    description: 'Leaders of opposing nations during World War II'
  }
]
