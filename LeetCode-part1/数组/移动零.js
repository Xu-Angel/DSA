/* 
1 删除后再添加
思路
*   循环数组，为了尽量减少数组塌陷带来的消耗，使用**从后往前遍历**
*   如果当前项为 0，则删除当前项，并记录删除的 0 的个数
*   循环结束后，删除了多少个 0，则在数组后面添加多少个 0
 */

const moveZeroes = arr => {
  let flag = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      flag++
    }
  }
  for (let i = 0; i < flag; i++) {
    arr.push(0)
  }
 }


/* 
2. 优化删除后再添加
思路
*   这里由于是从后往前遍历，可以循环结束后添加，也可以每次删除后添加
*   每次删除后添加，这样就可以减少后面的循环消耗，也不需要记录了
 */

cosnt moveZeroes = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      arr.push(0)
    }
  }
}

/* 
3. 循环交换位置
思路
*   循环数组，从后往前遍历
*   当前项为 0，则让其与后面所有的不为 0 的数都交换位置
*   这里判断与不为 0 的数交换，也是为了减少操作，从后往前遍历才能实现 
*/

const moveZeroes = nums => {
  for (let i = nums.length - 1; i >= 0; i--) {    
    let item = nums[i];    
    if (item === 0) {      
      for (let j = i; j < nums.length-1; j++) {
        let temp = null;
        if (nums[j+1] === 0) {
          break;
        } else {
          temp = nums[j+1];
          nums[j+1] = nums[j];
          nums[j] = temp;
        }
      }   
    }  
  }
};