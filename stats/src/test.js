var i = 0;
var logSomething = function () {
    var i = 10;
    console.log("the value of i inside fxn ".concat(i));
};
logSomething();
console.log("the value of i out side fxn ".concat(i));
