// way-1 前后查找索引

const fun = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return true
  }
  return false
}
console.log(fun([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(fun([1, 2, 3, 4]))

// way-2 双循环

const fun = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true
    }
  }
  return false
}
console.log(fun([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(fun([1, 2, 3, 4]))

// way-3 先排序 再比较

const fun = array => {
  let arr = [...array]
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if ((typeof arr[i - 1] !== 'undefined' && arr[i] === arr[i - 1]) || (typeof arr[i + 1] !== 'undefined' && arr[i] === arr[i + 1])) return true
  }
  return false
}
console.log(fun([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(fun([1, 2, 3, 4]))