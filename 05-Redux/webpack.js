const path = require("path");
const appDir = process.cwd();
const webpack = require("webpack");

const appPath = path.join(appDir, "app");

const hotMiddlewareScript = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true";

module.exports = {
  devtool: "eval",
  name: "browser",
  entry: {
    app: ["app/app.jsx", hotMiddlewareScript]
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: "babel-loader",
        options: {
          compact: false,
          presets: ["react-hmre", ["es2015", {modules: false}], "react", "stage-0"],
          plugins: ["transform-decorators-legacy"]
        }
      },
      {
        test: /\.css$/, use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import")({
                  path: appPath,
                  addDependencyTo: webpack // for hot-reloading
                }),
                require("postcss-mixins")(),
                require("postcss-custom-properties")(),
                require("postcss-nesting")(),
                require("postcss-conditionals")(),
                require("postcss-cssnext")({browsers: ["> 1%", "last 2 versions"]}),
                require("postcss-reporter")({clearMessages: true, filter: msg => msg.type === "warning" || msg.type !== "dependency"})
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.join(appDir, "node_modules"), appDir, appPath, path.join(__dirname, "../src")],
    extensions: [".js", ".jsx", ".css"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({__DEVCLIENT__: true, __DEVSERVER__: false})
  ]
};
