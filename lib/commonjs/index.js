"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _formInput = require("./formInput");
Object.keys(_formInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _formInput[key];
    }
  });
});
//# sourceMappingURL=index.js.map