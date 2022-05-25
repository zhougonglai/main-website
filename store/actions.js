export default {
  async getCate({ commit }) {
    const { data } = await this.$axios.$get("/api.php/api/getCate");
    commit("updateCate", data);
    return data;
  },
  async getBanner({ commit }) {
    const { data } = await this.$axios.$get("/api.php/api/getBanner");
    commit("updateBanner", data);
    return data;
  },
  /**
   * 获取产品列表
   * @param {*} param0
   * @returns
   */
  async getProduct({ commit, state }) {
    const { data } = await this.$axios.$get("/api.php/api/getProductByCateid", {
      params: {
        c_id: state.activeNav,
      },
    });
    commit("updateProduct", data);
    return data;
  },
  /**
   * 获取产品详情
   * @param { id:number } params
   * @returns
   */
  async getProductDetail({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getProduct", {
      params,
    });
    commit("updateProducts", data);
    return data;
  },
  /**
   * 获取概述页面数据
   * @param {c_id} param0
   * @returns
   */
  async getSummaryData({ commit, state }) {
    const { data } = await this.$axios.$get("/api.php/api/getSummaryData", {
      params: {
        c_id: state.activeNav,
      },
    });
    commit("updateSummary", data);
    return data;
  },
  /**
   * 表单数据提交
   * @param {c_id} param0
   * @returns
   */
  async getSummaryData({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/postFormData", {
      params,
    });
    return data;
  },
};
