var postorderTraversal = function(root) {
    var treeElement = []
    function postorderInput(root){
        if(root){
            postorderInput(root.left)
            postorderInput(root.right)
            treeElement.push(root.val)
        }
    }
    postorderInput(root)
    return treeElement
};