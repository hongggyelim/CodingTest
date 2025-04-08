function solution(d, budget) {
    var answer = 0;
    d = d.sort((a,b)=> a - b);// 오름차순 정렬
    d.forEach((v)=> {
        budget -= v
        if(budget >= 0) answer ++;
    }) 
    return answer;
}