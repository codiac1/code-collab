/*

LeetCode : 61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/

function reverse(node){
    let curr = node;
    let prev = null;
    let after = null;

    while(curr){
        after = curr.next;
        curr.next = prev;
        prev = curr;
        curr = after;
    }
    return prev;
}

var rotateRight = function(head, k) {
    if (head == null || head.next == null) return head;

    let n = 0;
    let node = head;

    while(node){
        node = node.next;
        n++;
    }

    if (k == n || k == 0) return head;

    k = k % n;

    let r = n - k - 1;
    node = head;

    while(r){
        node = node.next
        r--;
    }
    
    let mid_node = node.next
    node.next = null;

    let temp1 = reverse(head);
    let temp2 = reverse(mid_node);

    let rev_node = temp1

    while(rev_node.next){
        rev_node = rev_node.next;
    }

    rev_node.next = temp2

    return reverse(temp1)
};