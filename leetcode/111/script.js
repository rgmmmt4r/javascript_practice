var minDepth = function(root) {
    if(root == null){
        return 0
    }else if(root.left !== null && root.right !== null){
        return Math.min(minDepth(root.left),minDepth(root.right))+1
    }else if(root.left == null){
        return minDepth(root.right) +1
    }else{
        return minDepth(root.left) +1
    }
}; 