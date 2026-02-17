// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import MotionResolver from 'motion-v/resolver';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },

  vite: {
    plugins: [
      tailwindcss(),
      /** @type {any} */ (Components({
        dts: true,
        resolvers: [MotionResolver()],
      })),
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },

  integrations: [vue()],
});
