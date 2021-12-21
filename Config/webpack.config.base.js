/**
 * @date: 2021-12-19 11:04:48
 * @LastAuthor: 唐建军
 * @lastTime: 2021-12-30 19:14:17
 * @FilePath: \Rudium\Config\webpack.config.base.js
 */
const path =require('path');

module.exports={
    entry:path.resolve(__dirname,'../Source/index.ts'),
    output:{
        path:path.resolve(__dirname,'../Build'),
        filename:'Rubium.js',
        library:{
            name:'Rubium',
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
