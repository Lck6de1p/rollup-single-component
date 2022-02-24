import vue from 'rollup-plugin-vue';
// css
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

import resolve from "rollup-plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
// import babel from 'rollup-plugin-babel'
var src = process.argv.splice(' ')[4].split('--')[1];

export default {
  input: `./src/packages/${src}/index.js`,
  output: [
    {
      file: `dist/${src}.js`,
      format: 'umd',
      globals: {
        vue: "Vue" // 告诉rollup全局变量Vue即是vue
      }
    }
  ],
  external: ['vue'],
  plugins:[
    resolve(),
    commonjs(),
    vue(),
    postcss({
      plugins: [  
        autoprefixer(),
        cssnano()
      ]
    }),
  ]
}