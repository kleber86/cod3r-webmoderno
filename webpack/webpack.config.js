const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
               cache: true,
               parallel: true 
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
                'css-loader' // Interpretar @import, url()...
            ]
        }]
    }
}