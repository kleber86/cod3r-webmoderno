const webpack = require('webpack')

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
    module: {
        rules:[{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona o CSS a DOM
                'css-loader' // Interpretar @import, url()...
            ]
        }]
    }
}