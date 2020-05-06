# 10. 正则表达式匹配 [HARD]

<https://leetcode-cn.com/problems/regular-expression-matching/>

给你一个字符串`s`和一个字符规律`p`，请你来实现一个支持 `'.'`和`'*'`的正则表达式匹配。

<pre>'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
</pre>

所谓匹配，是要涵盖**整个**字符串`s`的，而不是部分字符串。

**说明:**

* `s`可能为空，且只包含从`a-z`的小写字母。
* `p`可能为空，且只包含从`a-z`的小写字母，以及字符`.`和`*`。

**示例 1:**

<pre><strong>输入:</strong>
s = "aa"
p = "a"
<strong>输出:</strong> false
<strong>解释:</strong> "a" 无法匹配 "aa" 整个字符串。
</pre>

**示例 2:**

<pre><strong>输入:</strong>
s = "aa"
p = "a*"
<strong>输出:</strong> true
<strong>解释:</strong>因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
</pre>

**示例3:**

<pre><strong>输入:</strong>
s = "ab"
p = ".*"
<strong>输出:</strong> true
<strong>解释:</strong>".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
</pre>

**示例 4:**

<pre><strong>输入:</strong>
s = "aab"
p = "c*a*b"
<strong>输出:</strong> true
<strong>解释:</strong>因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
</pre>

**示例 5:**

<pre><strong>输入:</strong>
s = "mississippi"
p = "mis*is*p*."
<strong>输出:</strong> false</pre>
