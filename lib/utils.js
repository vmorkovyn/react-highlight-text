'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.quoteString = quoteString;
exports.getTermMatches = getTermMatches;
exports.getMatchTerms = getMatchTerms;
function quoteString(rawString) {
    return rawString.replace(/([.?*+^$[(){}|\\])/g, '\\$1');
}

function getTermMatches(text, term) {
    var pattern = new RegExp('' + quoteString(term), 'gi');
    var matches = pattern.exec(text);
    if (!matches) {
        return {
            startIndex: 0,
            endIndex: 0
        };
    }

    return {
        startIndex: matches.index,
        endIndex: matches.index + term.length
    };
}

function getMatchTerms(text, searchQuery) {
    var search = quoteString(searchQuery).trim().replace(/ /gi, '|');
    var pattern = new RegExp('(' + search + ')', 'gi');
    return text.match(pattern) || [];
}