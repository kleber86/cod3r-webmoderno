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
    }
}