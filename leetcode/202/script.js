var isHappy = function(n) {
    function calculate(n){
        var num = 0
        n = n.toString()
        for(var i =0; i< n.length;i++){
            num = num +  Math.pow(parseInt(n[i]) ,2) 
        }
        return num
    }
    var appearanceSet = new Set()
    var thisRoundNumber = calculate(n)
    while(thisRoundNumber!= 1){
        if(appearanceSet.has( thisRoundNumber)){
            return false
        } else {
            appearanceSet.add(thisRoundNumber)
        }
        thisRoundNumber = calculate(thisRoundNumber)
    }
    return true
};