var plusOne = function(digits) {
    var num = BigInt(digits.join(''))
    num = num + 1n
    num = num.toString()
    var result = []
    for(var i =0;i<num.length;i++){
        result.push(num[i])
    }
    return result
};