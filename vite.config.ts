import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd());
  console.log('Current mode:', command);
  console.log('Current environment configuration:', currentEnv); //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    plugins: [
      react(),
      AutoImport({
        imports: ['react', 'react-router-dom'],
        dts: './src/typings/auto-imports.d.ts',
        dirs: ['src/store'],
      })
    ],
    mode,
    resolve: {
      //别名
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@store': resolve(__dirname, './src/store'),
        '@pages': resolve(__dirname, './src/pages'),
        '@assets': resolve(__dirname, './src/assets'),
        '@hooks': resolve(__dirname, './src/hooks'),
      },
    },
    //服务
    server: {
      //自定义代理---解决跨域
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://xxxxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  });
};
