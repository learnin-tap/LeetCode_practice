/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s.trim('')?!isNaN(Number(s)):false
};