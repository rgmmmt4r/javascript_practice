var lengthOfLastWord = function(s) {
    var len = s.length
    var idx = len -1
    while(s[idx] === " " ){
        idx = idx -1
    }
    var count = 0
    while(s[idx] !== " " && idx >=0){
        idx = idx - 1
        count = count + 1
    }
    return count
};