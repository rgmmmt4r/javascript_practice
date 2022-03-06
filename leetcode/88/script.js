var merge = function(nums1, m, nums2, n) {
    numDict = {}
    for(let i =0;i<m;i++){
        if(numDict.hasOwnProperty(nums1[i])){
            numDict[nums1[i]] +=1
        }else{
            numDict[nums1[i]] = 1
        }
    }
    for(let i =0;i<n;i++){
        if(numDict.hasOwnProperty(nums2[i])){
            numDict[nums2[i]] +=1
        }else{
            numDict[nums2[i]] = 1
        }
    }

    let keys = Object.keys(numDict)

    function sortNumber(a, b) {
        return a - b;
     }

    keys.sort(sortNumber)
    
    k = 0

    for(let i =0;i<keys.length;i++){
        var key =keys[i]
        var value = numDict[key]
        for(let j =0;j<value;j++){
            nums1[k] = key
            k+=1
        }
    }
    // console.log(nums1)
};




// var keys = Object.keys(dict); // or loop over the object to get the array
// // keys will be in any order
// keys.sort(); // maybe use custom sort, to change direction use .reverse()
// // keys now will be in wanted order

// for (var i=0; i<keys.length; i++) { // now lets iterate in sort order
//     var key = keys[i];
//     var value = dict[key];
//     /* do something with key & value here */
// } 


// class Solution:
//     def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
//         num_dict ={}
//         for i in range(m):
//             if nums1[i] not in num_dict:
//                 num_dict[nums1[i]] = 1
//             else:
//                 num_dict[nums1[i]] +=1
//         for i in range(len(nums2)):
//             if nums2[i] not in num_dict:
//                 num_dict[nums2[i]] = 1
//             else:
//                 num_dict[nums2[i]] +=1

//         num_items = num_dict.items()

//         sorted_items = sorted(num_items)

//         k = 0
//         for i in range(len(sorted_items)):
//             for j in range(sorted_items[i][1]):
//                 nums1[k] =  sorted_items[i][0]
//                 k +=1
//         # print(nums1)
