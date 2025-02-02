var shimmer = require("shimmer");
var app = require("./dist/app");

shimmer.wrap(app, "handler", function (original) {
  return function () {
    console.log("Wrapped start");
    var returned = original.apply(this, arguments);
    console.log("Wrapped end");
    return returned;
  };
});

app.handler();
