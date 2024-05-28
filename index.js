// let path = require("path");
// let webpack = require("webpack");
// let webpackDevServer = require("webpack-dev-server");
// let webpackConfig = require("./webpack.config");

// let webpackDevServerOptions = {
//   publicPath: "/",
//   contentBase: path.join(process.cwd(), "dist"),
//   historyApiFallback: true,
//   hot: true,
//   host: "0.0.0.0"
// };

// webpackDevServer.addDevServerEntrypoints(webpackConfig, webpackDevServerOptions);
// let webpackCompiler = webpack(webpackConfig);

// let app = new webpackDevServer(webpackCompiler, webpackDevServerOptions);

// let port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`App listening on ${port}`));

const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");

const webpackDevServerOptions = {
  publicPath: webpackConfig.output.publicPath,
  contentBase: path.join(process.cwd(), "dist"),
  historyApiFallback: true,
  hot: true,
  host: "0.0.0.0",
  open: true,
  compress: true,
  quiet: true // This ensures that FriendlyErrorsWebpackPlugin can show clean output
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, webpackDevServerOptions);
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, webpackDevServerOptions);

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`App listening on http://localhost:${port}`);
});
