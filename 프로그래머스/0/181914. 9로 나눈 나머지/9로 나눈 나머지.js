function solution(number) {
    var answer = 0;
    [...number].forEach((v)=> answer+= v*1)
    return Number(answer) % 9;
}