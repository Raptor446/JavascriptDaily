/**
 * @param {ListNode} head
 * @return {boolean}
 * (Floyd's Cycle-Finding Algorithm) - Use the two-pointer (slow/fast) technique. If there is a cycle, the fast pointer will eventually catch up to the slow pointer.
 */
const hasCycle = (head) => {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        
        // If the pointers meet, a cycle exists
        if (slow === fast) {
            return true
        }
    }

    return false // Fast pointer reached the end (null)
}
// Time: O(n), Space: O(1)