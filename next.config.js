require("dotenv").config();
const webpack = require("webpack");
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/admin-access": { page: "/admin-access" },
      "/admin-login": { page: "/admin-login" },
      "/results": { page: "/results" },
      "/admitCards": { page: "/admitCards" }
    };
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://contactyash.github.io/rojgaralerts/"
      : "",
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  }
};
