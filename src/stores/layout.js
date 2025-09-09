import { defineStore } from 'pinia'
import {
  FunnelsToolbar, 
  LeadsToolbar, 
  EmailToolbar, 
  FriendsToolbar, 
  AccountToolbar, 
  ProductsToolbar,
  SettingsToolbar
} from "@/utils/toolbarOptions.js";

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    activeModule: null,
    isSideBarOpen: true,
    toolbarOptions: [      
      // { label: "shota" }, 
      // { label: "monda" },
      // { label: "bichola" }
    ],
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
          console.log(this.activeModule);
          this.toolbarOptions = FunnelsToolbar;
          break;
        case "leads":
          console.log(this.activeModule);
          this.toolbarOptions = LeadsToolbar;
          break;
        case "email":
          console.log(this.activeModule);
          this.toolbarOptions = EmailToolbar;
          break; 
        case "friends":
          console.log(this.activeModule);
          this.toolbarOptions = FriendsToolbar;
          break;
        case "products":
          console.log(this.activeModule);
          this.toolbarOptions = ProductsToolbar;
          break; 
        case "account":
          console.log(this.activeModule);
          this.toolbarOptions = AccountToolbar;
          break;
        case "settings":
          console.log(this.activeModule);
          this.toolbarOptions = SettingsToolbar;
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
