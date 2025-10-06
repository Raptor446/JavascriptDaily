/**
 * @param {ListNode} head
 * @return {ListNode}
 * (The "Hare and Tortoise" Method) - This is solved by using two pointers: a slow pointer that moves one step at a time, and a fast pointer that moves two steps at a time. When the fast pointer reaches the end, the slow pointer will be at the middle.
 */
const findMiddleNode = (head) => {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next        // Moves 1 step
        fast = fast.next.next   // Moves 2 steps
    }

    return slow // 'slow' is the middle or second middle node
}
// Time: O(n), Space: O(1)