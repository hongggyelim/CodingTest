function solution(x) {
    let sum = String(x).split("").map(v=> parseInt(v)).reduce((a,c)=> a + c, 0);
    return x % sum === 0 ? true : false;
}