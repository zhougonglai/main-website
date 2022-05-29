export default {
  activeNav(state, data) {
    state.activeNav = data;
  },
  activeMenu(state, data) {
    state.activeMenu = data;
  },
  updateLea(state, data) {
    state.lea = data;
  },
  updateCate(state, data) {
    state.cate = data;
  },
  updateBanner(state, data) {
    state.banner = data.map((b) => ({
      ...b,
      url: process.env.BASE_API + b.url,
    }));
  },
  updateProduct(state, data) {
    state.product = data.map((p) => ({
      ...p,
      cover_path: process.env.BASE_API + p.cover_path,
    }));
  },
  updateProducts(state, data) {
    state.products[data.id] = data;
    state.prod = data;
  },
  updateSummary(state, data) {
    state.summary = data;
  },
  indexData(state, data) {
    state.indexData = {
      ...data,
      products: data.products.map((p) => ({
        ...p,
        cover_path: process.env.BASE_API + p.cover_path,
      })),
      news: data.news
        .map((n) => ({
          ...n,
          url: process.env.BASE_API + n.url,
        }))
        .reverse(),
    };
  },
};
