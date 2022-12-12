const sassExportFormattedVariables = require("./sassExportFormattedVariables");
const { fileHeader} = require('style-dictionary/lib/common/formatHelpers');
function sassExportFormatVariables({dictionary, options={}, file, forcePrefix = null, beforeFormatSymbol = '{', afterFormatSymbol = '}', formatting = {}, transform= null}) {
    const selector = options.selector ? options.selector : `:root`;
    const { outputReferences } = options;
    return fileHeader({file}) +
        `${selector} ${beforeFormatSymbol}\n` +
        sassExportFormattedVariables({format: 'css', dictionary, outputReferences, forcePrefix, formatting, transform}) +
        `\n${afterFormatSymbol}\n` +':export {\n' +
        '  @each $key, $value in $theme-colors {\n' +
        '    #{unquote($key)}: $value;\n' +
        '  }\n' +
        '}';
}

module.exports = sassExportFormatVariables