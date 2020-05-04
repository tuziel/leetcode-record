# 面试题14- II. 剪绳子 II [MEDIUM]

<https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/>

给你一根长度为 `n` 的绳子，请把绳子剪成整数长度的 `m` 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 `k[0],k[1]...k[m]` 。请问 `k[0]*k[1]*...*k[m]` 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

&nbsp;

**示例 1：**

<pre><strong>输入: </strong>2
<strong>输出: </strong>1
<strong>解释: </strong>2 = 1 + 1, 1 × 1 = 1</pre>

**示例 2:**

<pre><strong>输入: </strong>10
<strong>输出: </strong>36
<strong>解释: </strong>10 = 3 + 3 + 4, 3 × 3 × 4 = 36</pre>

&nbsp;

**提示：**

* `2 <= n <= 1000`

注意：本题与主站 343 题相同：<https://leetcode-cn.com/problems/integer-break/>
