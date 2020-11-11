/*
 * @author: cmx
 * @Date: 2020-11-11 18:08:08
 * @LastEditors: cmx
 * @LastEditTime: 2020-11-11 18:21:43
 * @Description: 文件描述
 * @FilePath: \leetcode\110.平衡二叉树.js
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (54.84%)
 * Likes:    521
 * Dislikes: 0
 * Total Accepted:    148.5K
 * Total Submissions: 270.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,3,3,null,null,4,4]
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中的节点数在范围 [0, 5000] 内
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var getHeight = function (root) {
  if (!root) return 0
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}
var isBalanced = function(root) {
  if (!root) return true
  return (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end

