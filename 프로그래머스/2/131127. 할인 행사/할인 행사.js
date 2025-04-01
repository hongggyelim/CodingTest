function solution(want, number, discount) {
    var answer = 0;
    
    let day = 0;
    while(day + 10 <= discount.length){
        let obj = {}
        want.forEach((v,i)=> obj[v] = number[i])
        
        let arr = discount.slice(day, day+10)
        if (arr.length === 10) {
        
        arr.forEach((v, i)=> {
            if(obj[v]) obj[v] -= 1
        })
        
        if (Object.values(obj).every(v=> v === 0)) answer += 1;
        }
        day ++;
    }
    return answer;
}