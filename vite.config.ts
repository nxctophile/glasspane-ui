import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'glasspane-ui',
      fileName: (format) => `glasspane-ui.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  },
  plugins: [svelte()]
});
