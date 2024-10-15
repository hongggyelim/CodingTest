function solution(sides) {
    var answer = 0;
    // 반복하면서 sort()로 계속 내림차순 정렬해주고, 가장 큰값 [0] 이 나머지 [1]+ [2] 보다 작은지 확인 
    let initialX = sides[0] + sides[1];
    while(initialX > 0){
        let arr = [...sides, initialX].sort((a, b)=> b - a);
        console.log(arr);
        // x 가 가능한 정수인지 검증
        if (arr[0] < arr[1] + arr[2]){
            answer ++;
        } 
        initialX --;
    }
    return answer;
}