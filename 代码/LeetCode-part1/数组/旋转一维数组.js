// way1 前加后删
// 输入: [-1,-100,3,99] 和 k = 2
const rotate = (arr, k) => {
  if (k <= 0) return
  for (let key = 0; key < k; key++) {
    arr.unshift(arr[arr.length - 1])
    arr.pop()
  }
  console.log(arr)
}
rotate([-1, -100, 3, 99], 2)

//way2 整体移动  违背原地？

const rotate = (arr, k) => {
  if (k <= 0) return
  const l = arr.length
  // arr = arr.splice(arr.length  - k,k ).concat(arr) // -1
  // arr = [...arr.splice(arr.length  - k, k), ...arr] // -2
  console.log(arr);
}
rotate([-1, -100, 3, 99], 2)

// OPT: 数组移动的次数 没有限制 所以应该进行步数优化 先进行取余 得出真正需要的步数

function rotate(arr, k) {
  const len = arr.length
  const step = k % len
  return arr.slice(-step).concat(arr.slice(0, len - step))
}

// 末尾元素：arr.splice(-k%arr.length)的返回值 剩余元素：arr

const moveArr = (arr,k)=>arr.splice(-k%arr.length).concat(arr)