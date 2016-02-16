describe("CalculatorWithDOM", function() {
  var calc;
  var outputId = "#calc-fixture";
  
  beforeEach(function() {
	$("body").append($("#template-wrapper").html().replace('-template', ''));
	calc = new CalculatorWithDOM($(outputId));
  });
  
  afterEach(function() {
	$("#calc-fixture").remove();
  });

  it("should be able to add 1 plus 1", function() {
	calc.add(1, 1);
	expect($(outputId).text()).toBe('2');
  });

  it("should be able to divide 3 into 12", function() {
	calc.divide(12, 3);
	expect($(outputId).text()).toBe('4');
  });

});
