// módulo de node para trabajar directorios de rutas
// y archivos 
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// objeto a exportar con la configuración de webpack
module.exports = {
    //punto de entrada para webpack
    entry: './src/index.js',
    //punto de salida para el build de webpack
    output: {
        // dirección para guardar el archivo de salida
        path: path.resolve(__dirname, 'dist'),
        // nombre del archivo de salida
        filename: 'main.js',
    },
    //configuraciones a utilizar
    resolve: {
        //extenciones a trabajar
        extensions: ['.js']
    },
    // modulo en base a reglas para trabajar ocn babel
    module: {
        rules:
        // reglas para trabajar con diferentes tipos de archivos
        [
            {
                // Test declara que extensión de archivos aplicara el loader
                // test recibe expresiones regulares
                test: /\.js$/,
                // Exclude permite omitir archivos o carpetas especificas
                exclude: /node_modules/,
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inyecta todos los activos en el dado template o template content
            // pasar true lo agregará a la cabeza / cuerpo dependiendo de la
            // script loading opcion
            inject: true,
            // ruta relativa o absoluta de la plantilla
            template: './public/index.html',
            // archivo para escribir el html, pordefecto es index.html
            filename: './index.html'
        })
    ]
}