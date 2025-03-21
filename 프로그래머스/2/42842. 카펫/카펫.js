function solution(brown, yellow) {
    let temp = []
    let i = 1
    do{
        if(yellow % i===0) temp.push([i, yellow/i])
        i++;
    }while(i <= yellow/2)
    for (let [a,b] of temp){
        if ((a+2) * (b+2) === brown + yellow){
            return [a+2, b+2].sort((a,b)=> b - a)
        }
    }
}