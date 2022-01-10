/**
 * @date: 2021-12-19 11:04:48
 * @LastAuthor: 唐建军
<<<<<<< HEAD
 * @lastTime: 2021-12-30 19:14:17
 * @FilePath: \Rudium\Config\webpack.config.base.js
=======
 * @lastTime: 2021-12-19 12:02:25
 * @FilePath: \LearnWebGL-TypeScript\Config\webpack.config.base.js
>>>>>>> c0c492e1e3af9de1f9ca6c52f1a292bfc8db54df
 */
const path =require('path');

module.exports={
    entry:path.resolve(__dirname,'../Source/index.ts'),
    output:{
        path:path.resolve(__dirname,'../Build'),
<<<<<<< HEAD
        filename:'Rubium.js',
        library:{
            name:'Rubium',
=======
        filename:'Rubidium.js',
        library:{
            name:'Rubidium',
>>>>>>> c0c492e1e3af9de1f9ca6c52f1a292bfc8db54df
            type:'umd',
        }
    },
    resolve:{
        extensions:['.ts','.js','.vs','.fs','.glsl']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            },
            {
                test:/\.(glsl|vs|fs)$/,
                loader:'ts-shader-loader'
            }
        ]
    }
}
