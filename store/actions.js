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
  async getProducts({ commit }, params = {}) {
    const { data } = await this.$axios.$get("/api.php/api/getProductByCateid", {
      params,
    });
    commit("updateProducts", data);
    return data;
  },
  /**
   * 获取产品详情
   * @param { id:number } params
   * @returns
   */
  async getProduct({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getProduct", {
      params,
    });
    commit("updateProduct", data);
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
    commit("updateNews", data);
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
    commit("updateNewsDetail", data);
    return data;
  },
  /**
   * 招聘类型 1为校招 2为社会招聘
   * @param {pages, category, type } param0
   *  category { 1: 业务, 2: 研发, 3:职能 }
   * @returns
   */

  async getPosition({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getPosition", {
      params,
    });
    commit("updatePosition", data);
    return data;
  },
  /**
   * 历史
   * @param {} param0
   * @returns
   */
  async getHistory({ commit }, params) {
    return await this.$axios.$get("/api.php/api/getHistory", {
      params,
    });
  },
  /**
   * 投资者关系
   * @param {} param0
   * @returns
   */
  async getInvestor({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getInvestor", {
      params,
    });
    return data;
  },
  /**
   * 资质证书
   * @param {} param0
   * @returns
   */
  async getCert({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getCert", {
      params,
    });
    return data;
  },
  /**
   * 联系我们
   * @param {} param0
   * @returns
   */
  async getContact({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getContact", {
      params,
    });
    return data;
  },
  /**
   * 关于我们
   * @param {} param0
   * @returns
   */
  async getAbout({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getAbout", {
      params,
    });
    return data;
  },
  /**
   * 维修校准
   * @param {} param0
   * @returns
   */
  async getRepair({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getRepair", {
      params,
    });
    return data;
  },
  /**
   * 文档下载
   * @param {} param0
   * @returns
   */
  async getAttachment({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getAttachment", {
      params,
    });
    return data;
  },
  /**
   * 获取资讯
   * @param {} param0
   * @returns
   */
  async getInfo({ commit }, params) {
    const { data } = await this.$axios.$get("/api.php/api/getInfo", {
      params,
    });
    return data;
  },
  /**
   * 获取TDK
   * @param {} param
   * @returns
   */
  async getMate(_, params) {
    const { data } = await this.$axios.$get("/api.php/api/getMate", {
      params,
    });
    return data;
  },
  /**
   * search
   * @param {} param
   * @returns
   */
  async getSearch(_, { keywords, source }) {
    const { data } = await this.$axios.$get("/api.php/api/search", {
      params: { keywords },
      cancelToken: source.token,
    });
    return data;
  },
  /**
   * links
   * @param {} param
   * @returns
   */
  async getFriendLk(_, params) {
    const { data } = await this.$axios.$get("/api.php/api/getFriendLk", {
      params,
    });
    return data;
  },
  /**
   *
   * @param {} param
   * @returns
   */
  async getAttachmentImg(_, params) {
    const { data } = await this.$axios.$get("/api.php/api/getAttachmentImg", {
      params,
    });
    return data;
  },
  /**
   *
   * @param {} param
   * @returns
   */
  async getInvestorFile(_, params) {
    const { data, totalPage } = await this.$axios.$get(
      "/api.php/api/getInvestorFile",
      {
        params,
      }
    );
    return { data, totalPage };
  },
};
