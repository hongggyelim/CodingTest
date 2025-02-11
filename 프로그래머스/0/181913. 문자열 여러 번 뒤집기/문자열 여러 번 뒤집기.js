function solution(my_string, queries) {
    var answer = [...my_string];

    queries.map((query, i)=>{
        const [start, end] = query;
        const reversed = answer.splice(start, end - start + 1).reverse()
        answer.splice(start, 0, ...reversed)
        
    })
    return answer.join("");
}