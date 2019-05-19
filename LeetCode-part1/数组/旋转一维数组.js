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