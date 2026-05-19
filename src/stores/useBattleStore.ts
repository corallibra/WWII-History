import { create } from 'zustand'
import { routes } from '../data/routes'

type AnimationState = 'idle' | 'playing' | 'paused' | 'completed'

interface BattleStore {
  currentStep: number
  speed: 0.5 | 1 | 2 | 3
  activeRouteId: string | null
  animationState: AnimationState
  setCurrentStep: (step: number) => void
  setSpeed: (speed: 0.5 | 1 | 2 | 3) => void
  setActiveRouteId: (id: string | null) => void
  setAnimationState: (state: AnimationState) => void
  resetAnimation: () => void
  getCurrentRoute: () => typeof routes[0] | undefined
  getTotalSteps: () => number
}

export const useBattleStore = create<BattleStore>((set, get) => ({
  currentStep: 0,
  speed: 1,
  activeRouteId: null,
  animationState: 'idle',
  setCurrentStep: (step) => set({ currentStep: step }),
  setSpeed: (speed) => set({ speed }),
  setActiveRouteId: (id) => {
    set({ activeRouteId: id, currentStep: 0, animationState: 'idle' })
  },
  setAnimationState: (state) => set({ animationState: state }),
  resetAnimation: () => set({ currentStep: 0, animationState: 'idle' }),
  getCurrentRoute: () => {
    const { activeRouteId } = get()
    return routes.find(r => r.id === activeRouteId)
  },
  getTotalSteps: () => {
    const currentRoute = get().getCurrentRoute()
    return currentRoute?.steps.length || 0
  }
}))
