function solution(n) {
    var answer = [];
    let x = n;
    answer.push(x)
    while(x !== 1){
    switch(x % 2){
        case 0 : x /=  2; answer.push(x); break;
        case 1 : x = x * 3 + 1; answer.push(x); break;
    }
    }
        
    return answer;
}