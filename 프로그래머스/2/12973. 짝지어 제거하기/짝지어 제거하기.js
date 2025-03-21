function solution(s){
    var answer = [];
    for(let char of s){
        if (answer.at(-1) === char){
            s = s.slice(1);
            answer.pop();
        }else{
            answer.push(char);
        }
    }
    return answer.length ? 0 : 1;
}