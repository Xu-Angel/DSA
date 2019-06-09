腾讯 2018 笔试题
===========

1. 和谐数
--------------------

### 描述

S 为某个数 n 各位数之和，如果 S 能整除 n，那么 n 就是和谐数 求某个数是否是和谐数

### 实现


思路：


*   先求出 S，再判断 S 是否能整除 n

*   每次 S 加上 n 除以 10 的余数，n 变成 n 除以 10 后的正数部分，直到 n 为 0 为止
```
function isPeaceNum(num) {
  let sum = 0,
    temp = num;

  while (temp !== 0) {
    sum += temp % 10;
    temp = Math.floor(temp/10);
  }
  if (num % sum === 0) return true;
  return false;
}
```

2. 掰巧克力
---------------------

### 描述

巧克力可能有坚果可能没有，使用 0, 1 表示，1 为有坚果

巧克力可以被掰成 n 块，每块必须有且只有一个坚果

求掰一条巧克力的方案总数。

### 实现

思路：

*   把所有为 1 的索引保存起来

*   相邻 1 索引的差为 n，那么它们之间就有 n-1 个 0，它们之间就可以有 n 种方案

*   所有相邻 1 的方案相乘就得到了总方案

```
function getPossibleNum(ary) {
  if (ary.length === 1) return 1;
  let nAry = [];
  ary.forEach((item, index)=>{
    if (item === 1) nAry.push(index);
  });
  let result = 1;
  for (let i = 0; i < nAry.length - 1;i++) {
    let cur = nAry[i],
      next = nAry[i+1];
    result *= next-cur;
  }
  return result;
}
```

1. 最大能量
---------------------

### 描述

矿石 使用 字符串 S 表示，能源石有特定的规律，用 字符串 P 表示。

其中相邻的 能源石可以融合，可能会把前缀后缀融合到一起。 如：P:aba，两块融合的可能是 {abaaba, ababa, aba}

### 实现

思路：

*   每次获取与 p 匹配的开始索引和最后的索引，组合为一个数组，再保存在大数组中

*   每次找到后，都把开始查找的索引置为前面找到索引 +1，直到找不到为止

*   遍历大数组，如果相邻两个查找到的小数组中，第一个数组的第二项大于或等于第二个数组的第一项，说明他们之间有交集，那么就属于同一个融合的能源石，把第二个数组的第一项置为第一个数组的第一项，然后把第一个数组删除（或都置为 0，这个方案比较好，不需要考虑数组的塌陷）

*   遍历经过上面处理的大数组，其中的每个数组就是一个能量石，计算出总能量

```
function maxPower(s, p) {
  // 目标子串的长度
  let len = p.length,
     ary = [],
     index = -1;

  index = s.indexOf(p, 0);
  while(index !== -1) {
    // 把查找到的开始索引和结束索引组成的数组添加进去
    ary.push([index, index + len]);
    index = s.indexOf(p, index+1);
  }
  let result = 0;
  for (let i = 0; i < ary.length - 1; i++) {
    let cur = ary[i],
      next = ary[i+1];
    if (cur[1] >= next[0]) {
      next[0] = cur[0];
      cur[0] = cur[1] = 0;
    }
  }
  ary.forEach(item=>{
    result += (item[1] - item[0]) ** 2;
  });

  return reuslt;
}
```