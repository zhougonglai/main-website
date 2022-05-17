export const state = () => ({
  activeNav: "",
});

export const mutations = {
  activeNav(state, data) {
    state.activeNav = data;
  },
};
