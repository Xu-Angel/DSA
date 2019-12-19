/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) return strs[0]
  var len = 1
  var maxLen = 0
  var lenArr = []
  for (var i = 0; i < strs.length; i++) {
    lenArr.push(strs[i].length)
  }
  maxLen = Math.min(...lenArr)
  var idx = ''
  lenArr.forEach((v, i) => {
    if (v === maxLen) return idx = i
  })
  var str = '' // 结果变量
  var minStr = strs[idx] // 最短的元素作为基准 减少计算量
  loop(minStr.substr(0, len), len) // 递归增加公共字符
  return str
  function loop(s, len) {
    for (var i = 0; i < strs.length; i++) {
      if (s !== strs[i].substr(0, len)) {
        if (len === 1) {
          str = ''
        } else {
          str = s.substr(0, len - 1)
        }
        return
      } else {
        str = minStr.substr(0, len)
      }
    }
    if (len < maxLen) {
      loop(minStr.substr(0, len + 1), len + 1)
    } else {
      return str
    }
  }
};