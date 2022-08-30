const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const styleLoader = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index"),
  },
  target: "web",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          styleLoader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction
                  ? "[hash:base64:5"
                  : "[local]__[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    hot: true,
    port: 3001,
  },
};
