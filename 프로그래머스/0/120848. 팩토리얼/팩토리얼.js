function fac(n){
    return n === 0 ? 1 : fac(n-1)*n;
}
// fac(i)가 n보다 같거나 작은 값을 갖는 가장 큰 정수 i 
function solution(n) {
    var answer = [];
    for (let i = 1; fac(i) <= n ; i++){
        answer.push(i);
    }
    return answer[answer.length-1];
}