'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _KarmaMemberships = require('../build/contracts/KarmaMemberships.json');

var _KarmaMemberships2 = _interopRequireDefault(_KarmaMemberships);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(_KarmaMemberships2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xca2FybWFNZW1iZXIuanMiXSwibmFtZXMiOlsid2ViMyIsImthcm1hTWVtYmVyIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBd0IsQUFBeEIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0wsMkJBQVksQUFEUCxLQUVMLEFBRkssQUFBUCxBQUlEO0FBTEQiLCJmaWxlIjoia2FybWFNZW1iZXIuanMiLCJzb3VyY2VSb290IjoiRDovZXhwdC9maW5hbC1wcm9qZWN0LW00YmMyIn0=