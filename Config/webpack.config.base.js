/**
 * @date: 2021-12-19 11:04:48
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-19 12:02:25
 * @FilePath: \LearnWebGL-TypeScript\Config\webpack.config.base.js
 */
const path =require('path');

module.exports={
    entry:path.resolve(__dirname,'../Source/index.ts'),
    output:{
        path:path.resolve(__dirname,'../Build'),
        filename:'Rubidium.js',
        library:{
            name:'Rubidium',
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
