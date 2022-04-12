/**
        * @param {string[]} strs
        * @return {string[][]}
        */

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
strs = ["bdddddddddd", "bbbbbbbbbbc"]
// 方法一
var groupAnagrams1 = function (strs) {
    let m = new Map();
    for (let str of strs) {
        let arr = Array.from(str);
        arr.sort();
        let str1 = arr.join('')
        if (m.has(str1)) {
            m.set(str1, [...m.get(str1), str])
        }
        else {
            m.set(str1, [str]);
        }
    }
    let res = []
    for (let i of m) {
        res.push(i[1])
    }
    return res
}
// 方法二
var groupAnagrams = function (strs) {
    let m = new Map();
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let c of str) {
            let index = c.charCodeAt() - 'a'.charCodeAt();
            count[index]++;
        }
        let str1 = count.join('-');
        if (m.has(str1)) {
            m.set(str1, [...m.get(str1), str])
        }
        else {
            m.set(str1, [str])
        }
    }
    console.log(m)
    let res = [];
    for (let i of m) {
        res.push(i[1])
    }
    return res
}
console.log(groupAnagrams(strs));