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

var _Name = require('../../src/components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Layout = require('../../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require('../../src/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _karmaCurrBase = require('../../src/karmaCurrBase');

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

var _Topline = require('../../src/components/Topline');

var _Topline2 = _interopRequireDefault(_Topline);

var _web = require('../../src/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _KarmaMemberships = require('../../build/contracts/KarmaMemberships.json');

var _KarmaMemberships2 = _interopRequireDefault(_KarmaMemberships);

var _routes = require('../../src/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\expt\\final-project-m4bc2\\pages\\member\\new.js?entry';


var CreateMember = function (_Component) {
  (0, _inherits3.default)(CreateMember, _Component);

  function CreateMember() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CreateMember);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateMember.__proto__ || (0, _getPrototypeOf2.default)(CreateMember)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      memberName: '',
      memberDiffLevel: '',
      initialBalance: '',
      master: '',
      currentUser: '',
      oldMessage: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var users;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true });

                users = [];
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                users = _context.sent;

                _this.setState({ currentUser: users[0], errorMessage: '' });

                _context.prev = 7;
                _context.next = 10;
                return _karmaCurrBase2.default.methods.createKarmaMembers(_this.state.memberName, _this.state.memberDiffLevel).send({
                  from: _this.state.currentUser
                });

              case 10:
                _this.setState({ loading: false, memberName: '', memberDiffLevel: '' });
                _routes.Router.pushRoute('/');
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](7);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[7, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CreateMember, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var users, mstr, balance;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                users = [];
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                users = _context2.sent;
                _context2.next = 6;
                return _karmaCurrBase2.default.methods.getCurrentOwner().call();

              case 6:
                mstr = _context2.sent;
                balance = 0.000000000000000001;
                _context2.next = 10;
                return _karmaCurrBase2.default.methods.balanceOf(users[0]).call();

              case 10:
                balance = _context2.sent;

                balance = (0, _parseFloat2.default)(balance / Math.pow(10, 18)).toFixed(6);
                this.setState({ currentUser: users[0], initialBalance: balance, master: mstr, oldMessage: "Current ".concat(_Name2.default, " balance") });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
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
          lineNumber: 65
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_Topline2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user plus', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Create New Member'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, ' Member Name '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Name',
        value: this.state.memberName,
        onChange: function onChange(event) {
          return _this3.setState({ memberName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, ' Difficulty Level '), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: '#',
        value: this.state.memberDiffLevel,
        onChange: function onChange(event) {
          return _this3.setState({ memberDiffLevel: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        disabled: !this.state.memberName || !this.state.memberDiffLevel || this.state.master !== this.state.currentUser,
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Create!')))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })));
    }
  }]);

  return CreateMember;
}(_react.Component);

exports.default = CreateMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtZW1iZXJcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk5hbWUiLCJMYXlvdXQiLCJIZWFkZXIxIiwia2FybWEiLCJUb3BMaW5lIiwid2ViMyIsIkZvcm0iLCJJbnB1dCIsIkJ1dHRvbiIsIkNhcmQiLCJEcm9wZG93biIsIkdyaWQiLCJTdGF0aXN0aWMiLCJEaXZpZGVyIiwiTWVzc2FnZSIsIkltYWdlIiwiSGVhZGVyIiwiSWNvbiIsImthcm1hTWVtYmVycyIsIkxpbmsiLCJSb3V0ZXIiLCJDcmVhdGVNZW1iZXIiLCJzdGF0ZSIsIm1lbWJlck5hbWUiLCJtZW1iZXJEaWZmTGV2ZWwiLCJpbml0aWFsQmFsYW5jZSIsIm1hc3RlciIsImN1cnJlbnRVc2VyIiwib2xkTWVzc2FnZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInVzZXJzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlS2FybWFNZW1iZXJzIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiZ2V0Q3VycmVudE93bmVyIiwiY2FsbCIsIm1zdHIiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwidG9GaXhlZCIsImNvbmNhdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBTyxBQUFRLEFBQU0sQUFBVSxBQUFNLEFBQVcsQUFBUyxBQUFTLEFBQU8sQUFBUTs7QUFDaEcsQUFBTyxBQUFrQjs7OztB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QUFBQyx1Q0FBSyxTQUFOLEFBQWMsU0FBUSxXQUF0QixBQUFnQztvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTTs7b0JBQU47c0JBREYsQUFDRSxBQUVBO0FBRkE7QUFBQSwwQkFFQSxBQUFDO2lCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUN0QjtrQkFBYSxDQUFDLEtBQUEsQUFBSyxNQUFOLEFBQVksY0FBYyxDQUFDLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxtQkFBb0IsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFXLEtBQUEsQUFBSyxNQUZwRyxBQUUwRyxBQUN4RztpQkFIRjs7b0JBQUE7c0JBQUE7QUFBQTtBQUNFLFNBakNaLEFBUUUsQUFDSSxBQW9CRSxBQUdFLEFBVVIsNkNBQUEsQUFBQyxzQkFBRCxBQUFNOztvQkFBTjtzQkFuRE4sQUFDRSxBQVFFLEFBMENFLEFBV1A7QUFYTztBQUFBOzs7OztBQXRHaUIsQSxBQXFIM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2V4cHQvZmluYWwtcHJvamVjdC1tNGJjMiJ9