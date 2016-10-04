export function quoteString(rawString) {
    return rawString.replace(/([.?*+^$[(){}|\\])/g, '\\$1');
}

export function getTermStartIndex(text, term) {
    const pattern = new RegExp(`${quoteString(term)}`, 'gi');
    const match = pattern.exec(text);
    if (!match) {
        return 0;
    }

    return match.index;
}

export function getMatchTerms(text, searchQuery) {
    const search = quoteString(searchQuery).trim().replace(/ /gi, '|');
    const pattern = new RegExp(`(${search})`, 'gi');
    return text.match(pattern) || [];
}
