function solution(s) {
    var answer = '';
    const arr= [...s].sort();
    for (let char of arr){
        if (arr.filter((c)=> c === char).length === 1){
            answer += char
        }
    }
    return answer;
}