function solution(topping) {
    var answer = 0;
    // 첫번째~ i, i+1 ~ 마지막 커팅
    let first = new Set();
    let second = new Map();
    
    for(let t of topping){
        second.set(t, (second.get(t) || 0) + 1);
    }
    
    for (let i = 0 ; i < topping.length -1 ; i++){
        const t = topping[i]
        
        first.add(t)
        
        second.set(t, second.get(t) - 1)
        if(second.get(t) === 0){
            second.delete(t)
        }
        
        if(first.size === second.size) answer ++;
    }
    return answer;
}

