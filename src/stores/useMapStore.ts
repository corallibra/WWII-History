import { create } from 'zustand'

interface MapStore {
  center: [number, number]
  zoom: number
  visibleLayers: string[]
  setCenter: (center: [number, number]) => void
  setZoom: (zoom: number) => void
  toggleLayer: (layerId: string) => void
}

export const useMapStore = create<MapStore>((set) => ({
  center: [50.0, 10.0],
  zoom: 4,
  visibleLayers: ['poland-route', 'france-route'],
  setCenter: (center) => set({ center }),
  setZoom: (zoom) => set({ zoom }),
  toggleLayer: (layerId) => set((state) => ({
    visibleLayers: state.visibleLayers.includes(layerId)
      ? state.visibleLayers.filter(id => id !== layerId)
      : [...state.visibleLayers, layerId]
  }))
}))
