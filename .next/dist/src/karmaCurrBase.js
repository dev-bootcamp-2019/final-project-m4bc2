'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Karma = require('../build/contracts/Karma.json');

var _Karma2 = _interopRequireDefault(_Karma);

var _ContractAddress = require('./components/ContractAddress');

var _ContractAddress2 = _interopRequireDefault(_ContractAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_Karma2.default.abi, _ContractAddress2.default);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xca2FybWFDdXJyQmFzZS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiS2FybWFCYXNlIiwiQ29udHJhY3RBZGRyZXNzIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsZ0JBQVUsQUFESyxBQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJrYXJtYUN1cnJCYXNlLmpzIiwic291cmNlUm9vdCI6IkQ6L2V4cHQvZmluYWwtcHJvamVjdC1tNGJjMiJ9