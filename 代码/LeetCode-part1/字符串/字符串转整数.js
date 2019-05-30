/* 
1. 利用 parseInt 以及 isNaN
思路：
使用 parseInt 转换字符串
如果是 NaN，则将结果变为 0
进行结果的最大最小值限制
*/

const Atoi = str => {
  let num = parseInt(str)
  if (isNaN(num)) num = 0
  let max = (2**31)-1,
    min = -(2 ** 31) - 1
  num = num > max ? max : num
  num = num < min ? min : num
  return num
}

/* 
2. 利用正则循环判断
思路：
先去空格
判断第一个字符是否是数字或者正负号，不是则返回 0
保存第一个字符串
循环字符串（从索引 1 开始），添加入结果字符中，遇到不是数字的跳出循环
如果第一个字符为正负号，且结果字符串为空，那么返回 0
否则，将正负号添加会结果字符串前面，并将结果字符串转化为数字
进行结果最大最小限制
返回结果数字
*/

var myAtoi = function(str) {
  str = str.trim();
  let reg = /^[0-9-+]/,
      max = (2**31)-1,
      min = -(2**31)
  if (!reg.test(str)) {
    return 0;
  }
  
  let num = '',
      c = str[0];
  for (let i = 1; i < str.length;i++) {
    if (!/[0-9]/.test(str[i])) {
      break;
    }
    num += str[i];
  }
  if ((c === '-' ||c === '+') && num.length === 0) return 0;
  num = (c + num)*1;
  num = num < min ? min : num;
  num = num > max ? max : num;
  return num;
};

