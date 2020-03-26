/*
 * @author: cmx
 * @Date: 2020-03-26 10:58:30
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-26 11:12:14
 * @Description: 文件描述
 * @FilePath: \leetcode\9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (57.23%)
 * Likes:    976
 * Dislikes: 0
 * Total Accepted:    279.3K
 * Total Submissions: 487.9K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false
  const str = x + ''
  let head = 0
  let tail = str.length - 1
  while(head < tail) {
    if(str[head] !== str[tail])
      return false
    head++
    tail--
  }
  return true
};
// @lc code=end


/**
 * 前端作弊做法
 * var isPalindrome = function(x) {
    return (x + '').split('').reverse().join('') == x
}; */
