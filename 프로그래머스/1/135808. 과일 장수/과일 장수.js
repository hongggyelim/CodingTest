function solution(k, m, score) {
    var answer = 0;
    // k 최상품, p 최하점, m 한 상자 당 사과 개수, p * m => 한 상자 가격
    score.sort((a, b)=> b - a)
    for(let i = 0; i < score.length; i = i + m ){
        let sliced = score.slice(i, i + m )
        
        // console.log("start:", i, "end:",i + m -1 )
        // console.log(sliced)
        if(sliced.length === m){
            let min = Math.min(...sliced)
            answer += min * m 
            }
    }
    return answer;
}