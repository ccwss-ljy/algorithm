nums = [1,2,3]

let res = [];
let used = new Map();
function dfs(nums, path, used){
    if(path.length === nums.length){
        res.push([...path]);
        return;
    }
    for(let i in nums){
        if(used.get(nums[i]) === 1){
            continue
        }
        else{
            used.set(nums[i], 1);
            path.push(nums[i]);
            dfs(nums, path, used);
            path.pop(nums[i]);
            used.set(nums[i], 0);
        }
    }
}
dfs(nums, [], used);

console.log(res)