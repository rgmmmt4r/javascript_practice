var titleToNumber = function(columnTitle) {
    var columnLength = columnTitle.length
    var answer = 0
    for(var i =0; i<columnLength;i++){
        answer = answer + Math.pow(  26,i) * (columnTitle[columnLength - i -1].charCodeAt() -64)
    }
    return answer
};

titleToNumber("ABC")