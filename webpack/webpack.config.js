const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', 
    entry: './src/principal.js',
    /**
     * Configuração do nome e a saida do arquivo 
     */
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
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