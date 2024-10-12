function solution(sides) {
    var answer = 0;
    // 반복하면서 sort()로 계속 내림차순 정렬해주고, 가장 큰값 [0] 이 나머지 [1]+ [2] 보다 작은지 확인 
    let initialX = sides[0] + sides[1];
    while(initialX > 0){
        let arr = [...sides, initialX].sort((a, b)=> b - a);
        // x 가 가능한 정수인지 검증
        if (arr[0] < arr[1] + arr[2]){
            answer ++;
        } 
        // splice 대신 filter 로 x 를 제거하면 최초 sides 배열에 있던 값 중 x와 동일한 값이 함께 삭제됨 
        let index = arr.indexOf(initialX);
        arr.splice(index, 1);
        initialX --;
        console.log(`if문 끝나고 initialX : ${initialX} arr: ${JSON.stringify(arr)} answer =${answer}`)
    }
    return answer;
}