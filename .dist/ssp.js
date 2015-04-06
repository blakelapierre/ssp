"use strict";
var $__lodash__;
var _ = ($__lodash__ = require("lodash"), $__lodash__ && $__lodash__.__esModule && $__lodash__ || {default: $__lodash__}).default;
module.exports = {
  generate: generate,
  verify: verify
};
function generate(length, range) {
  if (range < length)
    throw new Error('length must be greater than max');
  var set = {};
  var generated = 0;
  while (generated < length) {
    var candidate = Math.round(Math.random() * range - (range / 2));
    if (!set[candidate]) {
      set[candidate] = true;
      generated++;
    }
  }
  return _.map(Object.keys(set), (function(value) {
    return parseInt(value);
  }));
}
function verify(problem, solution) {
  if (solution.length === 0)
    throw new Error('solution cannot be empty set!');
  if (_.sum(solution) !== 0)
    throw new Error('solution does not sum to 0!');
  var set = _.transform(problem, (function(set, value) {
    set[value] = true;
  }));
  _.each(solution, (function(value) {
    if (!set[value])
      throw new Error(("value " + value + " in solution, but not in problem!"));
  }));
  return true;
}

//# sourceMappingURL=ssp.js.map