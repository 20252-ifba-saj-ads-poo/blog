import { defineUserConfig } from "vuepress";
import umlPlugin from 'markdown-it-plantuml';
import table_captions from 'markdown-it-table-captions'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  head: [
    // Adiciona o CSS do Codapi
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.css",
      },
    ],
    // Adiciona o script JavaScript do Codapi
    [
      "script",
      {
        src: "https://unpkg.com/@antonz/codapi@0.19.10/dist/snippet.js",
      },
    ],
  ],

  lang: "pt-BR",
  title: "20252 POO",
  description: "Material das Aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {
      openMarker: '```plantuml', 
      closeMarker: '```',
      server: 'https://kroki.io/plantuml/'
    })
    md.use(table_captions)
  },


  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
