function solution(num_list, n) {
    var answer = [];
    const len = num_list.length / n ;
    // answer는 0, 1, 2, ... len -1 까지 인덱스를 갖는 배열 
    // answer의 원소 배열은 0, 1, .. n - 1 까지 인덱스를 갖는 배열 
    
    for (let i = 0; i < len ; i ++){ // i 는 num_list를 순회
        answer.push([]);        
    }
    for (let i = 0; i < num_list.length; i++){
        let row = Math.floor(i / n); // 행 계산
        let col =  i % n; // 열 계산
        
        answer[row][col] = num_list[i]
    }
    
    return answer;
}