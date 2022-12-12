const { sassFormatVariables, cssFormatVariables} = require('./css-style-config');




module.exports = {
  format: {
    cssFormatVariables,
    sassFormatVariables,
  },

  source: ['tokens/light/**/*.json'],
  platforms: {
    "css": {
      "transformGroup": "css",
      "buildPath": "./css/",
      "files": [{
        "destination": "variables.css",
        "format": "cssFormatVariables",
        "options": {
          "outputReferences": true
        }
      }, {
        "destination": "variables.scss",
        "format": "sassFormatVariables",
        "options": {
          "outputReferences": true
        }
      }]
    }
  }
};