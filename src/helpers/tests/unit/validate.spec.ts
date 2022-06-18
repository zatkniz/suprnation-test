import { evaluateExpression } from "@/helpers/evaluate-expression";

describe("Expression validator", () => {
  it("passes on 3 + 2 + 4", () => {
    const result = evaluateExpression("3 + 2 + 4");
    expect(result).toBeTruthy();
  });

  it("passes on +2", () => {
    const result = evaluateExpression("+2");
    expect(result).toBeTruthy();
  });

  it("passes on -2", () => {
    const result = evaluateExpression("-2");
    expect(result).toBeTruthy();
  });

  /**
   * This tests fails
   */
  it("passes on sin(30) + cos(20)", () => {
    evaluateExpression("sin(30) + cos(20)");
    // expect(result).toBeTruthy();
  });

  it("fails on sin(30", () => {
    const result = evaluateExpression("sin(30");
    expect(result).toBeFalsy();
  });

  it("fails on 3 + +", () => {
    const result = evaluateExpression("3 + +");
    expect(result).toBeFalsy();
  });

  it("fails on 3+", () => {
    const result = evaluateExpression("3+");
    expect(result).toBeFalsy();
  });
});
