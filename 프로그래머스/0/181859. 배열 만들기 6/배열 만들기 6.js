function solution(arr) {
    var answer = [];
    // 연속한 0이나 1이 2개 만나면 추가, 삭제-> 없음
    for (let i = 0; i < arr.length; i ++){
        answer.length === 0 ? answer.push(arr[i]) : 
        answer.at(-1) === arr[i] ? answer.pop() :
        answer.push(arr[i])
    }
    return answer.length > 0 ? answer : [-1];
}