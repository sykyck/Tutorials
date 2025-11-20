const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  exposes: {
    "./Module": "./projects/mfe1/src/app/app.module.ts",
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
