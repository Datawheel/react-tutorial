const autoprefixer = require("autoprefixer");
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  "app": path.join(__dirname, "app"),
  "build": path.join(__dirname, "build"),
  "styles": path.join(__dirname, "styles")
};

process.env.BABEL_ENV = TARGET;

const common = {
  "entry": {"app": PATHS.app},
  "resolve": {
    "extensions": ["", ".js", ".jsx", ".json"],
    "modulesDirectories": ["node_modules"]
  },
  "output": {"path": PATHS.build, "filename": "bundle.js"},
  "module": {
    "loaders": [
      {"test": /\.(png|svg)$/, "loader": "file?name=public/[path][name].[ext]"},
      {"test": /\.s?css$/, "loader": ExtractTextPlugin.extract("style-loader", "css!sass!postcss")},
      {
        "test": /\.jsx?$/,
        "loader": "babel",
        "query": {
          "cacheDirectory": true,
          "presets": ["react", "es2015"],
          "plugins": ["array-includes", "transform-class-properties", "transform-object-assign", "syntax-object-rest-spread"],
          "env": {
            "start": {
              "presets": ["react-hmre"]
            }
          }
        },
        "include": PATHS.app
      }
    ]
  },
  "plugins": [new ExtractTextPlugin("public/style.css", {"allChunks": true})],
  "postcss": () => [autoprefixer]
};

const dev = {
  "devServer": {
    "contentBase": PATHS.build,
    "devtool": "eval-source-map",
    "historyApiFallback": true,
    "host": process.env.HOST,
    // enable for testing on entire network
    // "host": process.env.HOST || '0.0.0.0',
    "hot": true,
    "inline": true,
    "stats": "errors-only",
    "port": process.env.PORT,
    "progress": true
  },
  "plugins": [new webpack.HotModuleReplacementPlugin()]
};

const build = {
  "plugins": [
    new webpack.DefinePlugin({"process.env.NODE_ENV": "\"production\""}),
    new webpack.optimize.UglifyJsPlugin({"compress": {"warnings": false}})
  ]
};

if (TARGET === "build") module.exports = merge(common, build);
else module.exports = merge(common, dev);
