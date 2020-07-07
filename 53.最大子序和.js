/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (49.86%)
 * Likes:    1963
 * Dislikes: 0
 * Total Accepted:    233.2K
 * Total Submissions: 456.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)方法
// var maxSubArray = function(nums) {
//   let max = nums[0]
//   nums.reduce((sum, item) => {
//     sum = sum < 0 ? item : sum + item
//     max = max > sum ? max : sum
//     return sum
//   })
//   return max
// };

// 分治法
var maxSubArray = function(nums) {
  return getMax(0, nums.length - 1, nums)[2]
}
var getMax = function(l, r, nums) {
  if (l === r) {
    return [l, r, nums[l]]
  }
  let mid = l + Math.floor((r - l) / 2)
  // console.log(mid)

  let [ll, lr, lmax] = getMax(l, mid, nums)
  let [rl, rr, rmax] = getMax(mid + 1, r, nums)
  // console.log(lmax, rmax)
  if (lr + 1 === rl) {
    return lmax + rmax >= lmax && lmax + rmax >= rmax ? [ll, rr, lmax + rmax] : (lmax > rmax ? [ll, lr, lmax] : [rl, rr, rmax])
  }
  let [ml, mr, mmax] = getMax(lr + 1, rl - 1, nums)
  // 比较大小
  return max([ll, lr, lmax], [rl, rr, rmax], [ml, mr, mmax])
}
var max = function(a, b, c) {
  if (a[2] >= b[2]) {
    return a[2] > c[2] ? a : c
  } else {
    return b[2] > c[2] ? b : c
  }
}

// @lc code=end

