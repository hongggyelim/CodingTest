function solution(array, commands) {

    var answer = [];
    for(let command of commands){
        let [s, e, i] = command;
        answer.push(array.slice(s-1, e ).sort((a, b)=> a - b)[i - 1])
    }
    return answer;
}