function solution(arr, location) {
    var answer = 0; // 실행된 프로세스 개수
    let max;
    
    while(arr.length > 0){
        max = Math.max(...arr)
        let first = arr.shift();
        if(first === max){
            answer ++;
            if(location === 0){
                return answer;
            }else{
                location --;
            }
        }else{
            arr.push(first);
            if(location === 0){
                location = arr.length -1
            }else{
                location --;
            }
        }
}return answer;
}