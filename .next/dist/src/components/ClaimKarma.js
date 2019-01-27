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

var _karmaMember = require('../karmaMember');

var _karmaMember2 = _interopRequireDefault(_karmaMember);

var _karmaCurrBase = require('../karmaCurrBase');

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _Name = require('./Name');

var _Name2 = _interopRequireDefault(_Name);

var _ContractAddress = require('./ContractAddress');

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\expt\\final-project-m4bc2\\src\\components\\ClaimKarma.js';


var activityOptions = [{ key: '9', text: 'Register a device', value: '9' }, { key: '8', text: 'Upgrade device', value: '8' }, { key: '7', text: 'Register a family member', value: '7' }, { key: '6', text: 'Turn on data collection features', value: '6' }, { key: '3', text: 'Claim an Oticon easter egg', value: '3' }, { key: '1', text: 'Social activity', value: '1' }];
var etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(_ContractAddress2.default, '?a=');

var ShowClaimForm = function (_Component) {
  (0, _inherits3.default)(ShowClaimForm, _Component);

  function ShowClaimForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShowClaimForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShowClaimForm.__proto__ || (0, _getPrototypeOf2.default)(ShowClaimForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentUser: '',
      disabledActivity: false,
      activitySelected: '',
      isActivitySelected: false,
      loading: false,
      startBalance: '',
      startLabel: '',
      endBalance: '',
      statusTrans: 'one',
      endLabel: ''

    }, _this.handleClick = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var karmaMem, balance2;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true });

                karmaMem = (0, _karmaMember2.default)(_this.props.memberAdd);
                _context.next = 5;
                return karmaMem.methods.claimKarma(_this.state.currentUser, _this.state.activitySelected).send({ from: _this.props.memberAdmin });

              case 5:
                balance2 = 0.000000000000000001;
                _context.next = 8;
                return _karmaCurrBase2.default.methods.balanceOf(_this.state.currentUser).call();

              case 8:
                balance2 = _context.sent;

                balance2 = (0, _parseFloat2.default)(balance2 / Math.pow(10, 18)).toFixed(6);
                _this.setState({ endBalance: balance2, startLabel: 'Old Balance', endLabel: 'New Balance', loading: false, statusTrans: 'two', isActivitySelected: false });
              //console.log(this.state.initialBalance, this.state.currentBalance);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.handleChange = function (e, _ref3) {
      var value = _ref3.value;
      return _this.setState({ activitySelected: value, isActivitySelected: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShowClaimForm, [{
    key: 'componentDidMount',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var users, balance;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                users = [];
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                users = _context2.sent;
                balance = 0.000000000000000001;
                _context2.next = 7;
                return _karmaCurrBase2.default.methods.balanceOf(users[0]).call();

              case 7:
                balance = _context2.sent;

                balance = (0, _parseFloat2.default)(balance / Math.pow(10, 18)).toFixed(6);
                this.setState({ currentUser: users[0], startBalance: balance, startLabel: 'Current Balance' });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'gift', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Claim ".concat(_Name2.default)), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Record activity and ', "claim ".concat(_Name2.default)))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, {
        onChange: this.handleChange,
        options: activityOptions,
        placeholder: 'Choose an activity',
        selection: true,
        value: this.state.activitySelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        primary: true,
        loading: this.state.loading,
        disabled: !this.state.isActivitySelected || this.state.loading,
        content: 'Claim!',
        icon: 'gift',
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: this.state.statusTrans === 'one' ? 'gem' : 'gem outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.state.startBalance), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.state.startLabel))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherTokenLink.concat(this.state.currentUser), __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: this.state.statusTrans === 'two' ? 'gem' : 'gems', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.state.endBalance), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, ' ', _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.state.endLabel, ' '))))));
    }
  }]);

  return ShowClaimForm;
}(_react.Component);

exports.default = ShowClaimForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcQ2xhaW1LYXJtYS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTdGF0aXN0aWMiLCJHcmlkIiwiRGl2aWRlciIsIkRyb3Bkb3duIiwiSGVhZGVyIiwiSWNvbiIsIkthcm1hTWVtYmVyIiwia2FybWEiLCJ3ZWIzIiwiTmFtZSIsIkNvbnRyYXRBZGRyZXNzIiwiYWN0aXZpdHlPcHRpb25zIiwia2V5IiwidGV4dCIsInZhbHVlIiwiZXRoZXJUb2tlbkxpbmsiLCJjb25jYXQiLCJTaG93Q2xhaW1Gb3JtIiwic3RhdGUiLCJjdXJyZW50VXNlciIsImRpc2FibGVkQWN0aXZpdHkiLCJhY3Rpdml0eVNlbGVjdGVkIiwiaXNBY3Rpdml0eVNlbGVjdGVkIiwibG9hZGluZyIsInN0YXJ0QmFsYW5jZSIsInN0YXJ0TGFiZWwiLCJlbmRCYWxhbmNlIiwic3RhdHVzVHJhbnMiLCJlbmRMYWJlbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwia2FybWFNZW0iLCJwcm9wcyIsIm1lbWJlckFkZCIsIm1ldGhvZHMiLCJjbGFpbUthcm1hIiwic2VuZCIsImZyb20iLCJtZW1iZXJBZG1pbiIsImJhbGFuY2UyIiwiYmFsYW5jZU9mIiwiY2FsbCIsInRvRml4ZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidXNlcnMiLCJldGgiLCJnZXRBY2NvdW50cyIsImJhbGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVcsQUFBTSxBQUFTLEFBQVUsQUFBUTs7QUFDbkUsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7Ozs7Ozs7QUFF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