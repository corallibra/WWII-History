import { create } from 'zustand'

type AnimationState = 'idle' | 'playing' | 'paused' | 'completed'

interface BattleStore {
  currentStep: number
  totalSteps: number
  speed: 0.5 | 1 | 2 | 3
  progress: number
  activeRouteId: string | null
  animationState: AnimationState
  setCurrentStep: (step: number) => void
  setSpeed: (speed: 0.5 | 1 | 2 | 3) => void
  setActiveRouteId: (id: string | null) => void
  setAnimationState: (state: AnimationState) => void
  resetAnimation: () => void
}

export const useBattleStore = create<BattleStore>((set) => ({
  currentStep: 0,
  totalSteps: 0,
  speed: 1,
  progress: 0,
  activeRouteId: null,
  animationState: 'idle',
  setCurrentStep: (step) => set({ currentStep: step }),
  setSpeed: (speed) => set({ speed }),
  setActiveRouteId: (id) => set({ activeRouteId: id }),
  setAnimationState: (state) => set({ animationState: state }),
  resetAnimation: () => set({ currentStep: 0, progress: 0, animationState: 'idle' })
}))
