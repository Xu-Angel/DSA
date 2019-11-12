// https://leetcode-cn.com/problems/container-with-most-water/
/* 
https://leetcode-cn.com/problems/container-with-most-water/solution/shuang-zhi-zhen-fa-zheng-que-xing-zheng-ming-by-r3/
以i,j表示前后指针，H[i]表示位置i处的高度，n是输入的数据长度。S(i,j) = min(H[i],H[j]) * (j - i)S(i,j)=min(H[i],H[j])∗(j−i)是(i,j)对的面积。
 */
var maxArea = function (height) {
  let i = 0, // 左边界
      j = height.length - 1, // 右边界
      res = 0, // 最大值
      lastHeight = 0; // 存放上一次的高度
  while(i < j){
      if (height[i] < height[j]) { // 以左边界为高
          if (height[i] > lastHeight) { // 只考虑移动后高度增加的情况（移动后宽度肯定变小，若高度也变小，则面积是一定小于之前的）
              res = Math.max(res, (j - i) * height[i]); // 将最大值赋值给res
              lastHeight = height[i]; // 将高度赋值给lastHeight
          }
          i++;
      } else { // 以右边界为高
          if (height[j] > lastHeight) {
              res = Math.max(res, (j - i) * height[j]);
              lastHeight = height[j];
          }
          j--;
      }
  }
  return res;
};

