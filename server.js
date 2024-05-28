const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

// Prepare the compiler
const compiler = Webpack(webpackConfig);

// Extract and extend the development server options from your webpack config
const devServerOptions = { ...webpackConfig.devServer, open: true };

// Create a new instance of WebpackDevServer
const server = new WebpackDevServer(devServerOptions, compiler);

// Function to start the server
const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

// Function to stop the server with a callback
const stopServer = async () => {
  console.log('Stopping server...');
  await server.stop();
};

// Start the server
runServer();

// Optionally, set a timeout to stop the server, e.g., after 5000 milliseconds
// setTimeout(stopServer, 5000);
