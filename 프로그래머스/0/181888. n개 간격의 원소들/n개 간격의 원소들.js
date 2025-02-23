function solution(num_list, n) {
    var answer = [];
    num_list.filter((v, i)=> i % n ? v: answer.push(v))
    return answer;
}