/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
https://leetcode-cn.com/problems/find-pivot-index/
*/
var pivotIndex = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  
  let sumLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    if (sumLeft === sum) return i;
    sumLeft += nums[i];
  }
  return -1;
};
