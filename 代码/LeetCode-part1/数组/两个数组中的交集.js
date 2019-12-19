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
    if (index !== -1) {
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
console.log(intersect([1], [1, 1]))

var intersect = function (nums1, nums2) {
  var sF = null,
    lF = null
  var arr = []
  var pushedArr = []
  if (nums1.length > nums2.length) {
    sF = nums2
    lF = nums1
  } else {
    sF = nums1
    lF = nums2
  }
  for (var i = 0; i < sF.length; i++) {
    var cur = sF[i]
    if (pushedArr.includes(cur)) continue
    pushedArr.push(cur)
    // cur 长度交集
    var lenS = 0
    var lenL = 0
    if (lF.includes(cur)) {
      for (var i = 0; i < sF.length; i++) {
        if (sF[i] === cur) {
          lenS += 1
        }
      }
      for (var i = 0; i < lF.length; i++) {
        if (lF[i] === cur) {
          lenL += 1
        }
      }
      // console.log(lenL, lenS, cur);
      var l = lenL === lenS ? lenL : Math.min(lenL, lenS)
      for (var i = 0; i < l; i++) {
        arr.push(cur)
      }
    }
  }
  console.log(arr)
};

intersect([43, 85, 49, 2, 83, 2, 39, 99, 15, 70, 39, 27, 71, 3, 88, 5, 19, 5, 68, 34, 7, 41, 84, 2, 13, 85, 12, 54, 7, 9, 13, 19, 92],
  [10, 8, 53, 63, 58, 83, 26, 10, 58, 3, 61, 56, 55, 38, 81, 29, 69, 55, 86, 23, 91, 44, 9, 98, 41, 48, 41, 16, 42, 72, 6, 4, 2, 81, 42, 84, 4, 13]);


var intersect = function (nums1, nums2) {
  var sF = null,
    lF = null
  var arr = []
  var pushedArr = []
  if (nums1.length > nums2.length) {
    sF = nums2
    lF = nums1
  } else {
    sF = nums1
    lF = nums2
  }
  for (var i = 0; i < sF.length; i++) {
    var cur = sF[i]
    pushedArr.push(cur)
    // cur 长度交集
    const index = lF.indexOf(cur)
    if (index !== -1) {
      lF.splice(index, 1)
      arr.push(cur)
    }
  }
  return arr
};
/**
 * 
 */