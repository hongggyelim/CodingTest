function solution(board, k) {
    let answer = 0;
    board.forEach((v, i)=> v.forEach((w, j)=> {
        i + j <= k ? answer += w : w;
        
    }))
    return answer;
}