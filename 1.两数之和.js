/*
 * @author: cmx
 * @Date: 2020-03-23 16:29:40
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-23 16:41:55
 * @Description: 文件描述
 * @FilePath: \leetcode\1.两数之和.js
 */
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
    !obj.hasOwnProperty(target - nums[i]) ? obj[target - nums[i]] = i : null// i的对应值
    if(obj.hasOwnProperty(nums[i]) && obj[nums[i]] !== i) {
      return [obj[nums[i]],i]
    }
  }
  return []
};
// @lc code=end

