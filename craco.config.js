const { styles } = require("@ckeditor/ckeditor5-dev-utils");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const enableCKEWebpackConfigPlugin = (webpackConfig, { env, paths }) => {
  // Extract the oneOf array from the relevant webpack.module.rules object
  let oneOf;
  let ix;
  ix = webpackConfig.module.rules.findIndex(item => {
    return item.hasOwnProperty("oneOf");
  });
  oneOf = webpackConfig.module.rules[ix].oneOf;
// Add the SVG and CSS loaders to the oneOf array
  const additions = [
    

    {
      // test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
      // test: /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/,
      // test: /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/,
      // test: /ckeditor5-[\w/\/]+\.svg$/,
      test: /\.svg$/,
      use: ["raw-loader"]
    },
    {
      // test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      test: /\.css$/,
      use: [
            {
              loader: 'style-loader',
              options: {
                  injectType: 'singletonStyleTag',
                  attributes: {
                      'data-cke': true
                  }
              }
          },
          {
              loader: 'postcss-loader',
              options: styles.getPostCssConfig( {
                  themeImporter: {
                      themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                  },
                  minify: true
              } )
          }
      ]
  },
  ];
  additions.forEach((item, index) => {
    oneOf.push(item);
  });
// Modify cssRegex
  let loader;
  loader = oneOf.find(item => {
    if (item.test !== undefined)
      return item.test.toString() === cssRegex.toString();
  });
  loader.exclude = [cssModuleRegex, /\.css$/];
// Modify cssModuleRegex
  loader = oneOf.find(item => {
    if (item.test !== undefined)
      return item.test.toString() === cssModuleRegex.toString();
  });
  loader.exclude = [/\.css$/];
// Modify file-loader
  loader = oneOf.find(item => {
    if (item.loader !== undefined)
      return (
        item.loader.toString() === require.resolve("file-loader").toString()
      );
  });
  loader.exclude = [
    /\.(js|mjs|jsx|ts|tsx)$/,
    /\.html$/,
    /\.json$/,
    /\.svg$/,
    /\.css$/
  ];
// Always return a config object.
  return webpackConfig;
};
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      return enableCKEWebpackConfigPlugin(webpackConfig, { env, paths });
    }
  }
};