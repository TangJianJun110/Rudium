/**
 * @date: 2021-12-19 11:04:55
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-19 12:01:12
 * @FilePath: \LearnWebGL-TypeScript\Config\webpack.config.dev.js
 */
const path =require('path');
const base = require('./webpack.config.base')
const { merge } = require('webpack-merge');

module.exports=merge(base,{
    mode:'development',
    devServer:{
        open:true,
        static:{
            directory: path.join(__dirname, '../Examples')
        }
    },
})