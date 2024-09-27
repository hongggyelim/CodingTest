function solution(emergency) { // 큰 수 = 1부터 우선순위 (위치는 유지)
    var answer = [];
    
    const dupArr = [...emergency].sort((a, b) => b - a) // 내림차순 정렬 
    // dupArr = [76, 24, 3]
    // emergency[i] 가 dupArr에 해당하는 index + 1를 반환
    
    for (let i = 0; i < emergency.length; i ++){
        for (let j = 0; j < emergency.length; j ++){
            if (emergency[i] === dupArr[j]){
                answer.push(j+1);
        }}}
    return answer;
}