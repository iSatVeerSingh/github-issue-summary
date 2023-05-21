import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

/**@type {import("webpack").Configuration} */
const config = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  target: "web",
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    liveReload: true,
    static: {
      directory: path.resolve("public"),
    },
    port: 5000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
        use: "ts-loader",
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
    }),
  ],
};

export default config;
