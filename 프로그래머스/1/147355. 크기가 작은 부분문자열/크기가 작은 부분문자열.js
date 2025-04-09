function solution(t, p) {
    var answer = 0;
    let len = p.length
    for (let i = 0; i <= t.length - len; i++){
        let num = t.slice(i, i + len);
        if (num <= p) answer ++;
    }
    return answer;
}