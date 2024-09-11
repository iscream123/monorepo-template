import { defineConfig } from 'umi';

export default defineConfig({
  title: 'app-a',
  define: {},
  npmClient: 'pnpm',
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',
  //修复 esbuild 压缩器自动引入的全局变量导致的命名冲突问题
  esbuildMinifyIIFE: true,
  monorepoRedirect: { peerDeps: true },
  clickToComponent: {},
});
