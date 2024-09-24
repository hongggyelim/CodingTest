function solution(price) {
    let dc;
    
    if (price >= 500000){
        dc= 0.8
    } else if(price >= 300000){
        dc= 0.9
    } else if(price >= 100000){
        dc = 0.95
    } else{
        dc= 1
    }
    return answer = Math.floor(price * dc, 2);
}