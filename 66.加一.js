/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (43.57%)
 * Likes:    495
 * Dislikes: 0
 * Total Accepted:    172.2K
 * Total Submissions: 385.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1
  let inP = 0
  digits[i] = digits[i] + 1
  while(i >= 0) {
    digits[i] = digits[i] + inP
    inP = digits[i] >= 10 ? 1 : 0
    if (!inP) {
      return digits
    }
    digits[i] = digits[i] >= 10 ? digits[i] - 10 : digits[i]
    i--
  }
  digits.unshift(1)
  return digits
};
// @lc code=end

