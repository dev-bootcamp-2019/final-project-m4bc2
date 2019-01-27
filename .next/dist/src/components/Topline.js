'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _parseFloat = require('babel-runtime/core-js/number/parse-float');

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _karmaCurrBase = require('../karmaCurrBase');

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _Name = require('./Name');

var _Name2 = _interopRequireDefault(_Name);

var _ContractAddress = require('./ContractAddress');

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\expt\\final-project-m4bc2\\src\\components\\Topline.js';


var etherLink = 'https://rinkeby.etherscan.io/address/';
var etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(_ContractAddress2.default, '?a=');

var ShowTopLine = function (_Component) {
  (0, _inherits3.default)(ShowTopLine, _Component);

  function ShowTopLine() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShowTopLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShowTopLine.__proto__ || (0, _getPrototypeOf2.default)(ShowTopLine)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentUser: '',
      initialBalance: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShowTopLine, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var users, balance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                users = [];
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                users = _context.sent;
                balance = 0.000000000000000001;
                _context.next = 7;
                return _karmaCurrBase2.default.methods.balanceOf(users[0]).call();

              case 7:
                balance = _context.sent;

                balance = (0, _parseFloat2.default)(balance / Math.pow(10, 18)).toFixed(6);
                this.setState({ currentUser: users[0], initialBalance: balance });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, { verticalAlign: 'bottom', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'hand spock outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Hear well and prosper '), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' ', _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherLink.concat(this.state.currentUser, '#tokentxns'), __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.state.currentUser)))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://static.wixstatic.com/shapes/adbb24_01ca80e36ca64f0f9f8878e99f23c94f.svg', size: 'small', spaced: true, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_semanticUiReact.Statistic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _Name2.default))))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherTokenLink.concat(this.state.currentUser), __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'gem', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.initialBalance), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' ', _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Current ".concat(_Name2.default, " Balance"), ' ')))))), _react2.default.createElement(_semanticUiReact.Grid.Row, { verticalAlign: 'top', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Deployed on ', _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: 'https://ethereum.org', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { fitted: true, name: 'ethereum', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), '  @ ', _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherLink.concat(_ContractAddress2.default), __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _ContractAddress2.default)))));
    }
  }]);

  return ShowTopLine;
}(_react.Component);

exports.default = ShowTopLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcVG9wbGluZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTdGF0aXN0aWMiLCJHcmlkIiwiRGl2aWRlciIsIkRyb3Bkb3duIiwiSGVhZGVyIiwiSWNvbiIsIkltYWdlIiwia2FybWEiLCJ3ZWIzIiwiTmFtZSIsIkNvbnRyYXRBZGRyZXNzIiwiTGluayIsIlJvdXRlciIsImV0aGVyTGluayIsImV0aGVyVG9rZW5MaW5rIiwiY29uY2F0IiwiU2hvd1RvcExpbmUiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiaW5pdGlhbEJhbGFuY2UiLCJ1c2VycyIsImV0aCIsImdldEFjY291bnRzIiwiYmFsYW5jZSIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwidG9GaXhlZCIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFXLEFBQU0sQUFBUyxBQUFVLEFBQVEsQUFBTTs7QUFDekUsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztBQUc3QixJQUFNLFlBQU4sQUFBa0I7QUFDbEIsSUFBTSxpQkFBaUIsc0NBQUEsQUFBc0MsQUFBTyxrQ0FBcEUsQUFBdUIsQUFBNEQ7O0lBRTdFLEE7Ozs7Ozs7Ozs7Ozs7O3NOQUNKLEE7bUJBQVEsQUFDTyxBQUNiO3NCQUZNLEEsQUFFUztBQUZULEFBQ047Ozs7Ozs7Ozs7O21CQUtJO0Esd0IsQUFBUTs7dUJBQ0UsY0FBQSxBQUFLLElBQUwsQSxBQUFTOzttQkFBdkI7QSxpQ0FDSTtBLDBCLEFBQVU7O3VCQUNFLHdCQUFBLEFBQU0sUUFBTixBQUFjLFVBQVUsTUFBeEIsQUFBd0IsQUFBTSxJ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c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUE7QUFBQTtBQUFBLFNBQThCLGdDQUFBLGNBQUEsT0FBRyxRQUFILEFBQVUsVUFBUyxLQUFuQixBQUF1Qix1QkFBc0IsTUFBN0MsQUFBb0Q7b0JBQXBEO3NCQUFBLEFBQTJFO0FBQTNFO3lCQUEyRSxBQUFDLHVDQUFLLFFBQU4sTUFBYSxNQUFiLEFBQW9CLFlBQVcsTUFBL0IsQUFBc0M7b0JBQXRDO3NCQUF6RyxBQUE4QixBQUEyRTtBQUFBO1dBQXVELHdCQUFBLGNBQUEsT0FBRyxRQUFILEFBQVUsVUFBUyxLQUFuQixBQUF1Qix1QkFBc0IsTUFBUSxVQUFyRCxBQUFxRCxBQUFVLEFBQU87b0JBQXRFO3NCQW5DeEssQUFDRSxBQWdDRSxBQUNFLEFBQ0UsQUFBZ0ssQUFBd0YsQUFNalE7QUFOeUs7Ozs7OztBQW5EbEosQSxBQTREMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVG9wbGluZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9leHB0L2ZpbmFsLXByb2plY3QtbTRiYzIifQ==