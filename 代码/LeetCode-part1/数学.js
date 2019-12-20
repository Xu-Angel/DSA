// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/61/



/* 
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/60/
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const arr = []
  for (var i = 0; i < n; i++) {
    const I = i+ 1
    if (I % 3 === 0 && I % 5 === 0) {
      arr[i] = 'FizzBuzz'
    } else if (I % 3 === 0) {
      arr[i] = 'Fizz'
    } else if (I % 5 === 0) {
      arr[i] = 'Buzz'
    } else {
      arr[i] = I + ''
    }
  }
  return arr
}
console.log(fizzBuzz(15))


/* 
https://leetcode-cn.com/problems/power-of-three/solution/3de-mi-by-leetcode/
*/

/* 
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/63/
*/

/* 
https://leetcode-cn.com/problems/hamming-distance/solution/javascriptwei-yun-suan-jie-fa-by-zhu-zhu-xia-6/
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let ans = 0
  while (x !== 0 || y !== 0) {
      if ((x & 1) !== (y & 1)) {
          ans++
      }
      x >>= 1
      y >>= 1
  }
  return ans
};

/* 
颠倒二进制位
https://leetcode-cn.com/problems/reverse-bits/solution/190-dian-dao-er-jin-zhi-wei-by-alexer-660/
*/

/* 
杨辉三角
https://leetcode-cn.com/problems/pascals-triangle/solution/javascript-ban-ben-by-raymond-yan/
*/

/* 
缺失数字
https://leetcode-cn.com/problems/missing-number/solution/que-shi-shu-zi-by-leetcode/
*/