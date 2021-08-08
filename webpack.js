const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: ['./src/index.tsx'],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Converts css to d.ts files so typescript is not complaining about missing types
                    'css-modules-typescript-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            modules: true,
                        },
                    },
                    // Scopes the styles to component
                    'scoped-css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
                <html lang="en">
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
                    <body>
                        <div id="root"></div>
                    </body>
                </html>`,
            // favicon: 'dist/favicon.ico'
        }),
    ],
    devServer: {
        open: true,
        writeToDisk: true
    },
    devtool: 'source-map',
}
