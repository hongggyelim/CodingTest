function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            arr[i][j] === arr[j][i] ? answer ++ : answer;
        }
    }
    
    return answer === arr.length ** 2 ? 1 : 0;
}