
var customMatcher = {
    toBeCustom: function(util, customEqualityTesters) {
        return {
            compare: function(actual, expected) {
                var passed = actual === expected;
                return {
                    pass: passed,
                    message: "Expected " + actual + (passed ? '' : " not") + " to equal " + expected
                };
            }
        }
    },
    toBeBetween: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                var passed = actual >= expected.a && actual <= expected.b;
                return {
                    pass: passed,
                    message: "Expected " + actual + (passed ? "" : " not") + " to be in between " + expected.a + " and " + expected.b
                };
            }
        }
    }
}

describe("Calculator", function () {
  var calc;
  
  beforeEach(function() {
	calc = new Calculator();
	
	jasmine.addMatchers(customMatcher);
  });

  it("should be able to add 1 plus 1", function() {
    expect(calc.add(1, 1)).toBe(2);
  });
  
  it("should be able to divide 6 and 2", function() {
	expect(calc.divide(6, 0)).toBe(3);
  });
  
  it("should be able to use a custom matcher", function() {
      expect(1).toBeCustom(1);
  });

  it("should be able to divide a rational number", function () {
      expect(calc.divide(1, 3)).toBeBetween({
          a: 0.3,
          b: 0.4
      });
  });
});

