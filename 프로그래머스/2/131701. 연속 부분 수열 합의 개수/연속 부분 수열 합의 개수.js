function solution(elements) {
    const sums = new Set()
    const n = elements.length;
    elements = elements.concat(elements);
    const sumArr = Array(n*2).fill(0)
    sumArr[0] = elements[0];
    for (let i = 1; i <n*2 ; i++){
        sumArr[i] = sumArr[i - 1] + elements[i]
    }
        
    for (let i = 1; i <= n; i++){
        for(let j = 0; j < n; j++){
            const sum = sumArr[j + i] - sumArr[j]
            sums.add(sum)
        }
    }
    return sums.size
}
