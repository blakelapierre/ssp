"use strict";
var $___46__46__47_ssp__;
var ssp = ($___46__46__47_ssp__ = require("../ssp"), $___46__46__47_ssp__ && $___46__46__47_ssp__.__esModule && $___46__46__47_ssp__ || {default: $___46__46__47_ssp__}).default;
console.log(ssp);
console.log(ssp.generate(1000, 10000000));
check([], [-1, -4, 5]);
check([], [1]);
check([-1, -4, 5], [0]);
check([-1, -4, 5], [-1, -4, 5]);
check([-1, -4, 5, 1, 3], [1, 3, -4]);
function check(problem, solution) {
  try {
    ssp.verify(problem, solution);
    console.log('pass');
  } catch (e) {
    console.log(e);
  }
}

//# sourceMappingURL=../tests/index.js.map