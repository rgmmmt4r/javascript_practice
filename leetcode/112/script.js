var hasPathSum = function(root, targetSum) {
    var checkSum = function(node, targetSum, curSum = 0){
        curSum += node.val;
        if (curSum === targetSum && !node.left && !node.right){
            return true
        }else{
            var left = false
            var right = false
            if(node.left){
                left = checkSum(node.left,targetSum,curSum)
            }
            if(node.right){
                right = checkSum(node.right,targetSum,curSum)
            }
            return left || right
        }
    }
    if(root){
        return checkSum(root,targetSum)
    }else{
        return false
    }
    
};