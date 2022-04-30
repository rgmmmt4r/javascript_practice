var convertToTitle = function(columnNumber) {
    var answer = ""
    var quotient = []
    var divident = columnNumber
    while(divident >26){
        quotient.push((divident-1)%26)
        divident = Math.floor((divident-1)/26)
    }
    quotient.push((divident-1))

    for(var i = 0; i< quotient.length;i++){
        answer =  answer.concat(String.fromCharCode(quotient[quotient.length-i-1] + 65))
    }
    return answer
};

console.log(convertToTitle(52))