import { areAllParenthesisClosed } from "./parenthesis-checker";
import { validateExpression } from "./validate-expression";

/**
 * It checks if the expression is valid and if all the parenthesis are closed
 * @param {string} expression - The expression to be evaluated.
 * @returns A boolean value
 */
export const evaluateExpression = (expression: string): boolean => {
  /**
   * First we check if the parenthesis are closed.
   */
  if (!areAllParenthesisClosed(expression)) {
    console.error("Opening and closing parenthesis not matching");
    return false;
  }

  /**
   * Then we check if the expression is valid.
   */
  if (!validateExpression(expression)) {
    console.error("The expression is not valid");
    return false;
  }

  return true;
};
