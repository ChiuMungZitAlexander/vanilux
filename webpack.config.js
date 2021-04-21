const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
