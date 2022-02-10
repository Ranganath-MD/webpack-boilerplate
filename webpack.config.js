const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";
module.exports = {
  entry: "./src/index.tsx",
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              // "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    hot: true,
    port: 4000,
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};