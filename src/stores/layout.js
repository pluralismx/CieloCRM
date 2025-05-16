import { defineStore } from 'pinia'
import {FunnelsToolbar, LeadsToolbar} from "@/utils/toolbarOptions.js";

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    activeModule: "leads",
    isSideBarOpen: true,
    toolbarOptions: {},
    openedTools: {
      funnels: [],
      leads: [],
    }
  }),

  actions: {
    setActiveModule(moduleName) {
      this.activeModule = moduleName
      this.changeToolbar();
    },
    toggleSideBar() {
      this.isSideBarOpen = this.isSideBarOpen !== true;
    },
    changeToolbar() {
      switch (this.activeModule) {
        case "funnels":
          this.toolbarOptions = FunnelsToolbar;
          break;
        case "leads":
          this.toolbarOptions = LeadsToolbar;
          break;
        default:
          this.toolbarOptions = [];
      }
    },
    toggleTool(module, toolName) {

      const tools = this.openedTools[module] || [];

      if (tools.includes(toolName)) {
        this.openedTools[module] = tools.filter(t => t !== toolName);
      } else {
        this.openedTools[module].push(toolName);
      }
    }
  }
})
