/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (65.97%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    98K
 * Total Submissions: 148.5K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 局部最优解，非全局最优解
var minPathSum = function(grid) {
  let map = {}
  return getMinPath(0, 0, grid, map)
};
var getMinPath = function(m, n, grid, map) {
  console.log(map)
  if(map.hasOwnProperty(m+''+n)) return map[m+''+n]
  if(m === grid.length - 1 && n === grid[0].length - 1) return map[m+''+n] = grid[m][n]
  let item = grid[m][n]
  if(n + 1 > grid[0].length - 1) return map[m + '' + n] = item + (map.hasOwnProperty(m+'1'+n) ? map[m+'1'+n] : getMinPath(m+1, n, grid, map))
  if(m + 1 > grid.length - 1) return map[m + '' + n] = item + (map.hasOwnProperty(m+''+(n + 1)) ? map[m+''+(n + 1)] : getMinPath(m, n+1, grid, map))
  let a = getMinPath(m, n+1, grid, map)
  let b = getMinPath(m+1, n, grid, map)
  return map[m + '' + n] = a < b ? item + a : item + b
}
// @lc code=end

