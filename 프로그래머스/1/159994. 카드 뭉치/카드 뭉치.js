function solution(cards1, cards2, goal) {
    var answer = [];
    let target = [...goal]
    while(goal.length > 0){
        let first = goal[0];
        if(first === cards1[0]){
            answer.push(cards1.shift())
        }else{
            answer.push(cards2.shift())
        }
        goal.shift()
        
    }
    return answer.join('') === target.join('')? 'Yes' : 'No';
}