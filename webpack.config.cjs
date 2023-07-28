const path = require("path");

module.exports = {
  entry: "./index.jsx",
  output: {
    filename: "index.jsx",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "none",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
