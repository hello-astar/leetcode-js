/*
 * @author: cmx
 * @Date: 2020-03-27 11:40:10
 * @LastEditors: cmx
 * @LastEditTime: 2020-03-27 15:30:24
 * @Description: 文件描述
 * @FilePath: \leetcode\21.合并两个有序链表.js
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (60.50%)
 * Likes:    906
 * Dislikes: 0
 * Total Accepted:    212.9K
 * Total Submissions: 351.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let res = new ListNode(0)
  let head = res
  while(l1 && l2)
  {
    res.next = new ListNode(l1.val <= l2.val ? l1.val : l2.val)
    l1.val <= l2.val ? l1 = l1.next : l2 = l2.next
    res = res.next
  }
  res.next = l1 || l2
  return head.next
};
// @lc code=end

