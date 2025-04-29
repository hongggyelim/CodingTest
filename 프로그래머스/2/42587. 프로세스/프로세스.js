function solution(arr, location) {
    var answer = 0; // 실행된 프로세스 개수
    let max;
    if (location === arr.indexOf(max)) return 1;
    let target = location;
    
    while(arr.length > 0){
        max = Math.max(...arr)
        let first = arr.shift();
        if(first === max){
            answer ++;
            console.log("최대값 -> 실행", answer)
            if(target === 0){
                return answer;
            }else{
                target --;
            }
        }else{
            arr.push(first);
            if(target === 0){
                target = arr.length -1
            }else{
                target --;
            }
        }
}return answer;
}