import React from 'react';
import { getTermStartIndex, getMatchTerms } from './utils';

const HighlightText = ({ text, searchQuery, className, style = {} }) => {
    if (!(searchQuery && text)) {
        return <span>{text}</span>;
    }
    const elements = [];
    getMatchTerms(text, searchQuery).forEach((term, i) => {
        const startTermIndex = getTermStartIndex(text, term);
        const endTermIndex = startTermIndex + term.length;
        text = text.substr(endTermIndex);
        if (startTermIndex) {
            const beforeMatchedText = text.substr(0, startTermIndex);
            elements.push(
                <span key={`nonMatch${term}${i}`}>
                    {beforeMatchedText}
                </span>
            );
        }
        elements.push(
            <span key={`match${term}${i}`} className={className} style={style}>
                {term}
            </span>
        );
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
