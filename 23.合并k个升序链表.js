/*
 * @author: cmx
 * @Date: 2020-11-11 17:21:58
 * @LastEditors: cmx
 * @LastEditTime: 2020-11-11 18:05:47
 * @Description: 文件描述
 * @FilePath: \leetcode\23.合并k个升序链表.js
 */
/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (53.56%)
 * Likes:    991
 * Dislikes: 0
 * Total Accepted:    185.5K
 * Total Submissions: 346.5K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 
 * 示例 2：
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  lists = lists.filter(item => item)
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  let head = null
  let front = null
  while (lists.length) {
    let min = 0
    for (let i = 1, size = lists.length; i < size; i++) {
      if (!lists[0]) {
        lists.splice(0, 1)
        continue
      }
      min = lists[i].val < lists[min].val ? i : min
    }
    if (!head) {
      head = lists[min]
      front = head
    } else {
      front.next = lists[min]
      front = front.next
    }
    lists[min] = lists[min].next
    if (!lists[min]) lists.splice(min, 1)
  }
  if (lists.length) {
    front.next = lists[0]
  }
  return head
};
// @lc code=end

