/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time Complexity: O(n) (Each node is visited once)
 * Space Complexity: O(n) (Due to the recursive call stack depth)
 */
const reverseListRecursive = (head) => {
    // Base case: If the list is empty or has only one node, it's already reversed.
    if (!head || !head.next) {
        return head
    }

    // Recursively reverse the rest of the list (everything *after* head)
    const newHead = reverseListRecursive(head.next)

    // After the recursive call returns:
    // head.next is the LAST node of the *original* list (now the SECOND node of the reversed list)
    // We want to link the original head *after* the new second node.
    // E.g., List: 1 -> 2 -> 3 -> 4. newHead is 4.
    // Current step: head is 3. head.next is 4.
    // 1. head.next.next = head // 4.next = 3 (reverses the link: 4 <- 3)
    head.next.next = head

    // 2. head.next = null // Break the old link: 3 -> 4 becomes 3 -> null
    head.next = null

    // newHead (the head of the fully reversed list) is propagated up
    return newHead
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Time Complexity: O(n) (Single pass)
 * Space Complexity: O(1) (Constant extra space for prev, current, nextTemp pointers)
 */
const reverseListBestIterative = (head) => {
    let prev = null      // Pointer to the previous node (initially null)
    let current = head   // Pointer to the current node (starts at the head)

    // The core idea is to change 'current.next' to point to 'prev'
    while (current !== null) {
        // 1. Store the next node before overwriting the 'next' pointer
        const nextTemp = current.next 

        // 2. Reverse the link: Make the current node point to the previous one
        current.next = prev 

        // 3. Move the pointers one step forward for the next iteration
        prev = current 
        current = nextTemp 
    }

    // When 'current' becomes null, 'prev' is the new head (the last node of the original list)
    return prev 
}
