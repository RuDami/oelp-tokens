const formattedVariables = require("./formattedVariables");
const { fileHeader} = require('style-dictionary/lib/common/formatHelpers');
function cssFormatVariables({dictionary, options={}, file}) {
    const selector = options.selector ? options.selector : `:root`;
    const { outputReferences } = options;
    return fileHeader({file}) +
        `${selector} {\n` +
        formattedVariables({format: 'css', dictionary, outputReferences}) +
        `\n}\n`;
}

module.exports = cssFormatVariables