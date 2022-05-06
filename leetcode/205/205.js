var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    var isoDictTtoS = {}
    var isoDictStoT = {}
    for(var i = 0; i< s.length;i++){
        if(!(s[i] in isoDictStoT ) ){
            isoDictStoT[s[i]] = t[i]
        } else{
            if(isoDictStoT[s[i]] !== t[i]){
                return false
            }
        }
    }
    for(var i = 0; i< s.length;i++){
        if(!(t[i] in isoDictTtoS ) ){
            isoDictTtoS[t[i]] = s[i]
        } else{
            if(isoDictTtoS[t[i]] !== s[i]){
                return false
            }
        }
    }
    return true
};