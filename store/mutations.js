export default {
  updateCate(state, data) {
    state.cate = data;
  },
  updateBanner(state, data) {
    state.banner = data;
  },
  updateProduct(state, data) {
    state.product = data;
  },
  updateProducts(state, data) {
    state.products[data.id] = data;
  },
  updateSummary(state, data) {
    state.summary = data;
  },
};
