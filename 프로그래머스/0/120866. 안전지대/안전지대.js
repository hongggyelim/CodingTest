const getSafe = (positions, n)=>{
    // n*n 배열 생성
        let safeArr = Array.from({ length: n }, () => Array(n).fill(0));
    //positions에 있는 배열 주위를 +1
    for (let position of positions){
        let x = position[0];
        let y = position[1]
        // 경계에서 x-1, y-1, x+1, y+1 이 |n| 을 초과할 수 있음
        
       // 경계 조건을 검사하며 safeArr 업데이트
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                let nx = x + dx;
                let ny = y + dy;

                if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                    safeArr[nx][ny] += 1;
                }
            }
        }
    }
    // 남아있는 0의 개수 리턴
    let answer = 0;
    for (let i = 0; i < safeArr.length; i ++){
        for (let j = 0; j < safeArr.length; j ++){
            if(safeArr[i][j] === 0) answer += 1
        }
    }
    return answer;
}

function solution(board) {
    let answer = 0;
    const n = board.length
    const total = n ** 2
    let positions = []
    
    if (n === 1) {
        return board[0][0] === 1 ? 0 : 1;
        }
    
    for (let i = 0 ; i < board.length ; i++){
        // 지뢰 positions 구하기
        if(board[i].includes(1)){
            for(let j = 0 ; j < board[i].length ; j++){
                if(board[i][j] === 1){
                    positions.push([i, j])
                }
            }
        }
    }
    
    answer = getSafe(positions, n)
    return answer;
}
