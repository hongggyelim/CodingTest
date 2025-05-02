function solution(N, stages) {
    var answer = [];

    const total = Array(N).fill(0)
    for(let i = 0; i < N ; i++){
        stages.forEach((v)=> {
            if(i < v)
            total[i] += 1
        })
    }
    
    const challenge = Array(N).fill(0)
    for(let i = 0; i < N ; i++){
        stages.forEach((v)=> { // 값 3 => 3 도전중 -> 인덱스 2
            if(i === v - 1)
            challenge[i] += 1
        })
    }
    
    // 실패율
    const fail = []
    total.forEach((v, i)=> fail.push((challenge[i] / v)))
    
    // fail 높은 순으로 index + 1 을 정렬
    return fail
            .map((value, index)=> ({value, index}))
            .sort((a, b)=> b.value - a.value)
            .map((item)=> item.index + 1)  
}