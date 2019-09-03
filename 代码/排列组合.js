/* 
排列，一般地，从n个不同元素中取出m（m≤n）个元素，按照一定的顺序排成一列，叫做从n个元素中取出m个元素的一个排列(permutation)。特别地，当m=n时，这个排列被称作全排列(all permutation)。
n! / (n-m)!
https://baike.baidu.com/item/%E6%8E%92%E5%88%97/7804523
*/
let p = ['a', 'b', 'c', 'd', 'e']
const result = []
function getPassword(p, num, password) {
    if (num === 0) return result.push(password)
    for (const i in p) {
        getPassword(p, num - 1, password + p[i])
    }
}
getPassword(p, 4, '', [])

/* 

n 个元素里取出 m 个的组合，可能性数量就是 n 个里取 m 个的排列数量，除以 m 个全排列的数量，也就是 (n! / (n-m)!) / m!。

总结排列的递归公式是P(n,m) = nP(n-1,m-1)可以按照这条公式组织递归，也就是一次n的循环（放入第i号元素）调用P(n-1,m-1)

组合的递归公式是C(n,m) =  C(n-1,m-1) +C(n-1,m)可以按照这条公式（放入或者不放入第0号元素）递归调用

组合数公式是指从n个不同元素中，任取m(m≤n)个元素并成一组，叫做从n个不同元素中取出m个元素的一个组合；从n个不同元素中取出m(m≤n)个元素的所有组合的个数，叫做n个不同元素中取出m个元素的组合数。用符号c(m,n) 表示。

c(n,m)=c(n-1,m-1)+c(n,m-1)
https://baike.baidu.com/item/%E7%BB%84%E5%90%88%E6%95%B0%E5%85%AC%E5%BC%8F
*/
var arr = [1, 2, 3, 4, 5, 6];

function genGroup(arr, result, count) {
  if (result.length === count) {
    console.log(result);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let new_arr = [...arr];
    let new_result = [...result];
    new_result.push(arr[i]);
    new_arr.splice(0, i + 1);
    genGroup(new_arr, new_result, count);
  }
}
genGroup(arr, [], 4)