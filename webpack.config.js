let path = require("path");
let fs = require("fs");
let webpack = require("webpack");

module.exports = {
    cache: true,
    entry: {
        background: "./src/background.ts",
        cs_watch_page: "./src/cs_watch_page.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "ts-loader"
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "src/build/js")
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: fs.readFileSync("./LICENSE", {encoding: "UTF-8"}),
            entryOnly: true
        })
    ],
    resolve: {
        // Add `.ts` as a resolvable extension.
        extensions: [".ts"]
    }
};
