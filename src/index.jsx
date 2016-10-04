import React from 'react';
import { getTermMatches, getMatchTerms } from './utils';

const HighlightText = ({ text, searchQuery, className, style = {} }) => {
    if (!(searchQuery && text)) {
        return <span>{text}</span>;
    }
    const elements = [];
    getMatchTerms(text, searchQuery).forEach((term, i) => {
        const { startIndex, endIndex } = getTermMatches(text, term);
        if (startIndex) {
            const beforeMatchedText = text.slice(0, startIndex);
            elements.push(<span key={`beforeMatchedText${term}${i}`}>
                {beforeMatchedText}
            </span>
            );
        }
        elements.push(
            <span key={`term${term}${i}`} className={className} style={style}>
                {term}
            </span>
        );
        text = text.substr(endIndex);
    });
    if (text) {
        elements.push(<span key={text}>{text}</span>);
    }
    return <span>{elements}</span>;
};

HighlightText.propTypes = {
    text: React.PropTypes.string,
    searchQuery: React.PropTypes.string,
    className: React.PropTypes.any,
    style: React.PropTypes.object,
};

export default HighlightText;
