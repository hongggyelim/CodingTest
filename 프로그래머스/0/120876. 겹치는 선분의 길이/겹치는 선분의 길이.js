function solution(lines) {
    var answer = new Set();
    const arr =  lines.sort((a ,b)=> a[0] - b[0]);
    
    for (let i=0; i < arr.length; i++ ){
        for (let j= i+1; j < arr.length ; j++){
            
            const start = Math.max(arr[i][0], arr[j][0])
            const end = Math.min(arr[i][1], arr[j][1])
            
            if (start < end){
                for (let k= start; k < end; k++)
                    answer.add(k)
            }
        }
    }

    return answer.size;
}