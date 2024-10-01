function solution(box, n) {
    const list = box.map((num)=> Math.floor(num /n));
    const c = list.reduce((a,b)=> a* b)
    return c;
}
