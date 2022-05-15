export default {
  head: {
    title: "main-website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    script: [
      {
        nomodule: true,
        src: "//unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
      },
      {
        type: "module",
        src: "//unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/css/global.scss", "@/assets/css/tailwind.css"],
  plugins: [],
  components: true,
  buildModules: [
    // "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "@nuxt/content"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api.php": "http://admin.ks33.work/",
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
