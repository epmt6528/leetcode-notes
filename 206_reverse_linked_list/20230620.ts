/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Recursive Solution 1
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const lastNode = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  return lastNode;
};
// Recursive Solution 2
var reverseList = function (head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
// Iterative Solution
var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
