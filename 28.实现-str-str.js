/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.64%)
 * Likes:    421
 * Dislikes: 0
 * Total Accepted:    157.6K
 * Total Submissions: 397.3K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let next = getNext(needle)
  let lenn = needle.length
  let lenh = haystack.length
  let j = 0
  let k = 0
  while(j < lenh && k < lenn) {
    if(k === -1 || haystack[j] === needle[k]) {
      k++
      j++
    } else {
      k = next[k]
    }
  }
  if(k === lenn) {
    return j - lenn
  }
  return -1
};
var getNext = function(str) {
  let next = [-1]
  let k = -1
  let j = 0
  while(j < str.length - 1) {
    if(k === -1 || str[k] === str[j]) {
      ++k
      ++j
      if(str[j] !== str[k]) {
        next[j] = k
      } else { // 优化,本来就是因为不相等才寻找next，优化前若str[j] = str[k],则(needle[k] == needle[next[k]]) != haystack[j]，优化后直接让k = next[next[k]],减少一次没用的递归
        next[j] = next[k]
      }
    } else {
      k = next[k]
    }
  }
  return next
}
// @lc code=end

