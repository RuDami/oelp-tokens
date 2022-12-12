const sassExportFormatVariables = require("./sass-export-config/sassExportFormatVariables");
const transforms = require("style-dictionary/lib/common/transforms");


module.exports = {
  format: {
    sassFormatVariablesExport: function({dictionary, options={}, file}) {
        const forcePrefix = ' ';
        const beforeFormatSymbol = '('
        const afterFormatSymbol = ');'
        const formatting = {
            suffix: ','
        }
        const transform = (value) => {
            return value
            // return transforms["name/cti/camel"].transformer(
            //     {
            //         path: value.split('-')
            //     }, {
            //         prefix: ''
            //     }
            // )
        }
        return sassExportFormatVariables({dictionary, options, file, forcePrefix,beforeFormatSymbol, afterFormatSymbol, formatting, transform});

    }
  },

  source: ['tokens/light/**/*.json'],
  platforms: {
      scss: {
          transformGroup: 'scss',
          buildPath: 'css/',
          files: [{
              destination: 'variables-export.scss',
              format: 'sassFormatVariablesExport',
              options: {
                  "selector": "$theme-colors:",
                  outputReferences: true,

              }
          }]
      }
  }
};