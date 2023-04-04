var reverse = function(x) {
    const MaxLimit = Math.pow(2,31)
    let reverse = 0
    const isNegative = x<0 ? true:false
    x = Math.abs(x)

    for(let i = x;i;i = Math.trunc(i/10)){
        if(reverse> Math.floor(MaxLimit/10) ||(reverse== Math.floor(MaxLimit/10) && (i %10 >= 8))){
            return 0
        }
        reverse = reverse *10 + i%10
    }
    return  isNegative? -reverse:reverse
};