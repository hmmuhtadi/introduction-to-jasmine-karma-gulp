
var CalculatorWithDOM = function (element) {
    this.el = element;
};

CalculatorWithDOM.prototype.add = function (a, b) {
	$(this.el).html(a + b);
};

CalculatorWithDOM.prototype.divide = function (a, b) {
	$(this.el).html(a / b);
};

