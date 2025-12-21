import { create } from 'zustand'

interface ServiceHoverState {
    activeServiceId: string | null
    setActiveServiceId: (id: string | null) => void
}

export const useServiceHoverStore = create<ServiceHoverState>((set) => ({
    activeServiceId: null,
    setActiveServiceId: (id: string | null) => set({ activeServiceId: id }),
}))