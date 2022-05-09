var containsNearbyDuplicate = function(nums, k) {
    appearanceDict = {}
    for(var i=0; i< nums.length;i++){
        if(!nums[i] in appearanceDict){
            appearanceDict[nums[i]] = i
        } else{
            if( Math.abs(appearanceDict[nums[i]] - i) <= k)
                return true
            else
            appearanceDict[nums[i]] = i
        }
    }
    return false
};