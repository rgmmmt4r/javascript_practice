var isPalindrome = function(s) {
    var processedStr = []
    for(var i = 0;i< s.length ;i++){
        if(isCharacterALetter(s[i])){
            processedStr.push(s[i].toLowerCase())
        }else if(  isNumber(s[i]) ){
            processedStr.push(s[i])
        }
    }
    console.log(processedStr)
    if(processedStr.length == 0)
        return true
    else if(processedStr.length %2 == 0){
        half = s.length/2
        for(var i = 0;i< half;i++){
            if(processedStr[i] != processedStr[processedStr.length-1 -i])
                return false
        }
    }
    else if(processedStr.length %2 == 1){
        half = (s.length-1)/2
        for(var i = 0;i< half;i++){
            if(processedStr[i] != processedStr[processedStr.length-1 -i])
                return false
        }
    }
    return true
};

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}

function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }


console.log(isPalindrome(" "))