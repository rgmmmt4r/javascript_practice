var deleteDuplicates = function(head) {
    let fast = head;
    let slow = head;
    while(fast !== null){
        if(slow.val === fast.val){
            fast = fast.next;
            continue;
        }else{
            slow.next = fast
            slow = fast;
        }

    }
    if(slow !== null)
        slow.next = null
    return head;
};