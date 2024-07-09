import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Plugin para copiar archivos durante la construcción
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        // Plugin para copiar archivos
        copy({
          targets: [
            // Copiar archivos de locales al directorio de salida
            { src: 'src/locales/**/*', dest: 'dist/assets/src/locales' },
          ],
          verbose: true, // Mostrar detalles en la consola
        }),
      ],
    },
  },
});
