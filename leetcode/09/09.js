/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x = x.toString()
    if(x.length % 2 ==0){
        for(let i =0; i <(x.length)/2 ;i++){
            if(x[i] != x[x.length -1 -i]){
                return false;
            }
        }
    }else{
        for(let i =0; i <(x.length-1)/2 ;i++){
            if(x[i] != x[x.length -1 -i]){
                return false;
            }
        }
    }

    return true;
    
};