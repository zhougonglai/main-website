export default {
  async getCate({ commit }) {
    const { data } = await this.$axios.$get("/api.php/api/getCate");
    commit("updateCate", data);
    return data;
  },
  async getBanner({ commit }) {
    const { data } = await this.$axios.$get("/api.php/api/getBanner");
    console.log("getBanner", process.env.BASE_API);
    commit("updateBanner", data);
    return data;
  },
  /**
   * 获取产品列表
   * @param {c_id} param0
   * @returns
   */
  async getProduct({ commit }, params = {}) {
    const { data } = await this.$axios.$get("/api.php/api/getProductByCateid", {
      params,
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
  async getSummaryData({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getSummaryData", {
      params,
    });
    commit("updateSummary", data);
    return data;
  },
  /**
   * 表单数据提交
   * @param {c_id} param0
   * @returns
   */
  async postFormData({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/postFormData", {
      params,
    });
    return data;
  },
  /**
   * 获取应用数据
   * @param {id} param0
   * @returns
   */
  async getApply({ state, commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getApply", {
      params,
    });
    commit("updateApply", data);
    return data;
  },
  /**
   * 解决方案页面接口
   * @param {c_id} param0
   * @returns
   */
  async getSolution({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getSolution", {
      params,
    });
    commit("updateSolution", data);
    return data;
  },
  /**
   * 首页数据
   * @param {c_id} param0
   * @returns
   */
  async getIndexData({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getIndex");
    commit("indexData", data);
    return data;
  },
  /**
   * 新闻列表
   * @param {pages} param0
   * @returns
   */
  async getNewsList({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getNewsList", {
      params,
    });
    return data;
  },
  /**
   * 获取新闻详情
   * @param {id} param0
   * @returns
   */
  async getNewsDetail({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getNewsDetail", {
      params,
    });
    return data;
  },
};
