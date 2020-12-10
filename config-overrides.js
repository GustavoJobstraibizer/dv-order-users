const { addBabelPlugin, override, addBabelPresets } = require("customize-cra");

module.exports = override(
  addBabelPresets("@babel/preset-react"),
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      paths: [
        {
          rootPathSuffix: "./src/",
          rootPathPrefix: "~/",
        },
        {
          rootPathSuffix: "./",
          rootPathPrefix: "_/",
        },
      ],
    },
  ])
);
