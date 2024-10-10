function solution(n) {
    var answer = 0;
    return [...String(n)].reduce((acc, el)=> acc + +el, 0)
    return answer;
}