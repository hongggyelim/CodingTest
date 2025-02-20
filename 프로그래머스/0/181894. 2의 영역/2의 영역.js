function solution(arr) {
    // 2를 filter -> index => min, max 구해서 원본 arr에 index 로 slice 
    // 2부터 2까지 
    if(!arr.includes(2)) return [-1]
    
    const num2range = [];
    arr.filter((v, i)=>v === 2 ? num2range.push(i) : v);
    const min = Math.min(...num2range);
    const max = Math.max(...num2range);
    return arr.slice(min, max+1)
               
}