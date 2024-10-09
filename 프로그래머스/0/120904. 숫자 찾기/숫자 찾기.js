function solution(num, k) {
    var answer = 0;
    const arr = [...String(num)].map((v, i)=> v == k ? 1 : -1);
    if (arr.filter((v) => v === 1).length === 0 ) return -1;
    return arr.indexOf(1) + 1;
}