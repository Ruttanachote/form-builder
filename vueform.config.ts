import en from '@vueform/vueform/locales/en'
import theme from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'
import builder from '@vueform/builder/plugin'

export default defineConfig({
  theme,
  locales: { en },
  locale: 'en',
  apiKey: 'pxm3-nrwu-pi2i-m59x-xzp7',
  plugins: [
    builder,
  ],
})