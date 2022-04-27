var hasCycle = function(head) {
    var slow = head
    var fast = head
    while(fast && fast.next){
        if(slow.next == fast.next.next){
            return true
        }
        slow = slow.next
        fast = fast.next.next  
    }
    return false
};