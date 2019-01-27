"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _parseFloat = require("babel-runtime/core-js/number/parse-float");

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _karmaMember = require("../karmaMember");

var _karmaMember2 = _interopRequireDefault(_karmaMember);

var _karmaCurrBase = require("../karmaCurrBase");

var _karmaCurrBase2 = _interopRequireDefault(_karmaCurrBase);

var _web = require("../web3");

var _web2 = _interopRequireDefault(_web);

var _Name = require("./Name");

var _Name2 = _interopRequireDefault(_Name);

var _ContractAddress = require("./ContractAddress");

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\expt\\final-project-m4bc2\\src\\components\\Topline2.js";


var etherLink = 'https://rinkeby.etherscan.io/address/';

var ShowTopLine2 = function (_Component) {
  (0, _inherits3.default)(ShowTopLine2, _Component);

  function ShowTopLine2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShowTopLine2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShowTopLine2.__proto__ || (0, _getPrototypeOf2.default)(ShowTopLine2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentUser: "",
      initialBalance: ""
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShowTopLine2, [{
    key: "componentDidMount",
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
              case "end":
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
    key: "render",
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Grid, { columns: "equal", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: "h4", floated: "left", __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "hand spock outline", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Hear well and prosper "), _react2.default.createElement(_semanticUiReact.Header.Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, " ", _react2.default.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: etherLink.concat(this.state.currentUser, '#tokentxns'), __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, this.state.currentUser)))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { floated: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { floated: "right", size: "tiny", __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: "https://static.wixstatic.com/shapes/adbb24_01ca80e36ca64f0f9f8878e99f23c94f.svg", spaced: true, verticalAlign: "middle", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _Name2.default)))))));
    }
  }]);

  return ShowTopLine2;
}(_react.Component);

exports.default = ShowTopLine2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29tcG9uZW50c1xcVG9wbGluZTIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiU3RhdGlzdGljIiwiR3JpZCIsIkRpdmlkZXIiLCJEcm9wZG93biIsIkhlYWRlciIsIkltYWdlIiwiSWNvbiIsIkthcm1hTWVtYmVyIiwia2FybWEiLCJ3ZWIzIiwiTmFtZSIsIkNvbnRyYXRBZGRyZXNzIiwiTGluayIsIlJvdXRlciIsImV0aGVyTGluayIsIlNob3dUb3BMaW5lMiIsInN0YXRlIiwiY3VycmVudFVzZXIiLCJpbml0aWFsQmFsYW5jZSIsInVzZXJzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJiYWxhbmNlIiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJ0b0ZpeGVkIiwic2V0U3RhdGUiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztBQUU3QixJQUFNLFlBQU4sQUFBa0I7O0ksQUFHWjs7Ozs7Ozs7Ozs7Ozs7d05BQ0osQTttQkFBUSxBQUNPLEFBQ2I7c0JBRk0sQUFFVSxBO0FBRlYsQUFDTjs7Ozs7Ozs7Ozs7bUJBS0k7QSx3QkFBUSxBOzt1QkFDRSxjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUF2QjtBLGlDQUNJO0EsMEIsQUFBVTs7dUJBQ0Usd0JBQUEsQUFBTSxRQUFOLEFBQWMsVUFBVSxNQUF4QixBQUF3QixBQUFNLElBQTlCLEFBQWtDLEE7O21CQUFsRDtBLG1DQUNBOzswQkFBVSwwQkFBa0IsbUJBQUEsQUFBVSxJQUE1QixBQUFrQixBQUFnQixLQUFsQyxBQUFzQyxRQUFoRCxBQUFVLEFBQThDLEFBQ3hEO3FCQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBZixBQUFlLEFBQU0sSUFBSSxnQkFBdkMsQUFBYyxBQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdoRCxBQUNQOzZCQUNFLEFBQUMsdUNBQUssU0FBTixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGdDQUNFLEFBQUMsc0JBQUQsQUFBTTs7b0JBQU47c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSwwQkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLFNBQWhCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsMkNBQUMsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FBbUIscUJBQUEsY0FBQSxPQUFHLFFBQUgsQUFBVSxVQUFTLEtBQW5CLEFBQXVCLHVCQUFzQixNQUFRLFVBQUEsQUFBVSxPQUFPLEtBQUEsQUFBSyxNQUF0QixBQUE0QixhQUFqRixBQUFxRCxBQUF3QztvQkFBN0Y7c0JBQUEsQUFBNkc7QUFBN0c7Y0FBNkcsQUFBSyxNQVAvSSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBR0UsQUFBbUIsQUFBd0gsQUFLbkosbUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sU0FBYixBQUF1QjtvQkFBdkI7c0JBQUEsQUFFSTtBQUZKO3lCQUVJLEFBQUMsOEJBQUssT0FBTixBQUFjO29CQUFkO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDRDQUFVLFNBQVgsQUFBbUIsU0FBUSxNQUEzQixBQUFrQztvQkFBbEM7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsMkJBQUEsQUFBVzs7b0JBQVg7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx3Q0FBTSxLQUFQLEFBQVksbUZBQWtGLFFBQTlGLE1BQXFHLGVBQXJHLEFBQW1IO29CQUFuSDtzQkFyQmxCLEFBQ0UsQUFFRSxBQVlFLEFBRUksQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBVXJCO0FBWG1COzs7Ozs7QUFyQ0ssQSxBQW1EM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVG9wbGluZTIuanMiLCJzb3VyY2VSb290IjoiRDovZXhwdC9maW5hbC1wcm9qZWN0LW00YmMyIn0=