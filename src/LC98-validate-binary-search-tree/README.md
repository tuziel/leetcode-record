# 98. 验证二叉搜索树 [MEDIUM]

<https://leetcode-cn.com/problems/validate-binary-search-tree/>

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

* 节点的左子树只包含**小于**当前节点的数。
* 节点的右子树只包含**大于**当前节点的数。
* 所有左子树和右子树自身必须也是二叉搜索树。

**示例 1:**

<pre><strong>输入:</strong>
    2
   / \
  1   3
<strong>输出:</strong> true
</pre>

**示例 2:**

<pre><strong>输入:</strong>
    5
   / \
  1   4
     / \
    3   6
<strong>输出:</strong> false
<strong>解释:</strong> 输入为: [5,1,4,null,null,3,6]。
      根节点的值为 5 ，但是其右子节点值为 4 。
</pre>
