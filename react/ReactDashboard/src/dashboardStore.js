import { create } from "zustand"

export const useDashboardStore = create((set) => ({
  dateRange: "7d",
  setDateRange: (dateRange) => set({ dateRange }),

  selectedUserId: null,
  setSelectedUserId: (selectedUserId) => set({ selectedUserId }),
}))
