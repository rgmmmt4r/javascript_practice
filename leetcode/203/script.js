var removeElements = function(head, val) {
    class ListNode {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val);
            this.next = (next === undefined ? null : next);
        }
    }
    var temp = new ListNode()
    var root = temp
    temp.next = head
    while(temp.next){
        if(temp.next.val === val){
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }
    return root.next
};