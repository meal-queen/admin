import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dns from 'node:dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //     // '/foo': 'http://localhost:8080',
  //   },
  // },
});
