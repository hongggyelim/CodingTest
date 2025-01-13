const getSum = (num, total)=>{
    // 첫번째 항 total ~ total - num + 1 값 까지 더하기 
    let sum = 0;
    if (total === 0){
        for (let i = num ; i > 0;  i --){
        sum += i 
    }
    }else{
        for (let i = total ; i > total-num;  i --){
        sum += i 
    }
    }
    
    return sum;
}

function solution(num, total) {
    var answer = [];
    let index = 0;
    let targetTotal = getSum(num, total);
    // index 구하기 
    while (targetTotal !== total){
        index ++;
        targetTotal -= num;
    }
    // -1 씩 작아지는 배열 구하기
    if (total === 0){
        for (let i = 0 ; i < num ; i ++){
            answer.push(num - index - i)
        }
    } else{
        for (let i = num ; i > 0 ; i --){
        answer.push(total - index - (num - i))
    }}
            
    return answer.sort((a,b)=>a - b);
}