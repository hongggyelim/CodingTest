function solution(numlist, n) {
    var answer = [];
    let arr=[]
    for(let num of numlist ){
        arr.push([Math.abs(num - n), num])
    }
    const sorted = arr.sort((a, b)=>{
        if(a[0] === b[0]){
        return b[1] - a[1]
        }
        return a[0] - b[0]
        
    })
    answer = sorted.map((a)=>a[1])
    
    return answer;
}