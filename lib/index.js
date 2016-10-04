'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighlightText = function HighlightText(_ref) {
    var text = _ref.text;
    var searchQuery = _ref.searchQuery;
    var className = _ref.className;
    var _ref$style = _ref.style;
    var style = _ref$style === undefined ? {} : _ref$style;

    if (!(searchQuery && text)) {
        return _react2.default.createElement(
            'span',
            null,
            text
        );
    }
    var elements = [];
    (0, _utils.getMatchTerms)(text, searchQuery).forEach(function (term, i) {
        var startTermIndex = (0, _utils.getTermStartIndex)(text, term);
        var endTermIndex = startTermIndex + term.length;
        text = text.substr(endTermIndex);
        if (startTermIndex) {
            var beforeMatchedText = text.substr(0, startTermIndex);
            elements.push(_react2.default.createElement(
                'span',
                { key: 'nonMatch' + term + i },
                beforeMatchedText
            ));
        }
        elements.push(_react2.default.createElement(
            'span',
            { key: 'match' + term + i, className: className, style: style },
            term
        ));
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
    text: _react2.default.PropTypes.string,
    searchQuery: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.any,
    style: _react2.default.PropTypes.object
};

exports.default = HighlightText;