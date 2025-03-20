function solution(answers) {
    var answer = [];
    const one = [ 1, 2, 3, 4, 5 ] 
    const two = [  2, 1, 2, 3,  2, 4, 2, 5]
    const thr = [  3, 3, 1, 1, 2,  2, 4, 4, 5, 5]

    let score = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === one[i % one.length]) score[0] ++;
        if (answers[i] === two[i % two.length]) score[1] ++;
        if (answers[i] === thr[i % thr.length]) score[2] ++;
    }
    
    let maxScore = Math.max(...score);
    for (let i = 0; i < 3; i++ ){
        if (score[i] === maxScore){
            answer.push(i + 1)
        }
    }
    
    
    return answer;
}