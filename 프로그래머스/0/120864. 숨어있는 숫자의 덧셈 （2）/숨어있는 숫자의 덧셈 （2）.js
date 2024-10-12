function solution(my_string) {
    var answer = 0;
    // 연속하는 숫자는 하나의 값으로 처리
    // 배열을 순회하면서 숫자가 아니면 다음 인덱스로, 
    // 그 다음값이 숫자가 아니면 그 값만 answer에 더하기
    // 그 다음값이 숫자가 아닐때까지 
    const arr = [...my_string];
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])){ // 값이 숫자면
            
            let j = i+1;
            console.log(`if문 초기값 i=${i}, j=${j}`)
            
            while(!isNaN(arr[j])){
                 j ++;
                console.log(`while문 j=${j}`)
            }
            console.log(`while 반복문 끝`) 
            answer += arr.slice(i, j).join('')*1;
            console.log(`if문 answer=${answer}`)
            
            i = j ;
            console.log(`if문 마지막 i=${i}`)
        } 
    } console.log(`for문 탈출`)
    return answer;
}