/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var isNegative = false
    var isStartToRead = false
    var isLeadingChar = false
    var ans = ""
    let j = 0
    while( s[j] == " "){
        j+=1
    }
    for(let i = j;i<s.length;i++){
        if(isStartToRead == false){
            if(s[i] == "+" || s[i] == "-"){
                if(s[i] == "-"  && i < s.length-1){
                    isNegative = true
                }
                isStartToRead = true
            }else if(s[i]>"9" || s[i]<"0"){
                isLeadingChar = true   
            }else if(parseInt(s[i])!=  isNaN && parseInt(s[i]) >= 0 && !isLeadingChar){
                ans = s[i] +ans
                isStartToRead = true
            }        
        }else{
            if(s[i]>="0" &&s[i]<="9" && s[i] != "-" && s[i] != "+"){
                ans = ans + s[i]
            }else{
                break
            }
        }
    }
    if(ans == "")
        return 0
    ans = parseInt(ans)
    Max_Int = Math.pow(2,31) -1
    if(ans> Math.pow(2,31)-1){
        if(isNegative && ans> Max_Int -1){
            return (Max_Int+1) *-1
        }else{
             return Max_Int
        }
    }
    if(isNegative){
        return ans *-1
    }else{
        return ans
    }
    
};