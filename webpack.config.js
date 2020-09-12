const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    module: {
      rules: [
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: {
            loader: "elm-webpack-loader",
            options: {
              debug: argv.mode === "development" ? true : false,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".elm", ".json", ".mjs", ".wasm"],
    },
    plugins: [
      new HTMLPlugin({
        template: path.join(__dirname, "src/index.html"),
      }),
    ],
  };
};
