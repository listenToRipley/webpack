const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, //when a javascript is found, it should get transformed
                exclude: /(node_modules)/, //don't do this with node modules, that will take forever
                use: {
                    loader: 'babel-loader'
                }
            }

        ]
    }
}