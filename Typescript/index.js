"use strict";
// Como importar bibliotecas com typescript
exports.__esModule = true;
var jquery_1 = require("jquery");
jquery_1["default"].fn.extend({
    novaFuncao: function () {
        console.log('Chamou nova função !');
    }
});
(0, jquery_1["default"])('body').novaFuncao();
