/*
 * @author: cmx
 * @Date: 2020-03-26 11:14:17
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-27 11:18:08
 * @Description: 文件描述
 * @FilePath: \leetcode\14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (36.63%)
 * Likes:    921
 * Dislikes: 0
 * Total Accepted:    212.5K
 * Total Submissions: 579.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs || !strs.length) return ''
  let commonStr = ''
  let i = 0
  let flag = 0
  while(1) {
    if(i > strs[0].length - 1) break
    const t = strs[0][i]
    commonStr += t
    for(let item of strs) {
      if(item[i] !== t) {
        flag = 1
        break
      }
    }
    if(flag) {
      commonStr = commonStr.substr(0, commonStr.length - 1)
      break
    }
    i++
  }
  return commonStr
};

var longestCommonPrefix = function(strs) {
  if(!strs || !strs.length) return ''
  return strs.reduce((pre, next) => {
    let i = 0
    while(pre[i] && next[i] && pre[i] === next[i]) i++
    return pre.slice(0, i)
  })
}

// @lc code=end

