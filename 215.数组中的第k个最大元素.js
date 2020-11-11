/*
 * @author: cmx
 * @Date: 2020-11-11 13:52:29
 * @LastEditors: cmx
 * @LastEditTime: 2020-11-11 17:21:21
 * @Description: 文件描述
 * @FilePath: \leetcode\215.数组中的第k个最大元素.js
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.42%)
 * Likes:    779
 * Dislikes: 0
 * Total Accepted:    221K
 * Total Submissions: 342.8K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 说明: 
 * 
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minHeapify = function (arr, i, size) {
  let l = 2 * i + 1
  let r = 2 * i + 2
  let min = i
  if (l < size && arr[l] < arr[min]) min = l
  if (r < size && arr[r] < arr[min]) min = r
  if (min !== i) {
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    minHeapify(arr, min, size)
  }
}
var findKthLargest = function(nums, k) {
  let arr = nums.slice(0, k)
  for (let i = Math.floor(k / 2); i >= 0; i--) {
    minHeapify(arr, i, k)
  }
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > arr[0]) {
      arr[0] = nums[i]
      minHeapify(arr, 0, k)
    }
  }
  for (let i = Math.floor(k / 2); i >= 0; i--) {
    minHeapify(arr, i, k)
  }
  for (let i = k - 1; i > 0; i--) {
    let temp = arr[i]
    arr[i] = arr[0]
    arr[0] = temp
    minHeapify(arr, 0, i - 1)
  }
  return arr[k-1]
};
// @lc code=end

