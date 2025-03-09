function solution(n) {
    let newArray = Array(n).fill().map(v=> Array(n).fill(0));
    for (let i = 0; i < n ; i ++){
        newArray[i][i] = 1;
    }
    return newArray;
}