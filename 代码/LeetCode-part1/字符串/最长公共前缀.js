// 编写一个函数来查找字符串数组中的最长公共前缀,所有输入只包含小写字母 a-z 。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

/* 如果数组中只有一个字符串，则返回这个字符串，这一步可以提高性能
计算出字符串中最短的字符串的长度
从 0 开始循环最小长度，外层循环记录一个标记，方便退出外层循环，初始为 true
循环数组中的每一项（除了最后一项），将当前项与下一项的 外层循环的索引字符 做比较
如果相等，则继续循环，如果不相等，则将标记置为 false，退出里层循环
外层循环中，如果标记为 false，则退出外层循环，否则，这个字符为公共字符，添加入结果字符串中
最后返回结果字符串 */


/**
 * @param
 *   strs [object] string array
 * @return
 *   [string] common prefix
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let result = '',
    lengthAry = strs.map(item=>{
      return item.length;
    }),
    n = Math.min.apply(Math, lengthAry);
  
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < strs.length-1; j++) {
      let item = strs[j],
          next = strs[j+1];
      
      if (item[i] !== next[i]) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
    result += strs[0][i]; 
  }
  return result;
};

