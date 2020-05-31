/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const twoSum = (nums, target) => {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] === undefined) {
      storage[target - num] = index;
    } else {
      return [storage[num], index];
    }
  }
};

// Apply my function to an example data
const nums = [2, 7, 11, 15];
const target = 26;
const answer = twoSum(nums, target);
console.log("answer: ", answer);
