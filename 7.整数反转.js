/*
 * @author: cmx
 * @Date: 2020-03-25 14:51:51
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-26 10:53:53
 * @Description: 文件描述
 * @FilePath: \leetcode\7.整数反转.js
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.87%)
 * Likes:    1764
 * Dislikes: 0
 * Total Accepted:    307K
 * Total Submissions: 906K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  const MAX_VALUE = Math.pow(2, 30) + (Math.pow(2, 30) - 1)
  const MIN_VALUE = -1 * Math.pow(2, 30) * 2
  while(x) {
    let a = x % 10
    x = (x - a) / 10
    if((a >= 0 && res > (MAX_VALUE - a) / 10) || (a <= 0 && res < (MIN_VALUE - a) / 10)) {
      return 0
    }
    res = res * 10 + a
  }
  return res
};
// @lc code=end

