const {  sassFormatVariables, cssFormatVariables} = require('./css-style-config');




module.exports = {
  format: {
    cssFormatVariables,
    sassFormatVariables,
  },

  source: ['tokens/dark/**/*.json'],
  platforms: {
    "css": {
      "transformGroup": "css",
      "buildPath": "./css/",
      "files": [{
        "destination": "variables-dark.css",
        "format": "cssFormatVariables",
        "options": {
          "outputReferences": true,
          "selector": "[data-theme=dark]",
        }
      }]
    }
  }
};