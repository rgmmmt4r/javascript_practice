var longestPalindrome = function(s) {
    var dp = []
    for(let i =0;i<s.length;i++){
        dp.push(Array(i).fill(false))
    }
    for(let i =1;i<s.length;i++){
        dp[i][i] = true
    }
    var longestPalindromicStart = 0
    var thisPalindromicLen = 1
    var longestPalindromicLen = 1
    for(let end =0;end< s.length;end ++){
        for(let start = end -1;start>-1;start --){
            if(s[end] == s[start]){
                if(start == end -1 || dp[start+1][end-1] == true){
                    thisPalindromicLen = end - start +1
                    dp[start][end] = true
                    if(thisPalindromicLen> longestPalindromicLen){
                        longestPalindromicLen = thisPalindromicLen
                        longestPalindromicStart = start
                    }
                }
            }
        }
    }
    return s.slice(longestPalindromicStart, longestPalindromicStart + thisPalindromicLen );
};