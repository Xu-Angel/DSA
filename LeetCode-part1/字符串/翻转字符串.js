
/* 1. 转换为数组进行反转
思路：
*   先转化为数组
*   使用数组的反转方法进行反转
*   再转换为字符串返回
 */

const reverseStr = str => str.split('').reverse().join()


/* 2. 从后往前循环每个字符
思路：
*   创建新字符串，从后往前循环每个字符
*   让当前字符拼接进创建的字符串中
*   返回创建的字符串 */

const reverseStr = s => {
  let str = ''
  i = s.length - 1 
  while (i >= 0) {
    str += s[i]
    i--
  }
  return str
}