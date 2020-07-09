/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (65.97%)
 * Likes:    259
 * Dislikes: 0
 * Total Accepted:    67.2K
 * Total Submissions: 101.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其自底向上的层次遍历为：
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  let arr = [root]
  let res = [[root.val]]
  let count = 1
  while(arr.length) {
    let temp = count
    count = 0
    let line = []
    while(temp--) {
      let item = arr.shift()
      if(item.left) { arr.push(item.left); count++; line.push(item.left.val) }
      if(item.right) { arr.push(item.right); count++; line.push(item.right.val) }
    }
    if(line.length) {
      res.unshift(line)
    }
  }
  return res
};
// @lc code=end

