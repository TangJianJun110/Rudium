/**
 * @date: 2021-12-19 11:06:23
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-19 11:56:10
 * @FilePath: \LearnWebGL-TypeScript\Config\webpack.config.prod.js
 */
 const path =require('path');
 const base = require('./webpack.config.base')
 const { merge } = require('webpack-merge');
 
 module.exports=merge(base,{
     mode:'development',
 })