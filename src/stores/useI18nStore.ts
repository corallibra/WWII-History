import { create } from 'zustand'

interface I18nStore {
  language: 'en' | 'zh'
  setLanguage: (language: 'en' | 'zh') => void
}

export const useI18nStore = create<I18nStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language })
}))
