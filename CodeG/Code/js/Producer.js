"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.print = function () {
        console.log("App Print...");
    };
    return App;
}());
exports.App = App;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.show = function () {
        console.log("Test Show...");
    };
    return Test;
}());
exports["default"] = Test;
