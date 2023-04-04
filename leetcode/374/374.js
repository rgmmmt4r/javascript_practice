var guessNumber = function(n) {
    if(n ==1){
        return n
    }
    var l = 1
    var h = n
    while(l<h){
        var mid = Math.floor((l+h)/2)
        if(guess(mid) == 1){
            l = mid +1
        }else if(guess(mid) == -1){
            h = mid -1
        }else{
            return mid
        }
    }
};