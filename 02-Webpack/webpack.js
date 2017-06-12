const path = require("path");
const appDir = process.cwd();
const appPath = path.join(appDir, "app");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    name: "browser",
    entry: {app: "./app.jsx"},
    output: {
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$|\.jsx$/,
          loader: "babel-loader",
          options: {
            compact: true,
            presets: [["es2015", {modules: false}], "react"]
          },
          include: [appPath, path.join(__dirname, "../src")]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader"]
          })
        }
      ]
    },
    resolve: {
      modules: [path.join(appDir, "node_modules"), appDir, appPath, path.join(__dirname, "..")],
      extensions: [".js", ".jsx", ".css"]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "styles.css",
        allChunks: true
      })
    ]
  }
];
