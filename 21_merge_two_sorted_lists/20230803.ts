// Recursive Solution:
// The function is called recursively until one of the linked lists is completely traversed. In each recursive call,
// we move one step forward in either list1 or list2. If the length of list1 is m and the length of list2 is n,
// the function will be called m+n times. Therefore, the time complexity of this recursive function is O(m+n).
// Since this solution is recursive, it uses the function call stack to store the intermediate values.
// In the worst case, the function is called m+n times, leading to a function call stack of that depth.
// Therefore, the space complexity of this solution is also O(m+n).

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// Iterative Solution:
// The time complexity of this algorithm is dependent on the total length of the two linked lists.
// In each step, an element from either of the linked lists is added to the result list. So if the
// length of list1 is m and the length of list2 is n, the time complexity of this algorithm will be O(m+n).
// From a space complexity standpoint, since we are not creating any new nodes but using the nodes of the given lists,
// the additional space complexity is O(1)

var mergeTwoLists = function (list1, list2) {
  let tempNode = new ListNode(0);
  let currentNode = tempNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return tempNode.next;
};
