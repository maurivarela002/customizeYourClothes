import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import { ms } from '@/iconsets/icon/materialSymbols'

export default createVuetify({
  components: {
    ...components,
    ...labsComponents
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          /* Gray tokens */
          /* Blue tokens */
          /* Primary colors */
          /* others */
          /* Red tokens */
          /* Violet tokens */
          /* yellows token */
        }
      },
    }
  },
  icons: {
    defaultSet: 'ms',
    sets: {
      ms,
    },
  },
})
