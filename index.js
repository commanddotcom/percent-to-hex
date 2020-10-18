hsl = require('hsl-to-hex');

/**
 * Converts percent value (between 0 and 1) to HEX color code (between green and red)
 * @param {Object|number} The object [hue, saturation, and lightness] or just a hue number from 0 (green) to 1 (red)
 * @returns {string} The HEX color code
 */
percentToHex = function(params) {
    
    if (typeof params == 'object') {
        var hue = params[0],
        saturation = typeof params[1] == "number" ? params[1] : 100;
        lightness = typeof params[2] == "number" ? params[2] : 50;
    } else if (typeof params == 'number') {
        var hue = params,
        saturation = 100;
        lightness = 50;
    } 
    
    if (hue > 1) {
        hue = 1;
    }

    return hsl(((1-hue)*120).toString(10), saturation, lightness); 
}

module.exports = percentToHex;
