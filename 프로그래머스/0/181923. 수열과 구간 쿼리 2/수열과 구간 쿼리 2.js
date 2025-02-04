function solution(arr, queries) {
    var answer = [];
    for (let query of queries){
        const [start, end, minValue] = query
        const filtered = arr.filter((num, index)=>
            index >= start && index <= end && num > minValue
        )
        filtered.length ? answer.push(Math.min(...filtered)) : answer.push(-1);
    }
    return answer;
}