function solution(i, j, k) {
    var answer = 0;
    let n=i;
    let strK = String(k)
    while (n <= j){
        // 11일때 카운트 + 2 되어야함 
        answer += String(n).split('').filter((v)=>v == strK).length
        n++;
    }
    
    return answer;
}