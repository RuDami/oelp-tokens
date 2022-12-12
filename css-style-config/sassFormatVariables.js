const formattedVariables = require("./formattedVariables");
const { fileHeader} = require('style-dictionary/lib/common/formatHelpers');

 function sassFormatVariables ({dictionary, options, file}) {
    const { outputReferences, themeable = false } = options;
    return fileHeader({file, commentStyle: 'short'}) +
        formattedVariables({format: 'sass', dictionary, outputReferences, themeable});
}

module.exports = sassFormatVariables