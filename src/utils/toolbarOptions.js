import i18n from "@/i18n";

export const FunnelsToolbar = {
    title: i18n.global.t("toolbar.funnels.title"),
    options:
      [
        { label: i18n.global.t("toolbar.funnels.createList"), module: "funnels", tool: 'CreateListModal' },
        { label: i18n.global.t("toolbar.funnels.showLists"), module: "funnels", tool: 'ListTable' },
        { label: i18n.global.t("toolbar.funnels.showDetails"), module: "funnels", tool: 'ListDetails' },
      ]
    }
export const LeadsToolbar = {
  title: i18n.global.t("toolbar.leads.title"),
  options:
    [
      { label: i18n.global.t("toolbar.leads.createLead") },
      { label: i18n.global.t("toolbar.leads.downloadExcel") },
      { label: i18n.global.t("toolbar.leads.dump") },
    ]
}


