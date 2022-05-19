export const state = () => ({
  activeNav: "",
  activeMenu: "",
  lea: "",
});

export const mutations = {
  activeNav(state, data) {
    state.activeNav = data;
  },
  activeMenu(state, data) {
    state.activeMenu = data;
  },
  updateLea(state, data) {
    state.lea = data;
  },
};
