'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.quoteString = quoteString;
exports.getTermStartIndex = getTermStartIndex;
exports.getMatchTerms = getMatchTerms;
function quoteString(rawString) {
    return rawString.replace(/([.?*+^$[(){}|\\])/g, '\\$1');
}

function getTermStartIndex(text, term) {
    var pattern = new RegExp('' + quoteString(term), 'gi');
    var match = pattern.exec(text);
    if (!match) {
        return 0;
    }

    return match.index;
}

function getMatchTerms(text, searchQuery) {
    var search = quoteString(searchQuery).trim().replace(/ /gi, '|');
    var pattern = new RegExp('(' + search + ')', 'gi');
    return text.match(pattern) || [];
}