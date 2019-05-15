
// 思路：
// *  循环数组，将每一项（除最后一项外）都与其后面的所有项比较
// *  如果两项相加等于目标值，则将两项的索引添加进结果数组中，然后退出循环
// *  最后返回结果数组，不存在则返回空数组
const twoSun = (arr, target) => {
  let result = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i)
        result.push(j)
        break
      }
    }
  }
  return result
}