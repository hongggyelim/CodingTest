function solution(arr, speeds) {
    var answer = [];
    let days = arr.map((v, i)=> Math.ceil((100 - v) / speeds[i]))
    let maxDay = days[0];
    let count = 0;
    
    for (let i = 0; i < days.length; i++){
        if(days[i] <= maxDay){
            count ++;
        }else{
            answer.push(count);
            count = 1;
            maxDay = days[i]
        }
        
    }
        answer.push(count)
        return answer
    }
    
