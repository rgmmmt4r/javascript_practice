// wrong answer
var isSameTree = function(p, q) {
    var flag = true;
    var inOrder = function(p,q){
        cur1 = p;
        cur2 = q;
        if(cur1!==null && cur2!==null){
            if(cur1.left!==null && cur2.left!==null)
                inOrder(cur1.left,cur2.left);
            if(cur1!== cur2)
                flag = false;
            if(cur1.right!==null && cur2.right!==null)
                inOrder(cur1.right,cur2.right);
        }else if((cur1 ===null && cur2!== null) ||(cur1!==null && cur2===null)){
            flag = false;
        }
    }
    inOrder(p,q)
    return flag
};

    
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

p2 = TreeNode(2,undefined,undefined)

p = TreeNode(1,p2,undefined)

q2 = TreeNode(2,undefined,undefined)
q = TreeNode(1,undefined,q2)



console.log(isSameTree(p,q))