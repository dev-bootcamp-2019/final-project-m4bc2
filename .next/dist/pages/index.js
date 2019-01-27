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

var _karmaCurrBase = require('../src/karmaCurrBase');

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

var _karmaMember = require('../src/karmaMember');

var _karmaMember2 = _interopRequireDefault(_karmaMember);

var _ContractAddress = require('../src/components/ContractAddress');

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

var _web = require('../src/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../src/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require('../src/components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Name = require('../src/components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Topline = require('../src/components/Topline');

var _Topline2 = _interopRequireDefault(_Topline);

var _routes = require('../src/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\expt\\final-project-m4bc2\\pages\\index.js?entry';


var etherLink = 'https://rinkeby.etherscan.io/address/';

var karmaBase = function (_Component) {
  (0, _inherits3.default)(karmaBase, _Component);

  function karmaBase() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, karmaBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = karmaBase.__proto__ || (0, _getPrototypeOf2.default)(karmaBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentUser: '',
      initialBalance: '',
      inActive: false,
      master: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(karmaBase, [{
    key: 'renderKarmaMembers',
    value: function renderKarmaMembers() {
      var _this2 = this;

      var items = this.props.members.map(function (address) {
        return {
          header: _this2.props.deployedMembers[address],
          meta: "Member #".concat(_this2.props.members.indexOf(address) + 1),
          description: _react2.default.createElement(_routes.Link, { route: '/member/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, 'View Member Details')),
          extra: _react2.default.createElement('font', { size: '1', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', href: etherLink.concat(address), __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, address))
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 3, items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var users, mstr, balance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                users = [];
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                users = _context.sent;
                _context.next = 6;
                return _karmaCurrBase2.default.methods.getCurrentOwner().call();

              case 6:
                mstr = _context.sent;
                balance = 0.000000000000000001;
                _context.next = 10;
                return _karmaCurrBase2.default.methods.balanceOf(users[0]).call();

              case 10:
                balance = _context.sent;

                balance = (0, _parseFloat2.default)(balance / Math.pow(10, 18)).toFixed(6);
                this.setState({ currentUser: users[0], initialBalance: balance, master: mstr });

              case 13:
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
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_Layout2.default, {
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
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_routes.Link, { route: '/claims/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { fluid: true,
        content: "Claim ".concat(_Name2.default),
        icon: 'gift',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_routes.Link, { route: '/claims/transfer', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { fluid: true,
        content: "Transfer ".concat(_Name2.default),
        icon: 'shuffle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_routes.Link, { route: this.state.master !== this.state.currentUser ? "" : "/member/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { fluid: true,
        content: "Add A New Member",
        icon: 'user plus',
        primary: true,
        disabled: this.state.master !== this.state.currentUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })))))), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "Current ".concat(_Name2.default, " Members"))))), this.renderKarmaMembers(), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var deployedMembers, members, i, memberi, memberName;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                deployedMembers = { id1: "100", id2: "200" };
                _context2.next = 3;
                return _karmaCurrBase2.default.methods.getKarmaMembers().call();

              case 3:
                members = _context2.sent;
                i = 0;

              case 5:
                if (!(i < members.length)) {
                  _context2.next = 14;
                  break;
                }

                memberi = (0, _karmaMember2.default)(members[i]);
                _context2.next = 9;
                return memberi.methods.getMemberName().call();

              case 9:
                memberName = _context2.sent;

                deployedMembers[String(members[i])] = memberName;

              case 11:
                i++;
                _context2.next = 5;
                break;

              case 14:
                return _context2.abrupt('return', {
                  members: members,
                  deployedMembers: deployedMembers
                });

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return karmaBase;
}(_react.Component);

exports.default = karmaBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTdGF0aXN0aWMiLCJHcmlkIiwiRGl2aWRlciIsIkltYWdlIiwiSGVhZGVyIiwiSWNvbiIsImthcm1hIiwia2FybWFNZW1iZXJzIiwiQ29udHJhdEFkZHJlc3MiLCJ3ZWIzIiwiTGF5b3V0IiwiSGVhZGVyMSIsIk5hbWUiLCJUb3BMaW5lIiwiTGluayIsImV0aGVyTGluayIsImthcm1hQmFzZSIsInN0YXRlIiwiY3VycmVudFVzZXIiLCJpbml0aWFsQmFsYW5jZSIsImluQWN0aXZlIiwibWFzdGVyIiwiaXRlbXMiLCJwcm9wcyIsIm1lbWJlcnMiLCJtYXAiLCJoZWFkZXIiLCJkZXBsb3llZE1lbWJlcnMiLCJhZGRyZXNzIiwibWV0YSIsImNvbmNhdCIsImluZGV4T2YiLCJkZXNjcmlwdGlvbiIsImV4dHJhIiwidXNlcnMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRDdXJyZW50T3duZXIiLCJjYWxsIiwibXN0ciIsImJhbGFuY2UiLCJiYWxhbmNlT2YiLCJ0b0ZpeGVkIiwic2V0U3RhdGUiLCJyZW5kZXJLYXJtYU1lbWJlcnMiLCJpZDEiLCJpZDIiLCJnZXRLYXJtYU1lbWJlcnMiLCJpIiwibGVuZ3RoIiwibWVtYmVyaSIsImdldE1lbWJlck5hbWUiLCJtZW1iZXJOYW1lIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFXLEFBQU0sQUFBUyxBQUFPLEFBQVE7O0FBQ2hFLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxB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QUFXLFNBQVEsVUFBbkI7b0JBQUE7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQSxBQUFpQjtBQUFqQjtBQUFBLG9CQUFpQixBQUFXLEFBQU8sdUJBakQzQyxBQTZDRSxBQUNFLEFBQ0UsQUFFRSxBQUFpQixBQUF1QixBQUk1QyxzQkFyREosQUFxREksQUFBSyxBQUNQLHNDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHVDQUFNLEFBQUMsc0JBQUQsQUFBTTs7b0JBQU47c0JBdkRWLEFBQU8sQUFDTCxBQXNERSxBQUFNLEFBR1g7QUFIVztBQUFBOzs7Ozs7Ozs7O21CQXRHTjtBLGtDQUFnQixFQUFDLEtBQUQsQUFBTSxPQUFPLEtBQWIsQSxBQUFrQjs7dUJBQ2hCLHdCQUFBLEFBQU0sUUFBTixBQUFjLGtCQUFrQixBLEFBQWhDOzttQkFBaEI7QSxvQ0FDRztBLG9CQUFFLEE7OztzQkFBRyxJQUFJLFEsQUFBUTs7O0FBQ3BCOztBLDBCQUFVLDJCQUFhLFFBQWIsQUFBYSxBQUFRLEE7O3VCQUNaLFFBQUEsQUFBUSxRQUFSLEFBQWdCLGdCQUFoQixBQUFnQyxBOzttQkFBbkQ7QSx1Q0FDSjs7Z0NBQWdCLE9BQU8sUUFBdkIsQUFBZ0IsQUFBTyxBQUFRLE9BQS9CLEFBQXNDOzttQkFITDtBOzs7Ozs7MkJBSzVCLEFBQ0ksQUFDVDttQyxBQUZLLEFBRVk7QUFGWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVmtCLEEsQUE4R3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2V4cHQvZmluYWwtcHJvamVjdC1tNGJjMiJ9