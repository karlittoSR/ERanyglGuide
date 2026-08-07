import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import LastUpdated from './LastUpdated.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(LastUpdated)
    })
  }
}
