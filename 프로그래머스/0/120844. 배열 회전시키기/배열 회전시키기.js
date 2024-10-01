function solution(numbers, direction) { //[1,2,3]
    var answer = [];
    let len = numbers.length;  
    for (let i = 0; i < len; i++){ 
    switch(direction){
        case "right" : 
            if( i !== len - 1){                       
                answer[i+1] = numbers[i]  
            }else{
                answer[0] = numbers[i] 
            } break;

        case "left" : 
            if ( i === 0){
                answer[len -1] = numbers[i]
            }else{
                answer[i-1] = numbers[i]
            } break;
    }
    }
    return answer;
}