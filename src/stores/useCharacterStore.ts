import { create } from 'zustand'
import { characters } from '../data/characters'

interface CharacterStore {
  selectedCharacterId: string | null
  setSelectedCharacterId: (id: string | null) => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  selectedCharacterId: null,
  setSelectedCharacterId: (id) => set({ selectedCharacterId: id })
}))
