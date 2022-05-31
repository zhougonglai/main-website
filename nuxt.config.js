export default {
  ssr: false,
  env: {
    BASE_API: process.env.BASE_API,
  },
  head: {
    title: "创远仪器",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        nomodule: true,
        src: "https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/ionicons/5.5.4/ionicons/ionicons.min.js",
      },
      {
        type: "module",
        src: "https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/ionicons/5.5.4/ionicons/ionicons.esm.min.js",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/css/global.scss", "@/assets/css/tailwind.css"],
  plugins: ["~/plugins/bus"],
  components: true,
  buildModules: [
    // "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  axios: {
    baseURL: process.env.BASE_API,
    proxy: true,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_API,
    },
  },
  proxy: {
    "/api.php": process.env.BASE_API,
  },
  pwa: {
    manifest: {
      lang: "zh-cn",
    },
  },
  content: {},
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
