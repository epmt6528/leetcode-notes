/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  while (head.val !== "done") {
    head.val = "done";
    head = head.next;
    if (!head) return false;
  }
  return true;
};
