function solution(arr, queries) {
    var answer = []
    answer.push(arr)
    for (let query of queries){
        const [start, end, k] = query;
        const temp = []
        answer.at(-1).forEach((num, index)=> (index >= start && index <=end && index % k ===0) ? temp.push(num+1) : temp.push(num))
        answer.push(temp)
    }
    
    return answer.at(-1);
}