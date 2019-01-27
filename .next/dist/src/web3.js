'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser AND metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are on the server OR metamask is not running
  var provider = new _web2.default.providers.HttpProvider("http://127.0.0.1:8545" //'https://rinkeby.infura.io/oox5IAxGUmnm86qwOYeH'
  );
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcd2ViMy5qcyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQVksQUFDdEU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFIRCxPQUdPLEFBQ0w7QUFDQTtNQUFNLGVBQWUsY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBbkIsQUFDZix3QkFERixBQUFpQixBQUNRLEFBRXpCO0FBSGlCO1NBR1YsQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkQ6L2V4cHQvZmluYWwtcHJvamVjdC1tNGJjMiJ9