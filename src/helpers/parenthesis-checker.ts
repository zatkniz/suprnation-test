/**
 * It returns true if the number of opening parentheses is equal to the number of closing parentheses
 * @param {string} expression - string
 * @returns A function that takes in a string and returns a boolean.
 */
export const areAllParenthesisClosed = (expression: string): boolean => {
  return (
    /**
     * Counts the number of opening and closing parentheses.
     * First we create an array from the string with split().
     * then we use the reduce() function to count the number of opening and closing parentheses.
     * If the reduce returns 0 means that all parentheses are closed.
     */
    expression.split("").reduce((acc, curr) => {
      if (curr === "(") {
        acc++;
      } else if (curr === ")") {
        acc--;
      }
      return acc;
    }, 0) == 0
  );
};
