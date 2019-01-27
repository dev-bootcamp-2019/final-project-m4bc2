'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseFloat = require('babel-runtime/core-js/number/parse-float');

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _Layout = require('../../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require('../../src/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _web = require('../../src/web3');

var _web2 = _interopRequireDefault(_web);

var _ClaimKarma = require('../../src/components/ClaimKarma');

var _ClaimKarma2 = _interopRequireDefault(_ClaimKarma);

var _semanticUiReact = require('semantic-ui-react');

var _Name = require('../../src/components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Topline = require('../../src/components/Topline2');

var _Topline2 = _interopRequireDefault(_Topline);

var _ContractAddress = require('../../src/components/ContractAddress');

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

var _karmaMember = require('../../src/karmaMember');

var _karmaMember2 = _interopRequireDefault(_karmaMember);

var _karmaCurrBase = require('../../src/karmaCurrBase');

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\expt\\final-project-m4bc2\\pages\\member\\show.js?entry';


var etherLink = 'https://rinkeby.etherscan.io/address/';
var etherTokenLink = 'https://rinkeby.etherscan.io/token/'.concat(_ContractAddress2.default, '?a=');

var MemberShow = function (_Component) {
  (0, _inherits3.default)(MemberShow, _Component);

  function MemberShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MemberShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MemberShow.__proto__ || (0, _getPrototypeOf2.default)(MemberShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newAdmin: '',
      newMemName: '',
      currentUser: '',
      loading: false,
      errorMessage: '',
      loading2: false,
      errorMessage2: ''

    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var karmaMem;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 2;
                karmaMem = (0, _karmaMember2.default)(_this.props.memberAdd);
                _context.next = 6;
                return karmaMem.methods.transferOwnership(_this.state.newAdmin).send({
                  from: _this.state.currentUser
                });

              case 6:
                _this.setState({ loading: false, newAdmin: '' });
                Router.pushRoute("/member/".concat(_this.props.memberAdd));
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onSubmit2 = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var karmaMem;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading2: true, errorMessage2: '' });

                _context2.prev = 2;
                karmaMem = (0, _karmaMember2.default)(_this.props.memberAdd);
                _context2.next = 6;
                return karmaMem.methods.setMemberName(_this.state.newMemName).send({
                  from: _this.state.currentUser
                });

              case 6:
                _this.setState({ loading2: false, newMemName: '' });
                Router.pushRoute("/member/".concat(_this.props.memberAdd));
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorMessage2: _context2.t0.message });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 10]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MemberShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          memberName = _props.memberName,
          memberAdd = _props.memberAdd,
          memberBalance = _props.memberBalance,
          memberAdmin = _props.memberAdmin;

      var items = [{
        header: memberName,
        meta: 'Member name'
      }, {
        header: memberBalance,
        meta: _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherTokenLink.concat(memberAdd), __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, "Member's ".concat(_Name2.default + " balance"))
      }, {
        header: memberAdd,
        meta: _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherLink.concat(memberAdd), __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "Member's address")
      }, {
        header: memberAdmin,
        meta: 'Member admin'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var users;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                users = [];
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                users = _context3.sent;

                this.setState({ currentUser: users[0] });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_Topline2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', textAlign: 'center', divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, 'Member Details'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'cogs', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'Account Settings'), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, 'Manage your account settings'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', textAlign: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, 'Admin Transfer')), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        label: 'Address',
        labelPosition: 'right',
        placeholder: 'New Admin Address',
        value: this.state.newAdmin,
        onChange: function onChange(event) {
          return _this3.setState({ newAdmin: event.target.value });
        },
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        disabled: !(this.state.currentUser === this.props.memberAdmin && !!this.state.newAdmin && this.state.newAdmin !== this.props.memberAdmin),
        primary: true,
        icon: 'shuffle',
        content: 'Transfer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      })))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', textAlign: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, 'Edit Member Name')), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit2, error: !!this.state.errorMessage2, __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'New Name of the member',
        label: 'Member',
        labelPosition: 'right',
        value: this.state.newMemName,
        onChange: function onChange(event) {
          return _this3.setState({ newMemName: event.target.value });
        },
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading2,
        disabled: !(this.state.currentUser === this.props.memberAdmin && !!this.state.newMemName),
        primary: true,
        icon: 'save',
        content: ' Update  ',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage2, __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }))))))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement(_ClaimKarma2.default, { memberAdd: this.props.memberAdd, memberAdmin: this.props.memberAdmin, __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      })))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var karmaMem, memberName, memberAdd, memberBalance, memberAdmin;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                karmaMem = (0, _karmaMember2.default)(props.query.address);
                _context4.next = 3;
                return karmaMem.methods.getMemberName().call();

              case 3:
                memberName = _context4.sent;
                memberAdd = props.query.address;
                //const memberDiff = await karmaMem.methods.getMemberDifficulty().call();

                memberBalance = 0.000000000000000001;
                _context4.next = 8;
                return _karmaCurrBase2.default.methods.balanceOf(memberAdd).call();

              case 8:
                memberBalance = _context4.sent;

                memberBalance = (0, _parseFloat2.default)(memberBalance / Math.pow(10, 18)).toFixed(6);
                _context4.next = 12;
                return karmaMem.methods.getCurrentOwner().call();

              case 12:
                memberAdmin = _context4.sent;
                return _context4.abrupt('return', {
                  memberName: memberName,
                  memberAdd: memberAdd,
                  //memberDiff : memberDiff,
                  memberBalance: memberBalance,
                  memberAdmin: memberAdmin
                });

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x3) {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MemberShow;
}(_react.Component);

exports.default = MemberShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtZW1iZXJcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJIZWFkZXIxIiwid2ViMyIsIkNsYWltS2FybWEiLCJDYXJkIiwiQnV0dG9uIiwiU3RhdGlzdGljIiwiR3JpZCIsIkRpdmlkZXIiLCJEcm9wZG93biIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJJbWFnZSIsIkhlYWRlciIsIkljb24iLCJOYW1lIiwiVG9wTGluZTIiLCJDb250cmF0QWRkcmVzcyIsIkthcm1hTWVtYmVyIiwia2FybWEiLCJldGhlckxpbmsiLCJldGhlclRva2VuTGluayIsImNvbmNhdCIsIk1lbWJlclNob3ciLCJzdGF0ZSIsIm5ld0FkbWluIiwibmV3TWVtTmFtZSIsImN1cnJlbnRVc2VyIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmcyIiwiZXJyb3JNZXNzYWdlMiIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwia2FybWFNZW0iLCJwcm9wcyIsIm1lbWJlckFkZCIsIm1ldGhvZHMiLCJ0cmFuc2Zlck93bmVyc2hpcCIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsIm9uU3VibWl0MiIsInNldE1lbWJlck5hbWUiLCJtZW1iZXJOYW1lIiwibWVtYmVyQmFsYW5jZSIsIm1lbWJlckFkbWluIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwidXNlcnMiLCJldGgiLCJnZXRBY2NvdW50cyIsInJlbmRlckNhcmRzIiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImFkZHJlc3MiLCJnZXRNZW1iZXJOYW1lIiwiY2FsbCIsImJhbGFuY2VPZiIsInRvRml4ZWQiLCJnZXRDdXJyZW50T3duZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFB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QUFNRTtlQU5GLEFBTVU7O29CQU5WO3NCQURGLEFBQ0UsQUFRQTtBQVJBO0FBQ0UsMEJBT0YsQUFBQztpQkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDdEI7a0JBQVksRUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFnQixLQUFBLEFBQUssTUFBakMsQUFBdUMsZUFBZ0IsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUY5RSxBQUVjLEFBQXNFLEFBQ2xGO2lCQUhGLEFBSUU7Y0FKRixBQUlTLEFBQ1A7aUJBTEYsQUFLWTs7b0JBTFo7c0JBWE4sQUFDRSxBQUNFLEFBU0UsQUFTSjtBQVRJO0FBQ0UsNEJBUU4sQUFBQywwQ0FBUyxPQUFWLE1BQWdCLFFBQWhCLEFBQXVCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQTFFZCxBQUNFLEFBQ0UsQUE0Q0UsQUFNRSxBQUNFLEFBQ0UsQUFvQkUsQUFPWjtBQVBZO2dDQU9YLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxXQUFXLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxXQUFXLGFBQWEsS0FBQSxBQUFLLE1BQS9ELEFBQXFFO29CQUFyRTtzQkF2R1YsQUFDRSxBQW1CRSxBQUNFLEFBaUZFLEFBQ0UsQUFPWDtBQVBXOzs7Ozs7NkdBL01pQixBOzs7OzttQkFDckI7QSwyQkFBVywyQkFBWSxNQUFBLEFBQU0sTUFBbEIsQUFBd0IsQTs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFqQixBQUFpQyxBOzttQkFBcEQ7QSx1Q0FDQTtBLDRCQUFZLE1BQUEsQUFBTSxNQUFNLEEsQUFDOUI7QUFDSTs7QSxnQyxBQUFnQjs7dUJBQ0Usd0JBQUEsQUFBTSxRQUFOLEFBQWMsVUFBZCxBQUF3QixXQUF4QixBLEFBQW1DOzttQkFBekQ7QSwwQ0FDQTs7Z0NBQWUsMEJBQWtCLHlCQUFBLEFBQWMsSUFBaEMsQUFBa0IsQUFBa0IsS0FBcEMsQUFBd0MsUUFBdkQsQUFBZSxBQUFnRDs7dUJBQ3JDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCQUFqQixBQUFtQyxBOzttQkFBdkQ7QTs7OEJBRUMsQUFDUSxBQUNiOzZCQUZLLEFBRU8sQUFDWjtBQUNBO2lDQUpLLEFBSVUsQUFDZjsrQixBQUxLLEFBS1E7QUFMUixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWm1CLEEsQUEwTnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovZXhwdC9maW5hbC1wcm9qZWN0LW00YmMyIn0=