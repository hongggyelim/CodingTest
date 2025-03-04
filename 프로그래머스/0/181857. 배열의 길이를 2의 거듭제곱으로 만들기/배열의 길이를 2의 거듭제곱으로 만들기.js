function solution(arr) {
    let len = arr.length;
    let powerOfLen = 1;
    while(powerOfLen < len){
        powerOfLen *= 2;
    }
    return arr.concat(Array(powerOfLen - len).fill(0))
}