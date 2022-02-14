//https://leetcode.com/problems/merge-two-sorted-lists/submissions/
class ListNode {
    constructor(val,next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode()
    var temp = dummy
    while(list1 !== null && list2 !== null){
        if(list1.val > list2.val){
            temp.next = list2
            list2 = list2.next
        }else{
            temp.next = list1
            list1 = list1.next
        }
        temp = temp.next
    }
    temp.next = list1 || list2
    return dummy.next
};


