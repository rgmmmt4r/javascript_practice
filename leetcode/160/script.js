var getIntersectionNode = function(headA, headB) {
    var setA = new Set()
    while(headA){
        setA.add(headA)
        headA = headA.next
    }
    while(headB){
        if(setA.has(headB)){
            return headB
        }
        headB = headB.next
    }
};