function solution(arr){
    let answer = []
    arr.forEach((v, i)=>{
        if(i === 0){
            answer.push(v)
        }else {
        if(v !== arr[i - 1]) answer.push(v)
        }
        
        
    })
    return answer
}