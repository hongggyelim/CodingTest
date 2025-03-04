function solution(arr) {
    var answer = [];
    // 연속한 0이나 1이 2개 만나면 추가, 삭제-> 없음
    
    arr.forEach((v)=> {
        answer.length === 0 ? answer.push(v) : 
        answer.at(-1) === v ? answer.pop() :
        answer.push(v)
    })
    return answer.length > 0 ? answer : [-1];
}