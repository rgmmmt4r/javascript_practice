var reverseList = function(head) {
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    var listVal = []
    if(head == undefined)
        return null
    while(head){
        listVal.push(head.val)
        head = head.next
    }
    var root2 = new ListNode()
    var temp = new ListNode(listVal.pop())
    root2.next = temp
    while(listVal.length != 0){
        temp.next = new ListNode(listVal.pop())
        temp = temp.next
    }
    return root2.next
};