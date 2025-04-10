function solution(k, score) {
    var answer = []; // 최소값
    let list =[];// 명예의 전당
    for(let i = 0; i < score.length; i++){
        let min = Math.min(...list);
        if(list.length < k){
            list.push(score[i]);
            answer.push(Math.min(...list));
        }else{
            if(score[i] > min){
                list.sort((a,b)=> b-a).pop();
                list.push(score[i])
            }
            answer.push(Math.min(...list));
        }
    }
    return answer;
}