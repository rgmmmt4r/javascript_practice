var inorderTraversal = function(root) {
    answer = []
    var input_ans = function(root){
        var cur = root
        if(cur){
            input_ans(cur.left)
            answer.push(cur.val)
            input_ans(cur.right)
        }
    }
    input_ans(root)
    return answer
};