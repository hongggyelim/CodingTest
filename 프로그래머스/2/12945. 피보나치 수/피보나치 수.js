function solution(n) {
    var answer = 0;
    let arr = Array(n+1).fill(0n)
    arr[1] = 1n;
    for (let i = 2; i <= n; i++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567n
    }
    return Number(arr[n]);
}