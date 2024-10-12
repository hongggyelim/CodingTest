function solution(sides) {
    var answer = 0;
    // 반복하면서 sort()로 계속 내림차순 정렬해주고, 가장 큰값 [0] 이 나머지 [1]+ [2] 보다 작은지 확인 
    let initialX = sides[0] + sides[1];
            console.log(`최초 initialX : ${initialX}, sides: ${JSON.stringify(sides)}`)
    let newArr;
    while(initialX > 0){
        let x = initialX;
        let arr = sides;
        arr.push(x);
        arr.sort((a, b)=> b - a);
        console.log(`x: ${x}, arr: ${JSON.stringify(arr)}`)
        // x 가 가능한 정수인지 검증
        if (arr[0] < arr[1] + arr[2]){
            answer ++;
        } 
        let index = arr.indexOf(x);
        arr.splice(index, 1);
        initialX --;
        console.log(`if문 끝나고 initialX : ${initialX} arr: ${JSON.stringify(arr)} answer =${answer}`)
    }
    return answer;
}