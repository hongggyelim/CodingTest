function solution(n) {
    var answer = n+1;
    let origin = n.toString(2).split("").filter(v => v === "1").length // 1의 개수
    let next = 0
    while (next !== origin){
        next = answer.toString(2).split("").filter(v => v === "1").length
        if (origin === next) return answer;
        answer ++;
    }
    return answer;
}