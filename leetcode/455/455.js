var findContentChildren = function(g, s) {
    let g1 = g.sort((function(a, b){return a-b}))
    let s1 = s.sort((function(a, b){return a-b}))
    let i = 0
    let j = 0
    let ans = 0
    if(s1.length ==0 || g1.length ==0){
        return 0
    }
    while(i < g1.length){
        if(g1[i] <= s1[j] ){
            i +=1
            j +=1
            ans +=1
        }else{
            j +=1
        }
        if(j == s1.length){
            break
        }
    }
    return ans
};