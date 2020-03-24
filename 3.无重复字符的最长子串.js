/*
 * @author: cmx
 * @Date: 2020-03-24 10:28:20
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-24 18:00:31
 * @Description: 文件描述
 * @FilePath: \leetcode\3.无重复字符的最长子串.js
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.47%)
 * Likes:    3340
 * Dislikes: 0
 * Total Accepted:    398.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var head = 0
  var tail = 0
  var max = 0
  var str = ''
  while(tail <= s.length - 1) {
    str = s.slice(head, ++tail)
    max = str.length > max ? str.length : max
    if(str.indexOf(s[tail]) !== -1) {
      head = head + str.indexOf(s[tail]) + 1
    }
  }
  return max
};
// @lc code=end

