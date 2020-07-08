/*
 * @author: cmx
 * @Date: 2020-07-08 15:33:56
 * @LastEditors: cmx
 * @LastEditTime: 2020-07-08 16:54:31
 * @Description: 文件描述
 * @FilePath: \leetcode\88.合并两个有序数组.js
 */ 
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (47.07%)
 * Likes:    556
 * Dislikes: 0
 * Total Accepted:    171.5K
 * Total Submissions: 357.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * 
 * 
 * 
 * 
 * 示例:
 * 
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * 输出: [1,2,2,3,5,6]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let insertPos = m + n - 1
  m--
  n--
  while(n>=0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }
  return nums1
};
// @lc code=end

