import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  //hostname: "https://20251-ifba-saj-ads-poo.github.io",

  author: {
    name: "Leandro Souza",
    url: "https://github.com/leandro-costa",
  },

  lastUpdated: false,
  contributors: false,

  //iconAssets: "iconify",

  iconAssets: "fontawesome-with-brands",

  logo: "/logo.svg",

  repo: "20251-ifba-saj-ads-poo/blog",

  docsDir: "src",

  //docsBranch: "main",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Material de aula IFBA SAJ",

  displayFooter: true,



  blog: {
    description: "Professor EBTT",
    //intro: "/intro.html",
    
    //roundAvatar:true,
    
    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa",
    },
  },

  metaLocales: {
    editLink: "Edite esta página no GitHub",
    toc: "Nesta Página",
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: {
      excerpt: false
    },
    search: true,



    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },

    markdownMath: {
      // install katex before enabling it
      //type: "katex",
      // or install mathjax-full before enabling it
      type: "mathjax",
    },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: true,

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      gfm: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
});
