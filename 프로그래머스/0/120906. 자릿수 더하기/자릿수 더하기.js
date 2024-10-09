function solution(n) {
    var answer = 0;
    return [...String(n)].reduce((acc, el)=> acc*1 +el*1, 0)
    return answer;
}