/**
 * It takes a string and returns true if the string is a valid mathematical expression, and false
 * otherwise
 * @param {string} expression - The expression we want to validate.
 * @returns A boolean value.
 */
export const validateExpression = (expression: string): boolean => {
  /**
   * First create the regular expression we want to test.
   * It should match the following:
   * - Any digit or a decimal point
   * - Any of the following operators: +, -, *, /
   * - Any of the following functions: sin, cos, tan
   * - Any of the following parentheses: (, )
   *
   * TODO: couldn't make it work so the sin|cos|tan receive recursively the same expression.
   * I spent a lot of time trying to figure out how to do it, and i would run out time.
   * Sorry for that.
   */
  const regex = /^(\d*(\d\.\d)?[+-/*()]?((sin|cos|tan)(\(\d*(\d\.\d)?\)))?)*$/;

  /**
   * Executes the regex.
   */
  return regex.test(expression.replaceAll(" ", "").toLowerCase());
};
