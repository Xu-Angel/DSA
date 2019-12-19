// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/
// ! 镜像反转
/* 
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

示例 1：
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
*/
fn = function (s) {
  var ed = s.length - 1
  var st = 0
  var isJi = (ed + 1) % 2 !== 0
  var l = isJi ? (ed - 1) / 2 : (ed + 1) / 2
  for (var i = 0; i < l; i++) {
    var temp = s[ed]
    s[ed] = s[st]
    s[st] = temp
    ed -= 1
    st +=1
  }
}