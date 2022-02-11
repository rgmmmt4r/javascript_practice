//https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    comm = strs[0];
    for(var i = 1; i < strs.length; i++){
        for(var j = 0; j < comm.length;j++){
            if(comm[j] !== strs[i][j]){
                if(j>0){
                    comm = comm.slice(0,j);
                    break;
                }else if(j ==0){
                    comm = "";
                    break;
                }
            }
        }
    }
    return comm;
};