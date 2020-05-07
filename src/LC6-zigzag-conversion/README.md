# 6. Z 字形变换 [MEDIUM]

<https://leetcode-cn.com/problems/zigzag-conversion/>

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

<pre>L   C   I   R
E T O E S I I G
E   D   H   N
</pre>

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。

请你实现这个将字符串进行指定行数变换的函数：

<pre>string convert(string s, int numRows);</pre>

**示例 1:**

<pre><strong>输入:</strong> s = "LEETCODEISHIRING", numRows = 3
<strong>输出:</strong> "LCIRETOESIIGEDHN"
</pre>

**示例 2:**

<pre><strong>输入:</strong> s = "LEETCODEISHIRING", numRows = 4
<strong>输出:</strong> "LDREOEIIECIHNTSG"
<strong>解释:</strong>

L     D     R
E   O E   I I
E C   I H   N
T     S     G</pre>
