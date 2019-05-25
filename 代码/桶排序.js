/*
  初学算法，把学到的东西用自己的语言和Javascript去做一遍。

举个栗子，河边有5个猴子去摘桃子，每个猴子摘的不一样多最多摘10个，A猴子摘了4个，B猴子摘了6个，C猴子摘了8个，D猴子摘了5个吃了3个还剩2个，E猴子傻，摘一个扔一个，最后只摘了2个。根据猴子最后的桃子数进行排序。 我们把他们摘得桃子数组成一个数组 [4,6,8,2,2]，我们用一种方法进行排序。

这么五个数还用算法了？用脑子想一下就行了 8最大放前面 6第二 4第三 后面是 2 2，最后是[8,6,4,2,2]。

好吧，如果有100个咋办= =~

所以言归正传，不是用脑子排序，是用能够用编程语言实现的算法排序。

下面执行我的排序过程了

1、在河边放11个水桶，分别贴上号码（0-10）

2、让猴子坐到自己摘到的桃子数对应编号的水桶里。

3、我们从最后一个水桶往前数，如果水桶里有猴子，那么我们把水桶号写在纸上，有几只猴子就写几次号码，比如，9号水桶里有1只猴子，8号水桶里有两只猴子，那么我们在纸上呈现的是 9 8 8。当然，猴子所在水桶的顺序也是猴子的排名。

4、我们写下的结果就是从大到小的排序，对应的猴子也是他们的排名
*/
var arr = [4,6,8,2,2]

// 首先我们要11个水桶

var buket = new Array(11);
for (var i = 0; i <= 10; i ++) {
    buket[i] = 0;
}

// 然后，猴子有几个桃子就坐进对应编号的桶里

arr.forEach(function (x) {
    buket[x] ++;
});


// 然后就是从后往前 查水桶喽~

var newArr = [];

for (var i = 10; i >=0; i--) {
    for (var j = 0; j < buket[i]; j ++) {
        newArr.push(i);
    }
}

// 输出我们的排序结果
console.log(newArr);