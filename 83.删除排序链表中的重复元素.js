
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (49.66%)
 * Likes:    342
 * Dislikes: 0
 * Total Accepted:    115.1K
 * Total Submissions: 226.7K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 前提条件： 排序链表
var deleteDuplicates = function(head) {
  let front = head
  while(front) {
    if(front.next && front.val === front.next.val) {
      front.next = front.next.next
    } else {
      front = front.next
    }
  }
  return head
};
// @lc code=end

