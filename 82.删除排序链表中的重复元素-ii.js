/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (48.25%)
 * Likes:    311
 * Dislikes: 0
 * Total Accepted:    53.6K
 * Total Submissions: 110.8K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 示例 1:
 * 
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->1->2->3
 * 输出: 2->3
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
var deleteDuplicates = function(head) {
  let front = head
  let newHead = null
  let tail = { val: -1, next: null }
  while(front) {
    let flag = 0
    let cur = front.val
    while(front.next && cur === front.next.val) {
      flag = 1
      front.next = front.next.next
    }
    if (!flag) {
      tail.next = front
      if (!newHead) {
        newHead = tail.next
      }
      tail = tail.next
    } else {
      tail.next = null
    }
    front = front.next
  }
  return newHead
};
// @lc code=end

