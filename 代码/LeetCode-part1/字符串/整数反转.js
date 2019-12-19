/* 1. 转化为字符串，再转化为数组进行反转
思路：

*   转化为字符串，然后转化为数组

*   判断第一个是否为 负号，如果是就去掉第一个，然后进行反转

*   如果不是，就直接进行反转

*   反转后判断第一个是否为 0，如果是则去掉

*   然后将数组转化为字符串，如果前面第一个是负号的情况，再把符号加回去

*   转化为数字，判断是否超出范围，不超出就直接返回这个数字

*   超出就返回 0 */

var reverse = function(x) {
  let str = x+'',
    ary = str.split(''),
    num = 0;
  if (ary[0] === '-') {
    ary.shift();
    ary.reverse();
    if (ary[0] === '0') {
      ary.shift();
    }
    num = Number('-' + ary.join(''));
    return num < -(2 ** 31) ? 0 : num;
  }
  ary.reverse();
  if (ary[0] === '0') {
    ary.shift();
  }
  num = Number(ary.join(''));
  return num > (2 ** 31-1) ? 0:num;
};

  

/* 2. 直接进行数值计算

思路：

*   如果是 0，直接返回 0 即可

*   每次循环，将 x 的最后一位通过取余的方式获得并添加在结果的最后一位上 `result * 10 + x % 10`。这样不管正负都是可行的

*   进行结果的最大最小限制，放在前面是为了优化，只要计算过程中有超过的就可以直接结束，返回 0

*   去掉 x 的最后一位（通过除以 10），这里需要进行判断，x 为正时就向下取整，为负时，就向上取整，直到 x 等于 0 为止，循环结束，返回结果
 */
var reverse = function(x) {
  if (x === 0) return 0;
  let min = -(2 ** 31),
      max = 2 ** 31-1;

  let result = 0;
  while (x !== 0) {
    result = result * 10 + x % 10;

    if (result > max || result < min) return 0;

    if (x < 0) {
      x = Math.ceil(x/10);
    } else {
      x = Math.floor(x/10);
    }
  }

  return result;
};
reverse(123)