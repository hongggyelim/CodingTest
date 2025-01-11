function solution(A, B) {
    var answer = 0;
    let merged;
    if (A === B) return answer;
    
    while (answer < A.length){
        let arr = answer === 0? [...A] : [...merged];
        answer += 1;
        let last = arr.pop()
        merged = [last, ...arr].join('')
        console.log("last", last)
        console.log("arr", arr)
        console.log("merged", merged);
        if (merged == B){
            return answer
        }
        console.log("answer", answer)
    }
    return -1;
}