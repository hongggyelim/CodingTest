function solution(n) {
    var answer = '';
    let l = answer.length
    while (l < n){
        l % 2 === 0 ? answer+= '수' : answer+= '박';
        l++
        
    }
    return answer;
}