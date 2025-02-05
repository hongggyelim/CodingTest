function solution(arr, queries) {
    var answer = [];
    answer.push(arr)
    for (let i = 0;i < queries.length; i++){
        const [first, second] = queries[i]
        const firstIndex = answer.at(-1)[first]
        const secondIndex = answer.at(-1)[second]
        
        let temp = [];
        for (let j = 0; j <arr.length; j++){
            j === first ? temp.push(secondIndex) : j === second? temp.push(firstIndex) : temp.push(answer.at(-1)[j])
        }
        answer.push(temp)
    }
    return answer.at(-1);
}