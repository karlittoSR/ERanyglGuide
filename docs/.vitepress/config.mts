import { defineConfig } from 'vitepress'

const base = '/ERanyglGuide/'

export default defineConfig({
  base,
  title: 'Elden Ring Speedrun Guides',
  description: 'Route guides for Elden Ring speedrunning',
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: base + 'favicon.png' }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        outline: { level: [2, 3] },
        nav: [
          { text: 'Guides', link: '/guide/death-poker' },
          { text: 'speedrun.com', link: 'https://www.speedrun.com/eldenring' }
        ],
        sidebar: [
          {
            text: 'Any% Glitchless',
            collapsed: false,
            items: [{ text: 'Death Poker (1.07)', link: '/guide/death-poker' }]
          }
        ],
        editLink: {
          pattern: 'https://github.com/karlittoSR/ERanyglGuide/edit/main/docs/:path',
          text: 'Suggest a change'
        },
        lastUpdatedText: 'Last updated'
      }
    },

    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        outline: { label: 'Sur cette page', level: [2, 3] },
        nav: [
          { text: 'Guides', link: '/fr/guide/death-poker' },
          { text: 'speedrun.com', link: 'https://www.speedrun.com/eldenring' }
        ],
        sidebar: [
          {
            text: 'Any% Glitchless',
            collapsed: false,
            items: [{ text: 'Death Poker (1.07)', link: '/fr/guide/death-poker' }]
          }
        ],
        editLink: {
          pattern: 'https://github.com/karlittoSR/ERanyglGuide/edit/main/docs/:path',
          text: 'Proposer une modification'
        },
        lastUpdatedText: 'Dernière mise à jour',
        docFooter: { prev: 'Précédent', next: 'Suivant' },
        outline: { label: 'Sur cette page' },
        darkModeSwitchLabel: 'Apparence',
        returnToTopLabel: 'Retour en haut'
      }
    }
  },

  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@karlittosr' }
    ]
  }
})
