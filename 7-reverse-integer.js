/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 
when the reversed integer overflows.
*/

/**
 * param {number} x
 * return {number}
 */

var reverse = function (x) {
  let x_str = x.toString();
  let x_reversed = "";

  // handle negative sign
  if (x_str[0] === "-") {
    x_reversed = "-";
    x_str = x_str.slice(1);
  }

  // reverse num as looping thru
  for (let i = x_str.length - 1; i >= 0; i--) {
    x_reversed += x_str[i];
  }

  // check for 0 at [0]
  if (x_reversed[0] === "0") {
    x_reversed = x_reversed.slice(1);
  }

  // handle range
  if (x_reversed > 2 ** 31 - 1 || x_reversed < -1 * 2 ** 31) {
    return 0;
  }
  return x_reversed;
};

const num = 120;
const answer = reverse(num);

console.log(answer);
