/// <reference types="vitest" />

import path from 'node:path'
import process from 'node:process'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@hankit/tools': path.resolve(__dirname, 'packages/tools/src/index.ts'),
    },
  },
  define: {
    'import.meta.vitest': 'false',
  },
  plugins: process.env.TEST
    ? []
    : [
        Vue(),
        AutoImport({
          imports: [
            'vue',
            '@vueuse/core',
          ],
          dts: true,
        }),
        Components({
          dts: true,
        }),
        Unocss(),
      ],
  test: {
    includeSource: ['packages/*/src/**/*.ts'],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id: any) => {
          if (id.includes('locale'))
            return 'locale'
          if (id.includes('idioms.txt'))
            return 'idioms'
          if (id.includes('polyphones.json'))
            return 'polyphones'
          if (id.includes('node_modules') && !id.endsWith('.css'))
            return 'vendor'
        },
      },
    },
  },
})
