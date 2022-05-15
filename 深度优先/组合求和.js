let candidates = [2,3,6,7], target = 7
let res = []
function dfs(nums, depth, path, target){
    if(!target){
        res.push(path);
        return;
    }
    if(target <= 0 || nums.length === depth){
        return;
    }
    // 如果不选该数字
    dfs(nums, depth + 1, path, target);
    // 如果选了该数字,且要走下一个
    // dfs(nums, depth + 1, [...path, nums[depth]], target - nums[depth]);
    // 如果选了该数字,且还选这一个
    dfs(nums, depth, [...path, nums[depth]], target - nums[depth]);
}
dfs(candidates, 0, [], target);

console.log(res)