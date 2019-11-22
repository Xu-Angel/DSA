//way0 暴力移动 一步一步移动
/* 
复杂度分析
时间复杂度：O(n*k)O(n∗k) 。每个元素都被移动 1 步（O(n)O(n)） k次（O(k)O(k)） 。
空间复杂度：O(1)O(1) 。没有额外空间被使用。
*/
const r = (arr, k) => {
  let temp, pre
  for (let i = 0; i < k; i++) {
    pre = arr[arr.length - 1]
    for (let i = 0; i < arr.length; i++) {
      temp = arr[i]
      arr[i] = pre
      pre = temp
    }
  }
  return arr
}
console.log(r([-1, -100, 3, 99], 2));
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

// function rotate(arr, k) {
//   const len = arr.length
//   const step = k % len
//   return arr.slice(-step).concat(arr.slice(0, len - step))
// }

// 末尾元素：arr.splice(-k%arr.length)的返回值 剩余元素：arr

// const moveArr = (arr,k)=>arr.splice(-k%arr.length).concat(arr)