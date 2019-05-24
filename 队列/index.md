## 栈的定义

>队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为**队尾**，进行删除操作的端称为**队头**。队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为*先进先出（FIFO—first in first out）线性表*。

- 顺序队列
  - 循环队列
- 链队列

## 队列的抽象数据类型

同样是线性表，队列也有类似线性表的各种操作，不同的就是插入数据只能在队尾进行，删除数据只能在队头进行。

```
ADT 队列(Queue)
Data
    同线性表。元素具有相同的类型，相邻元素具有前驱和后继关系。
Operation
    InitQueue(*Q):    初始化操作，建立一个空队列Q。
    DestroyQueue(*Q): 若队列Q存在，则销毁它。
    ClearQueue(*Q):   将队列Q清空。
    QueueEmpty(Q):    若队列Q为空，返回true，否则返回false。
    GetHead(Q, *e):   若队列Q存在且非空，用e返回队列Q的队头元素。
    EnQueue(*Q, e):   若队列Q存在，插入新元素e到队列Q中并成为队尾元素。
    DeQueue(*Q, *e):  删除队列Q中队头元素，并用e返回其值。
    QueueLength(Q):   返回队列Q的元素个数
endADT
```

通常队列在线程池等有限资源池中有所应用

![](./1.jpg)

队列的基本操作：
*   入列：在队列尾部添加一个元素
*   出列：从队列头部移除一个元素

 ![](https://cdn.nlark.com/yuque/0/2018/png/174243/1542094368420-a1c06040-c171-495c-ae3d-5d4f0bff8057.png) 
 
## 顺序队列

建立顺序队列结构必须为其静态分配或动态申请一片连续的存储空间，并设置两个指针进行管理。一个是队头指针front，它指向队头元素；另一个是队尾指针rear，它指向下一个入队元素的存储位置，如图所示

每次在队尾插入一个元素是，rear增1；每次在队头删除一个元素时，front增1。随着插入和删除操作的进行，队列元素的个数不断变化，队列所占的存储空间也在为队列结构所分配的连续空间中移动。当front=rear时，队列中没有任何元素，称为空队列。当rear增加到指向分配的连续空间之外时，队列无法再插入新元素，但这时往往还有大量可用空间未被占用，这些空间是已经出队的队列元素曾经占用过得存储单元。
顺序队列中的溢出现象：
- "下溢"现象：当队列为空时，做出队运算产生的溢出现象。“下溢”是正常现象，常用作程序控制转移的条件。
- "真上溢"现象：当队列满时，做进栈运算产生空间溢出的现象。“真上溢”是一种出错状态，应设法避免。
- "假上溢"现象：由于入队和出队操作中，头尾指针只增加不减小，致使被删元素的空间永远无法重新利用。当队列中实际的元素个数远远小于向量空间的规模时，也可能由于尾指针已超越向量空间的上界而不能做入队操作。该现象称为"假上溢"现象。

## 循环队列

在实际使用队列时，为了使队列空间能重复使用，往往对队列的使用方法稍加改进：无论插入或删除，一旦rear指针增1或front指针增1 时超出了所分配的队列空间，就让它指向这片连续空间的起始位置。自己真从MaxSize-1增1变到0，可用取余运算rear%MaxSize和front%MaxSize来实现。这实际上是把队列空间想象成一个环形空间，环形空间中的存储单元循环使用，用这种方法管理的队列也就称为循环队列。除了一些简单应用之外，真正实用的队列是循环队列。
在循环队列中，当队列为空时，有front=rear，而当所有队列空间全占满时，也有front=rear。为了区别这两种情况，规定循环队列最多只能有MaxSize-1个队列元素，当循环队列中只剩下一个空存储单元时，队列就已经满了。因此，队列判空的条件时front=rear，而队列判满的条件时front=（rear+1）%MaxSize。
队头和队尾可以在数组中循环变化。解决了移动数据的时间损耗，使得本来插入和删除是O(n)的时间复杂度变成了O(1)

队空和队满的情况如图

![](./2.jpg)

## 常含几个方法

- enqueue(element(s))：向队列尾部添加一个（或多个）新的项。
- dequeue() ：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- front() ：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不
做任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。
- isEmpty() ：如果队列中不包含任何元素，返回 true ，否则返回 false 。
- size() ：返回队列包含的元素个数，与数组的 length 属性类似。

## 队列的实现

### 数组实现的队列
```javascript
//基于数组实现的队列
function Queue(){
    var items = [];

    //入队
    this.enqueue = function(elem){
        items.push(elem);
    }

    //出队
    this.dequeue = function(){
        return items.shift();
    }

    //返回队列最前面的项
    this.front = function(){
        return items[0];
    }

    //队列是否为空
    this.isEmpty  = function(){
        return items.length == 0;
    }

    //队列的长度
    this.size = function(){
        return items.length;
    }

    //打印队列
    this.print = function(){
        console.log(items.toString());
    }
}
```

### 基于链表实现的队列：

队列的链式存储结构，其实就是线性表的单链表，只不过它只能尾进头出而已，我们把它简称为链队列。

```javascript
/**
 * 基于链表实现的队列。
 *
 * Author: nameczz
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class QueueBasedOnLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(value) {
        if (this.head === null) {
            this.head = new Node(value)
            this.tail = this.head
        } else {
            this.tail.next = new Node(value)
            this.tail = this.tail.next
        }
    }

    dequeue() {
        if (this.head !== null) {
            const value = this.head.element
            this.head = this.head.next
            return value
        } else {
            return -1
        }
    }
}
// Test
const newQueue = new QueueBasedOnLinkedList()
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
    res = newQueue.dequeue()
    console.log(res)
}
```