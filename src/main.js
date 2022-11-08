import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
const store = createStore({
  state: {
    menuList: [
      { id: 1, url: "/", name: "Home" },
      { id: 2, url: "/whatWedo", name: "What we do" },
      { id: 3, url: "/digital-divide", name: "The digital divide" },
      { id: 4, url: "/getInvolved", name: "Get involved" },
      { id: 5, url: "/networks", name: "Our network" },
      { id: 6, url: "/insights", name: "Insights" },
    ],
    selected: 1,
    cardData: [
      {
        title: "Learn My Way",
        details: "Lorem ipsum dolor sit amet",
        index: 1,
      },
      {
        title: "Learn My Way",
        details: "Lorem ipsum dolor sit amet",
        index: 2,
      },
      {
        title: "Our network",
        details: "Lorem ipsum dolor sit amet",
        index: 3,
      },
      {
        title: " Data Poverty Lab",
        details: "Lorem ipsum dolor sit amet",
        index: 3,
      },
    ],
  },
  mutations: {
    SET_CURRENT_PAGE(state, payload) {
      const selectedMenu = state.menuList.find((data) => data.id === payload);
      state.selected = selectedMenu.id;
    },
  },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
