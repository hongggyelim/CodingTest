function solution(arr, intervals) {
    var answer = [];
    intervals.forEach((v)=>answer.push(...arr.slice(v[0], v[1]+1)))
    
    return answer;
}