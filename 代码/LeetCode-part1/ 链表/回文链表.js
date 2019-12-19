// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/45/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/* 
先遍历一次得到原链表的长度
遍历原链表的一半，将前一半反转得到一个新链表
遍历原链表剩下的一半，将每一项和新链表的每一项按顺序比较
相当于总共遍历原链表2次
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!(head && head.next)) return true;
  let size = 1;
  let secondHalf = head;
  while (head.next) {
    head = head.next;
    size++;
  }
  let firstHalf = null;
  for (let i = 0; i < size / 2; i++) {
    let temp = secondHalf;
    secondHalf = secondHalf.next;
    temp.next = firstHalf;
    firstHalf = temp;
  }
  if (size % 2 === 1) firstHalf = firstHalf.next;
  while(secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/* 
只要找到链表的中间位置，以中间位置为分界线，反转前半部分，再用反转了的前半部分与后半部分做对比，如有不同就返回false
这一种做法虽然有两次遍历，但两次遍历的长度均为链表个数的一半，所以达到时间复杂度为O（n）
奇数偶数的情况略有不同，奇数情况下，在判断值是否相同时mid要往后走一位

例如：
奇数：1 -> 2 -> 3 -> 2 ->1
遍历完成后：mid = 3->2->1
reversed = 2->1

偶数：1 -> 2 -> 2 ->1
遍历完成后：mid = 2->1
reversed = 2->1

作者：yan-hui-7
链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/shi-jian-fu-za-du-wei-onde-zhi-zhen-shi-xian-xiang/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!(head && head.next)) return true;
  let secondHalf = head;
  let firstHalf = null;

  while (head && head.next) {
    head = head.next.next;
    let temp = secondHalf;
    secondHalf = secondHalf.next;
    temp.next = firstHalf;
    firstHalf = temp;
  }
  if (head) secondHalf = secondHalf.next;
  while(secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
};
