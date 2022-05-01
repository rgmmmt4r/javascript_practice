var majorityElement = function(nums) {
    var n = nums.length
    var half_n = Math.floor(n/2)
    var frequencyDict = {}
    for(var i = 0;i < n ; i++){
        if(nums[i] in frequencyDict ){
            frequencyDict[nums[i]] = frequencyDict[nums[i]] + 1
            if(frequencyDict[nums[i]] > half_n)
                return nums[i]
        }else{
            frequencyDict[nums[i]] = 1
            if(frequencyDict[nums[i]] > half_n)
                return nums[i]
        }
    }
};

console.log(majorityElement([3,2,3]))