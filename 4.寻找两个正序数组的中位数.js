/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (38.34%)
 * Likes:    2876
 * Dislikes: 0
 * Total Accepted:    221K
 * Total Submissions: 576.3K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mid = (nums1.length + nums2.length) / 2
  let h1 = 0
  let h2 = 0
  let cur = 0
  let front = 0
  let item = 0
  while(cur <= mid) {
    if (!nums1.length || h1 >= nums1.length) {
      item = nums2[h2++]
    } else if (!nums2.length || h2 >= nums2.length) {
      item = nums1[h1++]
    } else if(nums1[h1] <= nums2[h2]) {
      item = nums1[h1++]
    } else {
      item = nums2[h2++]
    }
    if (mid - cur === 1) {
      front += item
    }
    if (mid - cur === 0) {
      return (front + item) / 2
    }
    if (mid - cur < 1) {
      return item
    }
    cur++
  }
};
// @lc code=end

