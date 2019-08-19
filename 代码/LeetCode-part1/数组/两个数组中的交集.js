
/* 
循环测试是否存在，存在则删除
思路：
先克隆一份需要操作的 arr2 数组
循环 arr1 数组
如果当前项在克隆的数组中已经存在，那么把当前项加入结果数组中，删除克隆数组中查找到的值（防止重复查找）
*/
/* 
这道题两种思路，空间换时间，或者不用额外空间就提升时间复杂度。

空间换时间的思路是用个Hash表来存数组1的元素以及出现的个数（此处需要遍历n次，并存一个n级别的空间）。
遍历数组2，发现数组2里有Hash表里的值就存到Result数组里，并把Hash表内该值次数减一（为0之后就Delete）。如果不存在Hash表里，就跳过。这样时间复杂度就是(m+n)

不用额外空间，就用遍历n的时候，判断值在不在m里，如果在，把m里的该值push到Result数组里，并将该值从m数组里删掉（用splice）。这样就是不用额外空间，但是提高了时间复杂度。
*/
const intersect = (arr1, arr2) => {
  let temp = arr2
  let result = []
  // 优化 短的来做forEach
  arr1.forEach(item => {
    const index = temp.indexOf(item)
    if ( index !== -1) {
      temp.splice(index, 1)
      result.push(item)
    }
  })
  return result
}

console.log(intersect([1], [1, 1]))

const intersect = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
console.log(intersect([1], [1,1]))
