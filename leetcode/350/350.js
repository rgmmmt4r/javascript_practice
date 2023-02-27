var intersect = function(nums1, nums2) {
    var dict = {}
    for(let idx = 0; idx <  nums1.length ; idx++){
        if (nums1[idx] in dict){
            dict[nums1[idx]] = dict[nums1[idx]]+ 1
        }else{
            dict[nums1[idx]] = 1
        }
    }
    ans = []
    for(let idx = 0; idx <  nums2.length ; idx++){
        if (nums2[idx]  in dict){
            ans.push(nums2[idx] )
            if(dict[nums2[idx] ] == 1)
                delete dict[nums2[idx]];
            else
                dict[nums2[idx]] = dict[nums2[idx]] - 1
        } 
    }
    return ans
};

console.log(intersect([1,2,2,1],[2,2]))