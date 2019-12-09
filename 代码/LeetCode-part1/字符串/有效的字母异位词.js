/* 1. 利用替换删除字符

思路：

*   循环第一个字符串，将第二个字符串中替换当前字符为空，即，如果当前字符在第二个字符串中存在，则删除，不存在，则什么也不干

*   循环结束后，如果第二个字符串中还有字符，则不是异位词，返回 false
*   否则返回 true */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '')
  }
  if (t.length !== 0) return false
  return true
}

// 如果存在 Unicode 字符，利用正则，将其替换正常的字符（使用String.fromCodePoint()）

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  if (s.split('').sort().join(',') !== t.split('').sort().join(',')) return false
  return true
}

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  var sArr = s.split('')
  var tArr = t.split('')
  if (JSON.stringify(sArr.sort()) !== JSON.stringify(tArr.sort())) return false
  return true
}