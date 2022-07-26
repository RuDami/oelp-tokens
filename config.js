module.exports = {
  format: {
    customFormat: function({dictionary, options}) {
      return dictionary.allTokens.map(token => {        
        if (token.name.includes('font-weight')) {
          if (!token.name.indexOf('f')) {
            return `$${token.name}: ${token.description};`
          }
          const fontWeight = dictionary
            .allTokens.find(item => {
              return item.type === 'fontWeights' && item.value === token.value
            }).description

          return `$${token.name}: ${fontWeight};`
        }
        return `$${token.name}: ${token.value};`
      }).join(`\n`)
    }
  },

  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      buildPath: 'js/',
      transformGroup: 'js',
      files: [{
        destination: 'variables.js',
        format: 'javascript/es6',
        options: {
          outputReferences: true
        }
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'css/',
      files: [{
        destination: 'variables.scss',
        format: 'customFormat',
        options: {
          outputReferences: true,
        }
      }]
    }
  }
};