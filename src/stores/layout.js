import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    activeModule: "leads",
    isSideBarOpen: true,
  }),

  actions: {
    setActiveModule(moduleName) {
      this.activeModule = moduleName
    },
    toggleSideBar() {
      this.isSideBarOpen = this.isSideBarOpen !== true;
    }
  }
})
