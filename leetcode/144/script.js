var preorderTraversal = function(root) {
    var treeElement = []
    function inputVal(root){
        if(root){
            treeElement.push(root.val)
            inputVal(root.left)
            inputVal(root.right)
        }
    }
    inputVal(root)
    return treeElement
};