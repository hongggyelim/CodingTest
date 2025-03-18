function solution(s){
    s = s.toLowerCase();
    let p = 0;
    let y = 0;
    [...s].forEach(v => v === 'p' ? p += 1 : v === 'y' ? y += 1 : v);
    
    return p === y ? true : false;
}