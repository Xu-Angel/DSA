let arr = [1, 2, 3, 4, 5]
// 一升值就买卖
// 弊端：会产生连续购入和卖出
// const maxProfit = arr => {
//   let total = 0
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       total += arr[i + 1] - arr[i]
//     }
//   }
//   return total
// }

// 增加两个索引记录买入卖出  算出峰值 进行买卖
/* 
思路：
增加记录买入、卖出时的索引
增加比较，如果前一个不存在或者大于当前值，并且当前值小于后一个值，则记录当前索引为买入（此时实际买入），后一个索引为卖出索引（只是记录可能卖出，不是实际卖出）
如果前一个小于当前值，且当前值小于后一个值，则只记录后一个索引为卖出索引
如果当前值大于后一个值，则比较记录的两个买入、卖出索引值，不相等，则进行实际卖出，计算入收益，然后让买入索引（可能）变为卖出索引
在循环之后，仍然进行上一步操作，防止递增的数组退出循环，没有实际卖出
*/
var maxProfit = function (prices) {
  let total = 0,
    purchase = 0, // 记录买入
    sellOut = 0; // 记录卖出

  for (let i = 0; i < prices.length - 1; i++) {
    //=> 记录买入索引和卖出索引，此时实际买入
    if ((typeof prices[i - 1] === 'undefined' || prices[i - 1] >= prices[i]) && prices[i] < prices[i + 1]) {
      purchase = i;
      sellOut = i + 1;
      continue;

      //=> 更新卖出索引的情况
    } else if (prices[i - 1] < prices[i] && prices[i] < prices[i + 1]) {
      sellOut = i + 1;
      continue;
    }
    //=> 实际卖出
    if (purchase !== sellOut) {
      total += prices[sellOut] - prices[purchase];
      purchase = sellOut;
    }
  }
  //=> 防止递增数组退出循环，没有进行实际卖出
  if (purchase !== sellOut) {
    total += prices[sellOut] - prices[purchase];
    purchase = sellOut;
  }
  return total;
};
maxProfit([1, 4, 2, 7, 8])