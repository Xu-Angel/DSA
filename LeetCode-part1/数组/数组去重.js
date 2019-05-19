// 题设场景见md
// 注意数组塌陷！
let array = [0, 1, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const removeDupByObj = arr => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      arr.splice(i, 1)
      i--
      continue
    }
    obj[arr[i]] = arr[i]
  }
  return arr.length
}

const removeDupBySize = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (typeof arr[i + 1] !== 'undefined' && arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1)
      i--
      continue
    }
  }
}