const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",
  remotes: {
    mfe1: "mfe1@http://localhost:4300/remoteEntry.js"
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto'
    }),
    "shared-lib": {
      singleton: true,
      strictVersion: false,
    }
  }
});
