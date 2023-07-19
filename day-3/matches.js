//return all possible subsets of the given array

var subsets = function (nums) {
    let result = [[]];

    function recurse(index, currArr){
        for(let i = index; i<nums.length; 1++){
            currArr.push(nums[i]);
            result.push([currArr]);


            recurse(i+1, currArr);
            currArr.pop();
        }
    }

    recurse(0, []);

};  


//test case 1
const nums1 = [1,2,3];


console.log(subsets(nums1));