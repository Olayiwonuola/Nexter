const path = require("path");

module.exports = {
  entry: "./App/assets/scripts/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "App"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "App"),
    },
    hot: true,
    port: 3000,
    host: "0.0.0.0",
  },

  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //3 inject styles into dom
          "css-loader", //2. turns css into js
          "sass-loader", //1. turns sass into css
        ],
      },
    ],
  },
};
