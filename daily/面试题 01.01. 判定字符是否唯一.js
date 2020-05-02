/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    return new Set(astr).size==astr.length
};