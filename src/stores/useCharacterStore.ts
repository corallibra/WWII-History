import { create } from 'zustand'

interface CharacterStore {
  selectedCharacterId: string | null
  setSelectedCharacterId: (id: string | null) => void
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  selectedCharacterId: null,
  setSelectedCharacterId: (id) => set({ selectedCharacterId: id })
}))
