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
        var _getTermMatches = (0, _utils.getTermMatches)(text, term);

        var startIndex = _getTermMatches.startIndex;
        var endIndex = _getTermMatches.endIndex;

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
    text: _react2.default.PropTypes.string,
    searchQuery: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.any,
    style: _react2.default.PropTypes.object
};

exports.default = HighlightText;