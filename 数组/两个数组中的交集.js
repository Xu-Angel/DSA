
/* 
循环测试是否存在，存在则删除
思路：
先克隆一份需要操作的 arr2 数组
循环 arr1 数组
如果当前项在克隆的数组中已经存在，那么把当前项加入结果数组中，删除克隆数组中查找到的值（防止重复查找）
*/

const intersect = (arr1, arr2) => {
  let temp = arr2
  let result = []
  arr1.forEach(item => {
    const index = temp.indexOf(item)
    if ( index !== -1) {
      temp.splice(index, 1)
      result.push(item)
    }
  })
  return result
}