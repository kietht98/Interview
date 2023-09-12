// ### Concept

// - The strategy pattern encapsulates alternative algorithms (or Strategies) for a popular task.
// - It allows a method to be swapped out at the runtime by another method (strategy) without the client realizing it.
// - Essentially, Strategy is a group of algorithms that are interchangeable.

// ### how to use

// - In javascript the strategy pattern is widely used as plug-in mechanism when building extensible frameworks.

// applying for e-commerce

let Shipping = function () {
  this.company = "";
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },
  calculate: function (packages) {
    return this.company.calculate(packages);
  },
};

let UPS = function () {
  this.calculate = function (packages) {
    return "$45";
  };
};
let USPS = function () {
  this.calculate = function (packages) {
    // calculations...
    return "$39.40";
  };
};

let Fedex = function () {
  this.calculate = function (packages) {
    // calculations...
    return "$43.20";
  };
};

function run() {
  let packages = { from: "76712", to: "10012", weight: "lkg" };

  // the 3 strategies

  let ups = new UPS();
  let usps = new USPS();
  let fedex = new Fedex();

  let shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log("UPS Strategy: " + shipping.calculate(packages));
  shipping.setStrategy(usps);
  console.log("USPS Strategy: " + shipping.calculate(packages));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategy: " + shipping.calculate(packages));
}
