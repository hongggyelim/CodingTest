function solution(arr, flag) {
    var X = [];
    flag.map((v, i) => flag[i] ? X.push(...Array(arr[i]*2).fill(arr[i])) : X = X.slice(0, X.length - arr[i]))
    return X;
}