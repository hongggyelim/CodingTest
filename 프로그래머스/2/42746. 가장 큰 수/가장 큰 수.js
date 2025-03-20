function solution(numbers) {
    let num = numbers.map(v=> String(v)).sort((a, b)=> (b + a) - (a + b)).join('');
    if (Number(num) === 0) return "0";
    return num
}