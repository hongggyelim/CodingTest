function solution(order) {
    return [...String(order)].filter((n)=>n*1!==0).map((n)=>n%3).filter((rest)=> rest === 0).length;
}