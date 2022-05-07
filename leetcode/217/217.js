var containsDuplicate = function(nums) {
    var appearanceSet = new Set()

    for(var i = 0;i< nums.length;i++){
        if(!(appearanceSet.has(nums[i]))){
            appearanceSet.add(nums[i])
        } else{
            return true
        }
    }
    return false
};