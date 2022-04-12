intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]

var merge = function (intervals) {
    intervals.sort((a, b)=>{
        return a[0] - b[0]
    })
    for (let i = 0; i < intervals.length - 1;) {
        if (intervals[i][1] < intervals[i + 1][0]) {
            i++;
            continue
        }
        else if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i + 1][0] = intervals[i][0];
            intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1])
            intervals.splice(i, 1);
        }
    }
    console.log(intervals)
    return intervals;   
};

merge(intervals);