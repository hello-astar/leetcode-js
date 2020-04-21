/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  for(let i = 0; i < nums.length; i++) {
    if(obj.hasOwnProperty(nums[i])) {
      return [obj[nums[i]],i]
    }
    !obj.hasOwnProperty(target - nums[i]) ? obj[target - nums[i]] = i : null// i的对应值
  }
  return []
};
// @lc code=end

/**思路
 * 1. 使用一个对象存储nums[i]的预期partner和i的对应关系，一旦找到nums[i]的预期partner，i也就知道了
 * 2. 先到先得，故存储时判断该值是否已经存在，若存在，不覆盖
 * 3. 自己和自己不能作为答案
 */