/* 
利用前后出现的索引比较
循环数组，判断是否有重复，使用前后出现的索引比较
重复则继续
由于只有一个数字是出现一次的，把没有重复的那个返回即可 
*/
const singleNumber = arr => {
  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i]
  }
}

/* 
先排序后比较
克隆数组，防止改变原先数组
对克隆数组进行排序
循环克隆数组，让当前项与其前后两项进行比较
只要当前项与前后两项都不相等（不论是否存在），则该值就是需要返回的值
*/
const singleNumber = arr => {
  let sortArr = arr.sort((a, b) => a - b)
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return sortArr[i]
  }
}
// 弊端：需要一个额外的空间存储数组
