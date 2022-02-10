/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x = x.toString();
    right = x.length;
    for(var left = 0;left <= Math.floor((x.length-1)/2);left++){
        if(x[left] !== x[right-1]){
            return false
        }
        right = right - 1;
    }
    return true
};
