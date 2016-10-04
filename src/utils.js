export function quoteString(rawString) {
    return rawString.replace(/([.?*+^$[(){}|\\])/g, '\\$1');
}

export function getTermMatches(text, term) {
    const pattern = new RegExp(`${quoteString(term)}`, 'gi');
    const matches = pattern.exec(text);
    return {
        startIndex: matches.index,
        endIndex: matches.index + term.length,
    };
}

export function getMatchTerms(text, searchQuery) {
    const search = quoteString(searchQuery).trim().replace(/ /gi, '|');
    const pattern = new RegExp(`(${search})`, 'gi');
    return text.match(pattern) || [];
}
