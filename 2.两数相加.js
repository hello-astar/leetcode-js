/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (36.94%)
 * Likes:    4062
 * Dislikes: 0
 * Total Accepted:    363.9K
 * Total Submissions: 985.2K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
  let res = null
  let resLast = null
  let inPos = 0
  while(l1 || l2 || inPos) {
    let curr = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + inPos
    let temp = new ListNode(curr >= 10 ? curr - 10 : curr)
    inPos = curr >= 10 ? 1 : 0
    resLast ? resLast.next = temp : resLast = temp
    if(!res) res = resLast
    if(resLast.next) resLast = resLast.next
    l1 = (l1 ? l1.next : null)
    l2 = (l2 ? l2.next : null)
  }
  return res
};
// @lc code=end

/**思路
 * 1. 结果应为指针head
 * 2. 使用尾指针指向每次计算结果的最后一位
 */