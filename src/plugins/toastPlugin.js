import { createApp } from "vue";
import Toast from "@/components/Toast/Toast.vue";

let toastInstance;

export default {
  install(app) {
    // Crear contenedor en body
    const container = document.createElement("div");
    document.body.appendChild(container);

    // Montar la instancia del toast
    const toastApp = createApp(Toast);
    toastInstance = toastApp.mount(container);

    // Agregar $toast a todas las instancias
    app.config.globalProperties.$toast = (msg, duration) => {
      toastInstance.show(msg, duration);
    };
  }
};
