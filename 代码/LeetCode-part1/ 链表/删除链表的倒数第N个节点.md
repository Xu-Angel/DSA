删除链表的倒数第N个节点
============

)描述
---------------


给定一个链表，删除链表的倒数第 _n_ 个节点，并且返回链表的头结点。

  
**示例：**

  

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.

  

**说明：**

  

给定的 _n_ 保证是有效的。

  

**进阶：**

  

你能尝试使用一趟扫描实现吗？

  

实现
---------------

  

### 1. 双循环

  

思路：

  

*   记录当前节点、前一个节点以及目标节点

*   从头节点开始循环，形成外层循环，里层循环 n 次，找到第 n+1 个节点

*   判断找到的节点是否是 null，如果是，则当前节点就是要删除的节点，否则继续外层循环

*   如果当前节点是头节点，则让头节点指向其下一个节点来删除其本身，返回头节点

*   通过记录的前一个节点，让其下一个节点指针指向其下一个节点的下一个节点，这样就删除了当前节点，然后返回头节点

  
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param
 *   head [object] ListNode
 *   n [number] the nth
 * @return
 *   [object] ListNode
 */
var removeNthFromEnd = function(head, n) {
  let cur = head,
      tar = head,
      prev = head;
  
  while (tar) {
    tar = cur;
    for (let i = 0; i < n; i++) {
      tar = tar.next;
    }
    if (tar)  {
      prev = cur;
      cur = cur.next;
    }
  }
  if (cur === head) {
    head = head.next;
    return head;
  }
  prev.next = prev.next.next;
  
  return head;
};
```
  

### 2. 单循环（只扫描一遍）

  

思路：

  

*   与上一个查找方法相似，但是不需要每次都遍历 n 次

*   先遍历 n 次，找到第 n+1 个节点，记录头节点为当前节点，第 n+1 个节点为最后节点，前一个节点为头节点

*   之后，每一次循环都更新当前节点和最后节点为其下一个节点，前一个节点更新为上一个当前节点，直到最后节点为 null，则当前节点就是要找的节点

*   同上一个方法进行判断、删除

  
```js
var removeNthFromEnd = function(head, n) {
  let cur = head,
      last = head,
      prev = head;
  
  for (let i = 0; i < n; i++) {
    last = last.next;
  }
  
  while (last) {
    prev = cur;
    cur = cur.next;
    last = last.next;
  }
  
  if (cur === head) {
    head = head.next;
    return head;
  }
  prev.next = prev.next.next;
  
  return head;
};
```