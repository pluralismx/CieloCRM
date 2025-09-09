import i18n from "@/i18n";

export const FunnelsToolbar = {
    title: i18n.global.t("toolbar.funnels.title"),
    options:
      [
        { label: i18n.global.t("toolbar.funnels.createList"), module: "funnels", tool: 'CreateLeadModal' },
        { label: i18n.global.t("toolbar.funnels.showLists"), module: "funnels", tool: 'CreateLeadModal' },
        { label: i18n.global.t("toolbar.funnels.showDetails"), module: "funnels", tool: 'CreateLeadModal' },
      ]
    }
export const LeadsToolbar = {
  title: i18n.global.t("toolbar.leads.title"),
  options:
    [
      { label: i18n.global.t("toolbar.leads.createLead"), module: "leads", tool: 'CreateListModal'},
      { label: i18n.global.t("toolbar.leads.downloadExcel"), module: "leads", tool: 'CreateListModal' },
      { label: i18n.global.t("toolbar.leads.dump"), module: "leads", tool: 'CreateListModal' },
    ]
}

export const EmailToolbar = {
  title: i18n.global.t("toolbar.email.title"),
  options:
    [
      { label: i18n.global.t("toolbar.email.settings"), module: "email", tool: '' },
      { label: i18n.global.t("toolbar.email.preview"), module: "email", tool: '' },
      { label: i18n.global.t("toolbar.email.recipients"), module: "email", tool: '' },
      { label: i18n.global.t("toolbar.email.templates"), module: "email", tool: '' },
    ]
}

export const FriendsToolbar = {
  title: i18n.global.t("toolbar.friends.title"),
  options:
    [
      { label: i18n.global.t("toolbar.friends.invite"), module: "friends", tool: '' },
      { label: i18n.global.t("toolbar.friends.myFriends"), module: "friends", tool: '' },
      { label: i18n.global.t("toolbar.friends.inbox"), module: "friends", tool: '' },
    ]
}

export const ProductsToolbar = {
  title: i18n.global.t("toolbar.products.title"),
  options:
    [
      { label: i18n.global.t("toolbar.products.myProducts"), module: "products", tool: '' },
      { label: i18n.global.t("toolbar.products.createProduct"), module: "products", tool: '' },
    ]
}

export const AccountToolbar = {
  title: i18n.global.t("toolbar.account.title"),
  options:
    [
      { label: i18n.global.t("toolbar.account.profile"), module: "account", tool: '' },
      { label: i18n.global.t("toolbar.account.myAccount"), module: "account", tool: '' },
      { label: i18n.global.t("toolbar.account.suscription"), module: "account", tool: '' },
    ]
}

export const SettingsToolbar = {
  title: i18n.global.t("toolbar.settings.title"),
  options:
    [

    ]
}


