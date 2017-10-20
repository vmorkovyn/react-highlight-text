'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighlightText = function HighlightText(_ref) {
    var text = _ref.text,
        searchQuery = _ref.searchQuery,
        className = _ref.className,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;

    if (!(searchQuery && text)) {
        return _react2.default.createElement(
            'span',
            null,
            text
        );
    }
    var elements = [];
    (0, _utils.getMatchTerms)(text, searchQuery).forEach(function (term, i) {
        var _getTermMatches = (0, _utils.getTermMatches)(text, term),
            startIndex = _getTermMatches.startIndex,
            endIndex = _getTermMatches.endIndex;

        if (startIndex) {
            var beforeMatchedText = text.slice(0, startIndex);
            elements.push(_react2.default.createElement(
                'span',
                { key: 'beforeMatchedText' + term + i },
                beforeMatchedText
            ));
        }
        elements.push(_react2.default.createElement(
            'span',
            { key: 'term' + term + i, className: className, style: style },
            term
        ));
        text = text.substr(endIndex);
    });
    if (text) {
        elements.push(_react2.default.createElement(
            'span',
            { key: text },
            text
        ));
    }
    return _react2.default.createElement(
        'span',
        null,
        elements
    );
};

HighlightText.propTypes = {
    text: _propTypes2.default.string,
    searchQuery: _propTypes2.default.string,
    className: _propTypes2.default.any,
    style: _propTypes2.default.object
};

exports.default = HighlightText;