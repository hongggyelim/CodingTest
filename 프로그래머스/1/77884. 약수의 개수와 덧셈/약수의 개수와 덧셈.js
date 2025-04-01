
function getN(num){
    let n = 0; // 약수의 개수
    let i = 1; // num 이하의 모든 수 
    while(i <= num){
        if(num % i === 0){
            n ++;
        }
        i ++;
    }
    return n; 
}
function solution(left, right) {
    var answer = 0;
    // left ~ right 각각의 약수 개수 구하기
    for(let i = left; i <= right; i++){
        getN(i) % 2 === 0 ? answer+= i: answer-=i;
    }
    return answer;
}
