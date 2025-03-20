function solution(k, tangerine) {
    var answer = 0;
    var count = 0;
    let dict = {}
    tangerine.forEach(v=> dict[v] ? dict[v] += 1 : dict[v] = 1)
    Object.values(dict).sort((a, b)=> b - a).forEach((v)=> {
        if (answer < k){
            answer += v;
            count += 1;
        }
        
    })
    
    return count;
}