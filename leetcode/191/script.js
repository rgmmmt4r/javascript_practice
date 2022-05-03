var hammingWeight = function(n) {
    var sum = 0
    while(n>0){
        if(n%2 ===1){
            sum = sum +1
        }
        n = Math.floor(n/2)
    }
    return sum
};