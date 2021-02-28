const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    /**
     * Configuração do nome e a saida do arquivo 
     */
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: './public',
        port: 9000
    },
    optimization:{
        minimizer:[
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules:[{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona o CSS a DOM. Conflito com o MiniCssExtractPlugin
                'css-loader', // Interpretar @import, url()...
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}