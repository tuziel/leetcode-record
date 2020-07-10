---
tags:
- 排序
- 树状数组
- 线段树
- 二分查找
- 分治算法
---

# 315. 计算右侧小于当前元素的个数 [Hard]

<https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/>

给定一个整数数组 `nums`，按要求返回一个新数组 `counts`。数组 `counts` 有该性质： `counts[i]` 的值是 `nums[i]` 右侧小于 `nums[i]` 的元素的数量。

**示例:**
<pre><strong>输入:</strong> [5,2,6,1]
<strong>输出:</strong> [2,1,1,0] 
<strong>解释:</strong>
5 的右侧有 <strong>2 </strong>个更小的元素 (2 和 1).
2 的右侧仅有 <strong>1 </strong>个更小的元素 (1).
6 的右侧有 <strong>1 </strong>个更小的元素 (1).
1 的右侧有 <strong>0 </strong>个更小的元素.
</pre>
