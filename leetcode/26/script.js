

var removeDuplicates = function(nums) {
    if(nums === []){
        return null
    }
    slow = fast = 0
    while(fast <= nums.length -1){
        if(nums[fast] != nums[slow]){
            nums[slow +1] = nums[fast]
            slow +=1
        }
        fast += 1
    }
    return slow +1
}


