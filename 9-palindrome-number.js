/*
Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:
Could you solve it without converting the integer to a string?
*/

const isPalindrome = (x) => {
  if (Math.sign(x) === -1) {
    return false;
  }

  let reversed = 0;
  let x_copy = x;

  while (x_copy > 0) {
    let last_digit = x_copy % 10;

    // Update reversed by multiplying by 10 and add last digit
    reversed = reversed * 10 + last_digit;

    // Truncate x_copy
    x_copy = (x_copy / 10) | 0;
  }

  // Return the result as compares the two numbers.
  return x === reversed;
};

const input = 121;
const answer = isPalindrome(input);

console.log(answer);
